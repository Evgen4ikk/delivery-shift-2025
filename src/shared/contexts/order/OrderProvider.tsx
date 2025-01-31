import type { ReactNode } from 'react';

import { useMemo, useState } from 'react';

import type { AddressOrder } from '@/shared/types/addressOrder';
import type { Options } from '@/shared/types/options';
import type { Point } from '@/shared/types/point';
import type { UserOrder } from '@/shared/types/userOrder';

import { OrderContext } from './OrderContext';

export interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [option, setOption] = useState<Options | null>(null);
  const [receiver, setReceiver] = useState<UserOrder | null>(null);
  const [sender, setSender] = useState<UserOrder | null>(null);
  const [senderAddress, setSenderAddress] = useState<AddressOrder | null>(null);
  const [receiverAddress, setReceiverAddress] = useState<AddressOrder | null>(null);
  const [payer, setPayer] = useState<'RECEIVER' | 'SENDER'>('RECEIVER');
  const [senderPoint, setSenderPoint] = useState<Point | null>(null);
  const [receiverPoint, setReceiverPoint] = useState<Point | null>(null);

  const contextValue = useMemo(
    () => ({
      orderState: {
        option,
        receiver,
        sender,
        senderAddress,
        receiverAddress,
        payer,
        senderPoint,
        receiverPoint
      },
      orderFunctions: {
        setOption,
        setReceiver,
        setSender,
        setSenderAddress,
        setReceiverAddress,
        setPayer,
        setSenderPoint,
        setReceiverPoint
      }
    }),
    [option, receiver, sender, senderAddress, receiverAddress, payer]
  );

  return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
};
