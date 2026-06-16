# OTP Provider Architecture

The OTP system uses a **pluggable provider pattern** allowing easy swapping between SMS delivery services without changing core authentication logic.

## Current Provider

### Firebase Phone Verification

- **Status**: Primary OTP provider
- **Env Vars**: `FIREBASE_PROJECT_ID`, `FIREBASE_SERVICE_ACCOUNT_KEY`
- **SMS Channel**: Firebase Authentication Phone Verification (configure in Firebase Console)

## How It Works

1. **OtpService** manages the Firebase Phone Verification provider
2. Auth service calls `OtpService.sendOtp(phone, otp)` - no hardcoded provider knowledge
3. If Firebase is not configured, OTP codes are logged to console (dev/testing mode)
4. Extensible design allows adding new providers in the future without changing core logic

## Adding a New Provider

1. Create a new class extending `OtpProvider`:

```javascript
// server/src/core/otp/MyProviderOtpProvider.js
import OtpProvider from "./OtpProvider.js";
import { CustomError } from "../ErrorHandler.js";

class MyProviderOtpProvider extends OtpProvider {
  async sendOtp(destination, otp) {
    // Implementation here
  }

  getProviderName() {
    return "MyProvider";
  }

  isConfigured() {
    // Check if env vars are set
    return !!process.env.MY_PROVIDER_API_KEY;
  }
}

export default new MyProviderOtpProvider();
```

2. Register it in `OtpService.js`:

```javascript
import MyProviderOtpProvider from "./MyProviderOtpProvider.js";

this.providers = {
  firebase: FirebaseOtpProvider,
  myprovider: MyProviderOtpProvider,
};
```

3. Update `selectProvider()` to include priority logic for the new provider

## Environment Setup

### Firebase Phone Verification

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Phone Authentication in Firebase Console (Authentication > Sign-in method > Phone)
3. Generate a service account key:
   - Go to Project Settings > Service Accounts
   - Click "Generate New Private Key"
   - Convert the JSON to a single-line string (use a JSON minifier)

```bash
# Set environment variables
export FIREBASE_PROJECT_ID='your-project-id'
export FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"...","private_key":"..."}'
```

## Testing Provider

```javascript
// In your code or tests
import OtpService from "./core/otp/OtpService.js";

// Check current provider
console.log(OtpService.getProviderName()); // "Firebase Phone Verification"

// List all registered providers
console.log(OtpService.listProviders()); // ["firebase"]

// Send OTP
await OtpService.sendOtp("+1234567890", "123456");
```

## Notes

- **Firebase Setup**: Requires proper Firebase Console configuration for SMS delivery
- **Error Handling**: All providers throw `CustomError` with appropriate status codes
- **Simulated Mode**: Without Firebase configured, OTP codes are logged to console (useful for local development)
- **Provider Interface**: Custom providers must implement `OtpProvider` base class with `sendOtp()`, `getProviderName()`, and `isConfigured()` methods
