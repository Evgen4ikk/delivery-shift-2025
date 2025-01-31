import { Stack, Table, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';

import { useHistoryPage } from './hooks/useHistoryPage';

export const HistoryPage = () => {
  const { state } = useHistoryPage();

  return (
    <Stack gap={24} mt={48} mx={240}>
      <Title size={24}>История</Title>

      <Table width='100%'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Text c='var(--text-tertiary)'>Номер заказа</Text>
            </Table.Th>
            <Table.Th>
              <Text c='var(--text-tertiary)'>Адрес доставки</Text>
            </Table.Th>
            <Table.Th>
              <Text c='var(--text-tertiary)'>Статус заказа</Text>
            </Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {state.orders.map((order) => (
            <Table.Tr key={order._id}>
              <Table.Td>
                <Text c='var(--text-primary)'>{order._id}</Text>
              </Table.Td>
              <Table.Td>
                <Text c='var(--text-primary)'>
                  {order.receiverAddress.street}, {order.receiverAddress.house},{' '}
                  {order.receiverAddress.apartment}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c='var(--text-primary)'>{order.status}</Text>
              </Table.Td>
              <Table.Td>
                <Link params={{ id: order._id }} to={`/history/$id`}>
                  <Text c='var(--text-quartenery)' style={{ cursor: 'pointer' }} td='underline'>
                    Подробнее
                  </Text>
                </Link>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};
