import { createContext } from 'react';

import type { AddressOrder } from '@/shared/types/addressOrder';
import type { Options } from '@/shared/types/options';
import type { Point } from '@/shared/types/point';
import type { UserOrder } from '@/shared/types/userOrder';

interface OrderState {
  option: Options | null;
  payer: 'RECEIVER' | 'SENDER';
  receiver: UserOrder | null;
  receiverAddress: AddressOrder | null;
  receiverPoint: Point | null;
  sender: UserOrder | null;
  senderAddress: AddressOrder | null;
  senderPoint: Point | null;
}

interface OrderFunctions {
  setOption: (option: Options) => void;
  setPayer: (payer: 'RECEIVER' | 'SENDER') => void;
  setReceiver: (receiver: UserOrder) => void;
  setReceiverAddress: (address: AddressOrder) => void;
  setReceiverPoint: (point: Point) => void;
  setSender: (sender: UserOrder) => void;
  setSenderAddress: (address: AddressOrder) => void;
  setSenderPoint: (point: Point) => void;
}

export interface OrderContextProps {
  orderFunctions: OrderFunctions;
  orderState: OrderState;
}

export const OrderContext = createContext<OrderContextProps>({
  orderState: {
    option: null,
    receiver: null,
    sender: null,
    senderAddress: null,
    receiverAddress: null,
    payer: 'RECEIVER',
    receiverPoint: null,
    senderPoint: null
  },
  orderFunctions: {
    setOption: () => {},
    setReceiver: () => {},
    setSender: () => {},
    setSenderAddress: () => {},
    setReceiverAddress: () => {},
    setPayer: () => {},
    setReceiverPoint: () => {},
    setSenderPoint: () => {}
  }
});
