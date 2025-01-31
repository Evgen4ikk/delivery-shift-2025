import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid, Select, Stack, TextInput, Title } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { useGetPointsQuery } from '@/shared/api/hooks/useGetPointsQuery';
import { useUpdateProfileMutation } from '@/shared/api/hooks/useUpdateProfileMutation';
import { useAuth } from '@/shared/contexts/auth';
import { formatPhoneNumber } from '@/shared/utils';

import type { ProfileSchema } from './constants/profileSchema';

import { profileSchema } from './constants/profileSchema';

export const ProfilePage = () => {
  const { mutateAsync: profileUpdate, isPending } = useUpdateProfileMutation();
  const { data: points } = useGetPointsQuery();
  const { authState } = useAuth();

  if (!authState.user) return null;

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      firstname: authState.user.firstname || '',
      middlename: authState.user.middlename || '',
      lastname: authState.user.lastname || '',
      email: authState.user.email || '',
      city: authState.user.city || '',
      phone: authState.user.phone
    }
  });

  const handleUpdateProfile = async (data: ProfileSchema) => {
    if (!data.phone || !data.middlename) return;
    await profileUpdate({
      params: {
        profile: {
          firstname: data.firstname,
          middlename: data.middlename,
          lastname: data.lastname,
          email: data.email,
          city: data.city
        },
        phone: data.phone
      }
    });
  };

  return (
    <Stack
      gap={24}
      mt={48}
      mx={240}
      component='form'
      onSubmit={form.handleSubmit(handleUpdateProfile)}
    >
      <Title size={24}>Профиль</Title>
      <Grid gutter={24}>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            label='Фамилия'
            radius={8}
            size='md'
            {...form.register('lastname')}
            error={form.formState.errors.lastname && <>{form.formState.errors.lastname?.message}</>}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <PatternFormat
            disabled
            label='Телефон'
            mask='_'
            radius={8}
            size='md'
            customInput={TextInput}
            format='+7 ### ### ####'
            placeholder='Телефон'
            {...form.register('phone')}
            value={formatPhoneNumber(form.getValues('phone') || '')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            label='Имя'
            radius={8}
            size='md'
            {...form.register('firstname')}
            error={
              form.formState.errors.firstname && <>{form.formState.errors.firstname?.message}</>
            }
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            label='Email'
            radius={8}
            size='md'
            {...form.register('email')}
            error={form.formState.errors.email && <>{form.formState.errors.email?.message}</>}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            label='Отчество'
            radius={8}
            size='md'
            {...form.register('middlename')}
            error={
              form.formState.errors.middlename && <>{form.formState.errors.middlename?.message}</>
            }
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            render={({ field }) => (
              <Select
                c='var(--text-secondary)'
                data={points?.data.points.map((point) => point.name)}
                {...field}
                label='Город'
                radius={8}
                size='md'
                value={points?.data.points.find((point) => point.name === field.value)?.name}
                onChange={field.onChange}
                placeholder='Город'
                withCheckIcon={false}
              />
            )}
            name='city'
            control={form.control}
          />
        </Grid.Col>
      </Grid>
      <Button
        bg='var(--bg-brand)'
        disabled={isPending}
        fw={500}
        h={56}
        radius={16}
        type='submit'
        w={328}
        loading={isPending}
      >
        Обновить данные
      </Button>
    </Stack>
  );
};
