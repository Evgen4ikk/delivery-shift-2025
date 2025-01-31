import { Button, Center, Flex, Image, Loader, Modal, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

import { useHistoryDetailPage } from './hooks/useHistoryDetailPage';

export const HistoryDetailPage = () => {
  const navigate = useNavigate();
  const { functions, state } = useHistoryDetailPage();

  if (state.isLoading || !state.order)
    return (
      <Center h='calc(100vh - 80px)' w='100%'>
        <Loader />
      </Center>
    );

  return (
    <Stack gap={24} mt={48} mx={240}>
      <Title size={24}>Детали заказа</Title>
      <Stack
        bd='1px solid var(--border-extraLight)'
        gap={24}
        px={48}
        py={24}
        style={{ borderRadius: 16 }}
      >
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Номер заказа
          </Text>
          <Text>{state.order._id}</Text>
        </Stack>
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Статус
          </Text>
          <Text>{state.order.status}</Text>
        </Stack>
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Адрес доставки
          </Text>
          <Text>
            {state.order.receiverAddress.street}, {state.order.receiverAddress.house},{' '}
            {state.order.receiverAddress.apartment}
          </Text>
        </Stack>
        <Stack gap={2}>
          <Text c='var(--text-tertiary)' size='xs'>
            Тип доставки
          </Text>
          <Text>Доставка</Text>
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
            w={192}
            onClick={() => navigate({ to: '/history' })}
          >
            Назад
          </Button>
          <Button
            fullWidth
            bg='var(--bg-brand)'
            fw={500}
            h={56}
            radius={16}
            size='md'
            w={192}
            onClick={() => functions.setIsCancelModal(true)}
          >
            Отменить заказ
          </Button>
        </Flex>
      </Stack>
      <Modal
        centered
        radius={24}
        onClose={() => functions.setIsCancelModal(false)}
        opened={state.isCancelModal}
      >
        <Stack align='center' display='flex' justify='center' mb={48} mx={108}>
          <Image src='/svg/question.svg' w={56} />
          <Title mb={30} size={20}>
            Отменить заказ
          </Title>
          <Stack gap={16}>
            <Button
              fullWidth
              bd='1px solid var(--border-light)'
              c='black'
              radius={16}
              size='md'
              variant='outline'
              w={328}
              onClick={functions.handleCancelOrder}
            >
              Отменить
            </Button>
            <Button fullWidth bg='var(--bg-brand)' radius={16} size='md' w={328}>
              Не отменять
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};
