import * as z from "zod";

export const registerSchema = z.object({
  email: z
    .email("email is invalid")
    .min(1, "email is required")
    .max(100, "email have maximum100 character"),
  password: z.string().min(1, "password is required").regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=\[{\]};:<>|./?,-]).{8,}$/, "password must contain uppercase, lowercase, number, and special character (min. 8 characters)"),
});

export type RegisterSchema = z.infer<typeof registerSchema>
