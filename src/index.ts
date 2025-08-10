import { z } from "zod";

/**
 * Email: basic RFC-like validation using regex.
 */
export const emailSchema = z
  .string()
  .email({ message: "Invalid email address" });

/**
 * Password: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special character.
 */
export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .refine(
    (val) => /[a-z]/.test(val),
    { message: "Password must contain at least one lowercase letter" }
  )
  .refine(
    (val) => /[A-Z]/.test(val),
    { message: "Password must contain at least one uppercase letter" }
  )
  .refine(
    (val) => /\d/.test(val),
    { message: "Password must contain at least one number" }
  )
  .refine(
    (val) => /[^A-Za-z0-9]/.test(val),
    { message: "Password must contain at least one special character" }
  );

/**
 * Username: 3-30 chars, alphanumeric and underscores only.
 */
export const usernameSchema = z
  .string()
  .min(3, { message: "Username must be at least 3 characters" })
  .max(30, { message: "Username must be at most 30 characters" })
  .regex(/^[a-zA-Z0-9._]+$/, {
    message: "Username can only contain letters, numbers, dots and underscores",
  });
