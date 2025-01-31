import { Progress, Stack, Text, Title } from '@mantine/core';

import type { useOrderPageProps } from './types';

import { AddressOrderForm, CheckOrder, PayOrder, SendingMethod, UserOrderForm } from './components';
import { useOrderPage } from './hooks/useOrderPage';

const ORDER_HEADERS = {
  1: 'Способ отправки',
  2: 'Получатель',
  3: 'Отправитель',
  4: 'Откуда забрать',
  5: 'Куда доставить',
  6: 'Оплата доставки',
  7: 'Проверка данных заказа'
} as const;

const ORDER_STEPS: Record<number, (props: useOrderPageProps) => React.ReactNode> = {
  1: (props) => <SendingMethod {...props} />,
  2: (props) => <UserOrderForm {...props} />,
  3: (props) => <UserOrderForm {...props} />,
  4: (props) => <AddressOrderForm {...props} />,
  5: (props) => <AddressOrderForm {...props} />,
  6: (props) => <PayOrder {...props} />,
  7: (props) => <CheckOrder {...props} />
};

export const OrderPage = () => {
  const { state, functions } = useOrderPage();

  return (
    <Stack mt={48} mx={240}>
      <Title size={24}>{ORDER_HEADERS[state.step as keyof typeof ORDER_HEADERS]}</Title>
      <Stack gap={8}>
        <Text inline c='var(--text-primary)' size='12'>
          Шаг {state.step} из {Object.keys(ORDER_HEADERS).length}
        </Text>
        <Progress
          maw={464}
          value={(state.step / Object.keys(ORDER_HEADERS).length) * 100}
          color='var(--indicator-positive)'
        />
      </Stack>
      {ORDER_STEPS[state.step] && ORDER_STEPS[state.step]({ functions, state })}
    </Stack>
  );
};
