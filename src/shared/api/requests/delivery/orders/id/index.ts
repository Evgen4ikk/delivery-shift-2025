import type { Order } from '@/shared/types/order';

import { api } from '@/shared/api/instance';

export interface GetOrdersIdParams {
  id: string;
}

export type GetOrdersIdConfig = RequestConfig<GetOrdersIdParams>;

interface GetOrdersIdResponse extends BaseResponse {
  order: Order;
}

export const getOrdersId = ({ params: { id }, config }: GetOrdersIdConfig) =>
  api.get<GetOrdersIdResponse>(`/delivery/orders/${id}`, config);
