import { useGetOrdersQuery } from '@/shared/api/hooks/useGetOrdersQuery';

export const useHistoryPage = () => {
  const getOrdersQueryResponse = useGetOrdersQuery();
  const orders = getOrdersQueryResponse.data?.data.orders
    ? getOrdersQueryResponse.data.data.orders
    : [];

  return {
    state: {
      orders
    }
  };
};
