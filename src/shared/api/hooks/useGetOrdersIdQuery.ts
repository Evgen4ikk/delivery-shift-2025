import { useQuery } from '@tanstack/react-query';

import type { GetOrdersIdParams } from '../requests/delivery/orders/id';

import { getOrdersId } from '../requests/delivery/orders/id';

export const useGetOrdersIdQuery = (
  params: GetOrdersIdParams,
  settings?: QuerySettings<typeof getOrdersId>
) =>
  useQuery({
    queryKey: ['getProduct'],
    queryFn: () => getOrdersId({ params, config: settings?.config }),
    ...settings?.options
  });
