import type { User } from '@/shared/types/user';

import { api } from '../../../instance';

export interface UpdateProfileParams {
  phone: string;
  profile: Omit<User, 'id' | 'phone'>;
}

export type UpdateProfileConfig = RequestConfig<UpdateProfileParams>;

interface UpdateProfileResponse extends BaseResponse {
  user: User;
}

export const updateProfile = async ({ params, config }: UpdateProfileConfig) =>
  api.patch<UpdateProfileResponse>('/users/profile', params, config);
