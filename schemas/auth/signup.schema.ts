import {z} from 'zod';
import {emailSchema} from '../common.schema';
import * as T from '../../types/index';

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/;

export const signupSchema = z
  .object({
    email: emailSchema,
    password: z
      .string()
      .regex(PASSWORD_REGEX, {
        message:
          'Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and minimum of 4 characters.',
      })
      .min(4, {message: 'Password must be at least 4 characters.'}),
    confirmPassword: z
      .string()
      .min(4, {message: 'Password must be at least 4 characters.'}),
    role: z.nativeEnum(T.Common.ActorRole, {
      errorMap: () => ({
        message: 'Please choose a role',
      }),
    }),
  })
  .superRefine(({confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

export type TSignupSchema = z.infer<typeof signupSchema>;
