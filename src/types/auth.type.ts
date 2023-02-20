import { z } from 'zod';
export const SignInSchema = z.object({
  credential: z.string().min(1, {
    message: 'Username is required.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

export type TSignIn = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
  .object({
    username: z
      .string({
        required_error: 'Username is required.',
      })
      .min(5, {
        message: 'Username must be 5 or more characters long.',
      }),

    email: z
      .string({
        required_error: 'Email is required',
      })
      .min(1, {
        message: 'Email is required',
      })
      .email('Enter a valid email address.'),

    password: z
      .string({
        required_error: 'Password is required.',
      })
      .min(6, {
        message: 'Password must be 6 or more characters long.',
      }),

    confirm: z
      .string({
        required_error: 'Confirm password is required.',
      })
      .min(6, {
        message: 'Confirm password must be 6 or more characters long.',
      }),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords does not match.',
    path: ['confirm', 'password'],
  });

export type TSignUp = z.infer<typeof SignUpSchema>;
