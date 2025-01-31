import { zodResolver } from '@hookform/resolvers/zod';
import { getRouteApi } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { useForm } from 'react-hook-form';

import type { Options } from '@/shared/types/options';

import { useCreateOrderMutation } from '@/shared/api/hooks/useCreateOrderMutation';
import { useOrder } from '@/shared/contexts/order';
import { formatPhoneNumber } from '@/shared/utils';

import type { AddressOrderSchemeType } from '../constants/AddressOrderSchema';
import type { UserOrderSchemeType } from '../constants/UserOrderScheme';

import { AddressOrderScheme } from '../constants/AddressOrderSchema';
import { UserOrderScheme } from '../constants/UserOrderScheme';

const routeApi = getRouteApi('/order');

export const useOrderPage = () => {
  const search: { options?: string } = routeApi.useSearch();
  const parsedOptions: Options[] = search.options ? JSON.parse(search.options) : null;

  const createOrderMutation = useCreateOrderMutation();
  const { orderState, orderFunctions } = useOrder();

  const [step, setStep] = useState(1);

  const nextStep = () => flushSync(() => setStep((prev) => prev + 1));

  const prevStep = () => flushSync(() => setStep((prev) => prev - 1));

  const userOrderForm = useForm<UserOrderSchemeType>({
    resolver: zodResolver(UserOrderScheme),
    mode: 'onChange'
  });

  const addressOrderForm = useForm<AddressOrderSchemeType>({
    resolver: zodResolver(AddressOrderScheme),
    mode: 'onChange'
  });

  useEffect(() => {
    if (step === 2 || step === 3) {
      const receiver = step === 2 ? orderState.receiver : orderState.sender;
      userOrderForm.reset({
        firstname: receiver?.firstname || '',
        lastname: receiver?.lastname || '',
        middlename: receiver?.middlename || '',
        phone: formatPhoneNumber(receiver?.phone || '')
      });
    }

    if (step === 4 || step === 5) {
      const address = step === 4 ? orderState.senderAddress : orderState.receiverAddress;
      addressOrderForm.reset({
        street: address?.street || '',
        house: address?.house || '',
        apartment: address?.apartment || '',
        comment: address?.comment || ''
      });
    }
  }, [step, orderState, userOrderForm, addressOrderForm]);

  const onSubmit = (data: AddressOrderSchemeType | UserOrderSchemeType) => {
    step === 2 && orderFunctions.setReceiver(data as UserOrderSchemeType);
    step === 3 && orderFunctions.setSender(data as UserOrderSchemeType);
    step === 4 && orderFunctions.setSenderAddress(data as AddressOrderSchemeType);
    step === 5 && orderFunctions.setReceiverAddress(data as AddressOrderSchemeType);

    nextStep();
  };

  const createOrder = async () => {
    if (
      !orderState.option ||
      !orderState.receiver ||
      !orderState.receiverAddress ||
      !orderState.sender ||
      !orderState.senderAddress ||
      !orderState.receiverPoint ||
      !orderState.senderPoint
    )
      return;

    await createOrderMutation.mutateAsync({
      params: {
        option: orderState.option,
        payer: orderState.payer,
        receiver: orderState.receiver,
        receiverAddress: orderState.receiverAddress,
        sender: orderState.sender,
        senderAddress: orderState.senderAddress,
        receiverPoint: orderState.receiverPoint,
        senderPoint: orderState.senderPoint
      }
    });
  };

  return {
    state: {
      options: parsedOptions,
      orderState,
      step
    },
    functions: {
      nextStep,
      prevStep,
      orderFunctions,
      createOrder
    },
    form: {
      state: {
        userOrderForm,
        addressOrderForm
      },
      functions: {
        onSubmitUserOrder: userOrderForm.handleSubmit(onSubmit),
        onSubmitAddressOrder: addressOrderForm.handleSubmit(onSubmit)
      }
    }
  };
};
