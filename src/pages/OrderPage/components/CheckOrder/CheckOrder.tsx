import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';

import { formatPhoneNumber, getDayPrefix } from '@/shared/utils';

import type { useOrderPageProps } from '../../types';

interface OrderSection {
  fields: { label: string; value: string }[];
  title: string;
}

export const CheckOrder = ({ ...props }: useOrderPageProps) => {
  const { state, functions } = props;

  const orderData: OrderSection[] = [
    state.orderState.receiver && {
      title: 'Получатель',
      fields: [
        {
          label: 'ФИО',
          value: `${state.orderState.receiver.firstname} ${state.orderState.receiver.lastname} ${state.orderState.receiver.middlename}`
        },
        { label: 'Телефон', value: formatPhoneNumber(state.orderState.receiver.phone) }
      ]
    },
    state.orderState.sender && {
      title: 'Отправитель',
      fields: [
        {
          label: 'ФИО',
          value: `${state.orderState.sender.firstname} ${state.orderState.sender.lastname} ${state.orderState.sender.middlename}`
        },
        { label: 'Телефон', value: formatPhoneNumber(state.orderState.sender.phone) }
      ]
    },
    state.orderState.senderAddress && {
      title: 'Откуда забрать',
      fields: [
        {
          label: 'Адрес',
          value: `${state.orderState.senderAddress.street} ${state.orderState.senderAddress.house}`
        },
        { label: 'Заметка', value: state.orderState.senderAddress.comment || '' }
      ]
    },
    state.orderState.receiverAddress && {
      title: 'Куда доставить',
      fields: [
        {
          label: 'Адрес',
          value: `${state.orderState.receiverAddress.street} ${state.orderState.receiverAddress.house}`
        },
        { label: 'Заметка', value: state.orderState.receiverAddress.comment || '' }
      ]
    }
  ].filter(Boolean) as OrderSection[];

  return (
    <Stack>
      {orderData.map(({ title, fields }, index) => (
        <Flex
          key={index}
          align='center'
          bg='var(--bg-secondary)'
          gap={24}
          justify='space-between'
          px={48}
          py={24}
          style={{ borderRadius: 24 }}
          w='100%'
        >
          <Text truncate fw={500} maw={200} size='md' w='100%'>
            {title}
          </Text>

          {fields.map(({ label, value }, idx) => (
            <Stack key={idx} gap={2} maw={284} w='100%'>
              <Text c='var(--text-tertiary)' size='xs'>
                {label}
              </Text>
              <Text truncate c='var(--text-secondary)' h={25} size='md'>
                {value}
              </Text>
            </Stack>
          ))}

          <IconPencil size={24} color='var(--indicator-medium)' />
        </Flex>
      ))}
      {state.orderState.option && (
        <Stack gap={16} ta='end' w='100%'>
          <Title size='20'>Итого: {state.orderState.option?.price} ₽</Title>
          <Stack gap={4}>
            <Text inline c='var(--text-secondary)' size='md'>
              Тариф: {state.orderState.option.name}
            </Text>
            <Text inline c='var(--text-secondary)' size='md'>
              Срок: {getDayPrefix(state.orderState.option.days)}
            </Text>
          </Stack>
        </Stack>
      )}
      <Flex align='center' gap={24} justify='space-between' my={32}>
        <Button radius={16} size='md' variant='outline' w={328} onClick={functions.prevStep}>
          Назад
        </Button>
        <Button radius={16} size='md' type='submit' w={328} onClick={functions.createOrder}>
          Отправить
        </Button>
      </Flex>
    </Stack>
  );
};
