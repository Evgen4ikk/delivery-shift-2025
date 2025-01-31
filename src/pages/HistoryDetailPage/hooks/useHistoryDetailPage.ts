import { getRouteApi } from '@tanstack/react-router';
import { useState } from 'react';

import { useCancelOrderMutation } from '@/shared/api/hooks/useCancelOrderMutation';
import { useGetOrdersIdQuery } from '@/shared/api/hooks/useGetOrdersIdQuery';

export const useHistoryDetailPage = () => {
  const routeApi = getRouteApi('/history/$id/');
  const params = routeApi.useParams();
  const { data, refetch, isLoading } = useGetOrdersIdQuery({
    id: params.id
  });

  const [isCancelModal, setIsCancelModal] = useState(false);

  const cancelOrder = useCancelOrderMutation();

  const handleCancelOrder = async () => {
    if (!data) return;
    const result = await cancelOrder.mutateAsync({
      params: {
        orderId: data.data.order._id
      }
    });
    if (result.data.success) {
      setIsCancelModal(false);
      refetch();
    }
  };

  return {
    state: {
      isLoading,
      order: data?.data.order,
      isCancelModal
    },
    functions: {
      setIsCancelModal,
      handleCancelOrder
    }
  };
};
