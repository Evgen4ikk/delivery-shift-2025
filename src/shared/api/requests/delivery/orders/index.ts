import type { Order } from '@/shared/types/order';

import { api } from '@/shared/api/instance';

type GetOrdersConfig = RequestConfig;

interface GetOrdersResponse extends BaseResponse {
  orders: Order[];
}

export const getOrders = async (requestConfig?: GetOrdersConfig) =>
  api.get<GetOrdersResponse>('/delivery/orders', requestConfig?.config);
