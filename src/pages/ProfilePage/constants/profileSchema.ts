import { z } from 'zod';

const cyrillicOnlyRegex = /^[\u0400-\u04FF]+$/;
const specialCharsRegex = /^[^\s~!@#$%^&*()_+=[\]{};:"|\\,.<>/?-]+$/;

export const profileSchema = z.object({
  firstname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .max(60, { message: 'Поле должно иметь максимум 60 букв' })
    .min(1, { message: 'Поле должно иметь минимум 1 букву' })
    .regex(cyrillicOnlyRegex, { message: 'Поле должно содержать только кириллические символы' })
    .regex(specialCharsRegex, {
      message:
        'Поле содержит недопустимые символы или начинается/заканчивается пробелом или запрещенными символами'
    }),
  lastname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .max(60, { message: 'Поле должна иметь максимум 60 букв' })
    .min(1, { message: 'Поле должна иметь минимум 1 букву' })
    .regex(cyrillicOnlyRegex, { message: 'Поле должна содержать только кириллические символы' })
    .regex(specialCharsRegex, {
      message:
        'Поле содержит недопустимые символы или начинается/заканчивается пробелом или запрещенными символами'
    }),
  middlename: z
    .string()
    .max(60, { message: 'Поле должна иметь максимум 60 букв' })
    .min(1, { message: 'Поле должна иметь минимум 1 букву' })
    .regex(cyrillicOnlyRegex, { message: 'Поле должна содержать только кириллические символы' })
    .regex(specialCharsRegex, {
      message:
        'Поле содержит недопустимые символы или начинается/заканчивается пробелом или запрещенными символами'
    })
    .nullable(),
  email: z.union([z.literal(''), z.string().email('Неверный формат почты')]),
  phone: z.string().optional(),
  city: z.string().optional()
});

export type ProfileSchema = z.infer<typeof profileSchema>;
