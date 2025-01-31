import type { User } from '@/shared/types/user';

import { api } from '../../../instance';

interface SignInParams {
  code: number;
  phone: string;
}

export type SignInConfig = RequestConfig<SignInParams>;

interface SignInResponse extends BaseResponse {
  token: string;
  user: User;
}

export const signIn = async ({ params, config }: SignInConfig) =>
  api.post<SignInResponse>('/users/signin', params, config);
