import { Button, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { getRouteApi } from '@tanstack/react-router';

import type { Order } from '@/shared/types/order';

export const OrderSendPage = () => {
  const routerApi = getRouteApi('/order/send/');
  const search: { order?: string } = routerApi.useSearch();
  const navigate = routerApi.useNavigate();
  const order: Order = search.order ? JSON.parse(search.order) : null;

  return (
    <Stack gap={24} mt={48} mx={240}>
      <Flex align='center' gap={36}>
        <Image src='/svg/accept.svg' />
        <Title size={24}>Заявка отправлена</Title>
      </Flex>
      <Text c='var(--text-secondary)' size='lg'>
        Вы можете оплатить ваш заказ в разделе «Профиль»
      </Text>
      <Stack
        bd='1px solid var(--border-extraLight)'
        gap={24}
        maw={600}
        px={48}
        py={24}
        style={{ borderRadius: 16 }}
      >
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Номер заказа
          </Text>
          <Text>{order._id}</Text>
        </Stack>
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Статус
          </Text>
          <Text>{order.status}</Text>
        </Stack>
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Адрес доставки
          </Text>
          <Text>
            {order.receiverAddress.street}, {order.receiverAddress.house},{' '}
            {order.receiverAddress.apartment}
          </Text>
        </Stack>
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Тип доставки
          </Text>
          <Text>Доставка</Text>
        </Stack>
      </Stack>
      <Flex align='center' gap={24}>
        <Button
          fullWidth
          bd='1px solid var(--border-light)'
          c='black'
          fw={500}
          h={56}
          radius={16}
          size='md'
          variant='outline'
          w={220}
          onClick={() => navigate({ to: '/history' })}
        >
          Посмотреть статус
        </Button>
        <Button
          fullWidth
          bg='var(--bg-brand)'
          fw={500}
          h={56}
          radius={16}
          size='md'
          w={220}
          onClick={() => navigate({ to: '/' })}
        >
          На главную
        </Button>
      </Flex>
    </Stack>
  );
};
