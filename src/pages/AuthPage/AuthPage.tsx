import { Button, Input, Stack, Text, TextInput, Title } from '@mantine/core';
import { PatternFormat } from 'react-number-format';

import { useAuthPage } from './hooks/useAuthPage';

export const AuthPage = () => {
  const { form, state, functions } = useAuthPage();

  return (
    <Stack gap={24} maw={484} mt={48} mx={240}>
      <Title size={24}>Вход</Title>
      <Text c='var(--text-primary)'>
        Введите номер телефона для входа
        <br /> в личный кабинет
      </Text>
      <Stack gap={24} component='form' onSubmit={functions.onSubmit}>
        <PatternFormat
          mask='_'
          radius={8}
          customInput={TextInput}
          format='+7 ### ### ####'
          placeholder='Телефон'
          {...form.register('phone')}
          error={
            'phone' in form.formState.errors ? form.formState.errors.phone?.message : undefined
          }
          onValueChange={({ value }) => form.setValue('phone', value)}
        />

        {state.stage === 'otp' && (
          <Input
            type='number'
            placeholder='Проверочный код'
            {...form.register('otpCode')}
            error={
              'otpCode' in form.formState.errors
                ? form.formState.errors.otpCode?.message
                : undefined
            }
          />
        )}

        <Button h={56} radius={16} type='submit' w={328} color='var(--bg-brand)'>
          {state.stage === 'phone' ? 'Продолжить' : 'Войти'}
        </Button>
      </Stack>
    </Stack>
  );
};
