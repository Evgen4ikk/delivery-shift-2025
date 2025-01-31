import { useMutation } from '@tanstack/react-query';

import type { SignInConfig } from '../requests/user/singin';

import { signIn } from '../requests/user/singin';

export const useSignInMutation = (settings?: MutationSettings<SignInConfig, typeof signIn>) =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ params, config }: SignInConfig) =>
      signIn({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
