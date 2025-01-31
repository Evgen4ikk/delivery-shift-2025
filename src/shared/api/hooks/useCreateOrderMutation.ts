import type { CreateOrderConfig } from '@api/requests/delivery/order';

import { createOrder } from '@api/requests/delivery/order';
import { useMutation } from '@tanstack/react-query';

export const useCreateOrderMutation = (
  settings?: MutationSettings<CreateOrderConfig, typeof createOrder>
) =>
  useMutation({
    mutationKey: ['createOrder'],
    mutationFn: ({ params, config }: CreateOrderConfig) =>
      createOrder({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
