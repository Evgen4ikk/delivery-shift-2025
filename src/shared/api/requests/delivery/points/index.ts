import type { Point } from '@/shared/types/point';

import { api } from '@/shared/api/instance';

type GetPointsConfig = RequestConfig;

interface GetPointsResponse extends BaseResponse {
  points: Point[];
}

export const getPoints = async (requestConfig?: GetPointsConfig) =>
  api.get<GetPointsResponse>('/delivery/points', requestConfig?.config);
