import { createOtp, type CreateOtpConfig } from '@api/requests/auth/otp';
import { useMutation } from '@tanstack/react-query';

export const useCreateOtpMutation = (
  settings?: MutationSettings<CreateOtpConfig, typeof createOtp>
) =>
  useMutation({
    mutationKey: ['createOtp'],
    mutationFn: ({ config, params }: CreateOtpConfig) =>
      createOtp({ config: { ...settings?.config, ...config }, params }),
    ...settings?.options
  });
