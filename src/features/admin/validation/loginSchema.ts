import * as z from "zod"; 

export const loginSchema = z.object({
  email: z.email('email is invalid').min(1, 'email is required').max(100, 'email only have maximum 100 character'),
  password: z.string().min(1, 'password is required').max(100, 'email only have maximum 100 character'),
})

export type LoginSchema = z.infer<typeof loginSchema>