import { api } from '@/shared/api/instance';

export interface CancelOrderParams {
  orderId: string;
}

export type CancelOrderConfig = RequestConfig<CancelOrderParams>;

type CancelOrderResponse = BaseResponse;

export const cancelOrder = async ({ params, config }: CancelOrderConfig) =>
  api.put<CancelOrderResponse>(`/delivery/orders/cancel`, params, config);
