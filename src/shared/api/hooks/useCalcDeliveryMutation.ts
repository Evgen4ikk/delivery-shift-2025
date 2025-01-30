import type { CalcDeliveryConfig } from '@api/requests/delivery/calc';

import { calcDelivery } from '@api/requests/delivery/calc';
import { useMutation } from '@tanstack/react-query';

export const useCalcDeliveryMutation = (
  settings?: MutationSettings<CalcDeliveryConfig, typeof calcDelivery>
) =>
  useMutation({
    mutationKey: ['calcDelivery'],
    mutationFn: ({ params, config }: CalcDeliveryConfig) =>
      calcDelivery({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
