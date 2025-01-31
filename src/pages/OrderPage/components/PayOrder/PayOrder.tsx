import { Button, Checkbox, Flex, Stack } from '@mantine/core';

import type { useOrderPageProps } from '../../types';

export const PayOrder = ({ functions, state }: useOrderPageProps) => {
  return (
    <Stack gap={24} maw={468}>
      <Checkbox
        checked={state.orderState.payer === 'RECEIVER'}
        label='Получатель'
        radius='xl'
        onChange={() => functions.orderFunctions.setPayer('RECEIVER')}
      />
      <Checkbox
        checked={state.orderState.payer === 'SENDER'}
        label='Отправитель'
        radius='xl'
        onChange={() => functions.orderFunctions.setPayer('SENDER')}
      />

      <Flex align='center' gap={24}>
        <Button fullWidth radius={16} size='md' variant='outline' onClick={functions.prevStep}>
          Назад
        </Button>
        <Button fullWidth radius={16} size='md' onClick={functions.nextStep}>
          Продолжить
        </Button>
      </Flex>
    </Stack>
  );
};
