import { useMutation } from '@tanstack/react-query';

import type { UpdateProfileConfig } from '../requests/user/profile';

import { updateProfile } from '../requests/user/profile';

export const useUpdateProfileMutation = (
  settings?: MutationSettings<UpdateProfileConfig, typeof updateProfile>
) =>
  useMutation({
    mutationKey: ['updateProfile'],
    mutationFn: ({ params, config }) =>
      updateProfile({
        params,
        config: { ...settings?.config, ...config }
      }),
    ...settings?.options
  });
