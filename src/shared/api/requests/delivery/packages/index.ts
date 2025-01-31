import type { Package } from '@/shared/types/package';

import { api } from '@/shared/api/instance';

type GetPackagesConfig = RequestConfig;

interface GetPackagesResponse extends BaseResponse {
  packages: Package[];
}

export const getPackages = async (requestConfig?: GetPackagesConfig) =>
  api.get<GetPackagesResponse>('/delivery/package/types', requestConfig?.config);
