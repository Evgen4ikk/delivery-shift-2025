import type { Options } from '@vitejs/plugin-react';

import type { AddressOrder } from './addressOrder';
import type { Point } from './point';
import type { UserOrder } from './userOrder';

export interface Order {
  _id: string;
  cancellable: boolean;
  option: Options;
  payer: 'RECEIVER' | 'SENDER';
  receiver: UserOrder;
  receiverAddress: AddressOrder;
  receiverPoint: Point;
  sender: UserOrder;
  senderAddress: AddressOrder;
  senderPoint: Point;
  status: number;
}
