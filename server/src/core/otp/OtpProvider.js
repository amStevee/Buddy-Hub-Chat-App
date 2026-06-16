/**
 * OtpProvider Interface
 *
 * All OTP providers must implement this interface to be compatible
 * with the authentication system. This allows easy swapping between
 * providers (Firebase, Twilio, AWS SNS, etc.) without changing core logic.
 */

export class OtpProvider {
  /**
   * Send OTP to a phone number or email
   * @param {string} destination - Phone number or email
   * @param {string} otp - The OTP code to send
   * @returns {Promise<void>}
   */
  async sendOtp(destination, otp) {
    throw new Error("sendOtp() must be implemented by subclass");
  }

  /**
   * Get provider name for logging/debugging
   * @returns {string}
   */
  getProviderName() {
    throw new Error("getProviderName() must be implemented by subclass");
  }

  /**
   * Validate provider configuration
   * @returns {boolean}
   */
  isConfigured() {
    throw new Error("isConfigured() must be implemented by subclass");
  }
}

export default OtpProvider;
