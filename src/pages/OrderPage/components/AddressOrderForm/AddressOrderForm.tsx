import { Button, Checkbox, Flex, HoverCard, Stack, Text, TextInput, Title } from '@mantine/core';
import { IconHelpCircleFilled, IconX } from '@tabler/icons-react';

import type { useOrderPageProps } from '../../types';

export const AddressOrderForm = ({ ...props }: useOrderPageProps) => {
  const { functions, state } = props;

  const {
    formState: { errors },
    register
  } = state.forms.addressOrderForm;

  return (
    <Stack gap={24} maw={468} component='form' onSubmit={functions.forms.onSubmitAddressOrder}>
      <TextInput
        label='Улица'
        placeholder='Улица'
        {...register('street')}
        error={errors.street && <>{errors.street?.message}</>}
      />
      <TextInput
        label='Номер дома'
        placeholder='Дом'
        {...register('house')}
        error={errors.house && <>{errors.house?.message}</>}
      />
      <TextInput
        label='Номер квартиры'
        placeholder='Квартира'
        {...register('apartment')}
        error={errors.apartment && <>{errors.apartment?.message}</>}
      />
      <TextInput
        label='Заметка'
        placeholder='Заметка для курьера'
        {...register('comment')}
        error={errors.comment && <>{errors.comment?.message}</>}
      />

      {state.step === 5 && (
        <Flex>
          <Checkbox label='Оставить заказ у двери' pr={8} />
          <HoverCard width={224} offset={4} position='top-end'>
            <HoverCard.Target>
              <IconHelpCircleFilled size={20} color='var(--indicator-light)' />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Stack gap={4} maw={224} pos='relative'>
                <Title size={12}>Бесконтактная доставка</Title>
                <IconX
                  style={{
                    position: 'absolute',
                    top: 2,
                    right: 0,
                    cursor: 'pointer'
                  }}
                  size={14}
                  color='var(--indicator-light)'
                  stroke={2}
                />
                <Text inline c='var(--text-tertiary)' size='12'>
                  Курьер привозит заказ, оставляет его у двери и уходит, а вам приходит уведомление
                  на телефон о том, что заказ доставлен
                </Text>
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>
        </Flex>
      )}

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
