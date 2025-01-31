import { api } from '@/shared/api/instance';

export interface CreateOtpParams {
  phone: string;
}
export type CreateOtpConfig = RequestConfig<CreateOtpParams>;

interface CreateOtpResponse extends BaseResponse {
  retryDelay: number;
}

export const createOtp = async ({ params, config }: CreateOtpConfig) =>
  api.post<CreateOtpResponse>('/auth/otp', params, config);
