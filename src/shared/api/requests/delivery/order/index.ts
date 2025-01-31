import type { AddressOrder } from '@/shared/types/addressOrder';
import type { Options } from '@/shared/types/options';
import type { Order } from '@/shared/types/order';
import type { Point } from '@/shared/types/point';
import type { UserOrder } from '@/shared/types/userOrder';

import { api } from '@/shared/api/instance';

export interface CreateOrderParams {
  option: Options;
  payer: 'RECEIVER' | 'SENDER';
  receiver: UserOrder;
  receiverAddress: AddressOrder;
  receiverPoint: Point;
  sender: UserOrder;
  senderAddress: AddressOrder;
  senderPoint: Point;
}

export type CreateOrderConfig = RequestConfig<CreateOrderParams>;

interface CreateOrderResponse extends BaseResponse {
  order: Order;
}

export const createOrder = async ({ params, config }: CreateOrderConfig) =>
  api.post<CreateOrderResponse>('/delivery/order', params, config);
