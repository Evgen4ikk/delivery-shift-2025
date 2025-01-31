import { Button, Flex, Stack, TextInput } from '@mantine/core';
import { PatternFormat } from 'react-number-format';

import { formatPhoneNumber } from '@/shared/utils';

import type { useOrderPageProps } from '../../types';

export const UserOrderForm = ({ form, functions }: useOrderPageProps) => {
  const {
    formState: { errors },
    register,
    setValue,
    getValues
  } = form.state.userOrderForm;

  return (
    <Stack gap={24} maw={468} component='form' onSubmit={form.functions.onSubmitUserOrder}>
      <TextInput
        label='Фамилия'
        error={errors.lastname && <>{errors.lastname?.message}</>}
        placeholder='Фамилия'
        {...register('lastname')}
      />
      <TextInput
        label='Имя'
        error={errors.firstname && <>{errors.firstname?.message}</>}
        placeholder='Имя'
        {...register('firstname')}
      />
      <TextInput label='Отчество' placeholder='Отчество' {...register('middlename')} />

      <PatternFormat
        label='Телефон'
        mask='_'
        value={formatPhoneNumber(getValues('phone'))}
        customInput={TextInput}
        error={errors.phone && <>{errors.phone?.message}</>}
        format='+7 ### ### ####'
        onValueChange={({ value }) => setValue('phone', value)}
        placeholder='Телефон'
      />

      <Flex align='center' gap={24}>
        <Button fullWidth radius={16} size='md' variant='outline' onClick={functions.prevStep}>
          Назад
        </Button>
        <Button fullWidth radius={16} size='md' type='submit'>
          Продолжить
        </Button>
      </Flex>
    </Stack>
  );
};
