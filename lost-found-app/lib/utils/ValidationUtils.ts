/**
 * MONOLITHIC APPLICATION LAYER: /utils
 * 
 * Validation Utils
 * Common validation helper functions
 */

export class ValidationUtils {
  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate password strength
   */
  static validatePassword(password: string): {
    valid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    if (password.length > 128) {
      errors.push('Password must not exceed 128 characters');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Validate phone number (basic)
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Validate numeric ID
   */
  static isValidId(id: any): boolean {
    return Number.isInteger(parseInt(id)) && parseInt(id) > 0;
  }

  /**
   * Validate required fields
   */
  static validateRequired(data: Record<string, any>, fields: string[]): string[] {
    const missing: string[] = [];
    fields.forEach((field) => {
      if (!data[field]) {
        missing.push(field);
      }
    });
    return missing;
  }
}

export default ValidationUtils;
