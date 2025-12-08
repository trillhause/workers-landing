import { z } from 'zod';

// List of common personal email providers to block
const PERSONAL_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'protonmail.com',
  'proton.me',
  'mail.com',
  'yandex.com',
  'zoho.com',
  'gmx.com',
  'live.com',
  'me.com',
  'msn.com',
  'qq.com',
  '163.com',
  '126.com',
];

// Zod schema for email validation
export const emailSchema = z.string().email('Please enter a valid email address.');

/**
 * Validates if the email has a valid format
 */
export function isValidEmail(email: string): boolean {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if an email is a work email by verifying it's not from a personal email provider
 */
export function isWorkEmail(email: string): boolean {
  if (!isValidEmail(email)) {
    return false;
  }

  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) {
    return false;
  }

  return !PERSONAL_EMAIL_DOMAINS.includes(domain);
}

/**
 * Extracts the domain from an email address
 */
export function getDomain(email: string): string | null {
  const domain = email.split('@')[1];
  return domain ? domain.toLowerCase() : null;
}
