import {z} from 'zod';
import {emailSchema} from '../common.schema';

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, {message: 'Password is required'}),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
