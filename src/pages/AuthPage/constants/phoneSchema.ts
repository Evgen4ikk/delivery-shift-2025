import { z } from 'zod';

export const phoneSchema = z.object({
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(10, { message: 'Номер должен иметь минимум 10 цифр' })
});

export type PhoneSchema = z.infer<typeof phoneSchema>;
