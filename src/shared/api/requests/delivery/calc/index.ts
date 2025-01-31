import { api } from '@api/instance';

import type { Options } from '@/shared/types/options';
import type { Package } from '@/shared/types/package';
import type { Point as _Point } from '@/shared/types/point';

type Point = Omit<_Point, 'id' | 'name'>;

export interface CalcDeliveryParams {
  package: Omit<Package, 'id' | 'name'>;
  receiverPoint: Point;
  senderPoint: Point;
}

export type CalcDeliveryConfig = RequestConfig<CalcDeliveryParams>;

interface CalcDeliveryResponse extends BaseResponse {
  options: Options[];
}

export const calcDelivery = async ({ params, config }: CalcDeliveryConfig) =>
  api.post<CalcDeliveryResponse>('/delivery/calc', params, config);
