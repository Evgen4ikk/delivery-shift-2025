import { z } from 'zod';

export const AddressOrderScheme = z.object({
  street: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(3, 'Улица должна быть минимум из 3 символов')
    .max(100, 'Улица должна быть не длиннее 100 символов'),

  house: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, 'Номер дома не может быть пустым')
    .max(20, 'Номер дома должен быть не длиннее 20 символов'),

  apartment: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, 'Номер квартиры не может быть пустым')
    .max(10, 'Номер квартиры должен быть не длиннее 10 символов'),

  comment: z
    .string()
    .optional()
    .refine(
      (val) => val === undefined || val.length <= 500,
      'Комментарий должен быть не длиннее 500 символов'
    )
});

export type AddressOrderSchemeType = z.infer<typeof AddressOrderScheme>;
