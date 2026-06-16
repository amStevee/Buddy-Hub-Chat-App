/**
 * OTP Service Factory
 *
 * Manages the Firebase Phone Verification OTP provider.
 * Designed to be easily extensible for other providers in the future.
 */

import FirebaseOtpProvider from "./FirebaseOtpProvider.js";
import { CustomError } from "../ErrorHandler.js";

class OtpService {
  constructor() {
    this.providers = {
      firebase: FirebaseOtpProvider,
    };
    this.activeProvider = this.selectProvider();
  }

  selectProvider() {
    // Firebase is the primary provider
    if (FirebaseOtpProvider.isConfigured()) {
      console.log("✓ Using Firebase Phone Verification OTP provider");
      return FirebaseOtpProvider;
    }

    console.warn(
      "⚠ Firebase OTP provider not configured. OTP delivery will be simulated.",
    );
    return null;
  }

  /**
   * Send OTP to a phone number
   */
  async sendOtp(destination, otp) {
    if (!this.activeProvider) {
      // Fallback: log to console (for dev/testing)
      console.log(
        `[OTP Simulation] Would send OTP "${otp}" to "${destination}"`,
      );
      return;
    }

    await this.activeProvider.sendOtp(destination, otp);
  }

  /**
   * Get current provider name
   */
  getProviderName() {
    return this.activeProvider
      ? this.activeProvider.getProviderName()
      : "Simulated";
  }

  /**
   * Register a new provider
   */
  registerProvider(name, provider) {
    if (
      !provider ||
      typeof provider.sendOtp !== "function" ||
      typeof provider.getProviderName !== "function" ||
      typeof provider.isConfigured !== "function"
    ) {
      throw new CustomError(
        "Invalid provider: must implement OtpProvider interface",
        400,
      );
    }
    this.providers[name.toLowerCase()] = provider;
  }

  /**
   * Switch to a specific provider by name
   */
  switchProvider(name) {
    const provider = this.providers[name.toLowerCase()];
    if (!provider) {
      throw new CustomError(`Provider "${name}" not registered`, 400);
    }
    if (!provider.isConfigured()) {
      throw new CustomError(`Provider "${name}" is not configured`, 400);
    }
    this.activeProvider = provider;
    console.log(`Switched to ${name} OTP provider`);
  }

  /**
   * List available providers
   */
  listProviders() {
    return Object.keys(this.providers);
  }
}

export default new OtpService();
