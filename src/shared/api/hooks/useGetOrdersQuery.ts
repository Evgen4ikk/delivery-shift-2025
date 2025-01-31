import { useQuery } from '@tanstack/react-query';

import { getOrders } from '../requests/delivery/orders';

export const useGetOrdersQuery = (settings?: QuerySettings<typeof getOrders>) =>
  useQuery({
    queryKey: ['getOrders', settings?.config],
    queryFn: () => getOrders({ config: settings?.config }),
    ...settings?.options
  });
