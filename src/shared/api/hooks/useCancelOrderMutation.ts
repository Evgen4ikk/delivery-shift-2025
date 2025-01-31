import { useMutation } from '@tanstack/react-query';

import type { CancelOrderConfig } from '../requests/delivery/orders/cancel';

import { cancelOrder } from '../requests/delivery/orders/cancel';

export const useCancelOrderMutation = (
  settings?: MutationSettings<CancelOrderConfig, typeof cancelOrder>
) =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: ({ params, config }: CancelOrderConfig) =>
      cancelOrder({ params, config: settings?.config, ...config }),
    ...settings?.options
  });
