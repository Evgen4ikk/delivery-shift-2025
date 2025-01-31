import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateOtpMutation } from '@/shared/api/hooks/useCreateOtpMutation';
import { useSignInMutation } from '@/shared/api/hooks/useSignInMutation';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/shared/consts/localstorage';
import { useAuth } from '@/shared/contexts/auth';

import type { OtpCodeSchema } from '../constants/otpCodeSchema';
import type { PhoneSchema } from '../constants/phoneSchema';

import { otpCodeSchema } from '../constants/otpCodeSchema';
import { phoneSchema } from '../constants/phoneSchema';

export const useAuthPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [stage, setStage] = useState<'otp' | 'phone'>('phone');

  const createOtpMutation = useCreateOtpMutation();
  const signInMutation = useSignInMutation();

  const form = useForm<OtpCodeSchema | PhoneSchema>({
    resolver: zodResolver(stage === 'phone' ? phoneSchema : otpCodeSchema)
  });

  const currentPhone = form.watch('phone');

  const handleCreateOtp = async (data?: PhoneSchema) => {
    const phone = data?.phone || currentPhone;
    await createOtpMutation.mutateAsync({ params: { phone } });

    setStage('otp');
  };

  const handleSignIn = async (data: OtpCodeSchema) => {
    const signInResponse = await signInMutation.mutateAsync({
      params: {
        phone: currentPhone,
        code: data.otpCode
      }
    });

    if (!signInResponse.data.success && signInResponse.data.reason) {
      return form.setError('otpCode', { message: signInResponse.data.reason });
    }

    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, signInResponse.data.token);
    auth.authFunctions.setIsAuth(true);
    auth.authFunctions.setUser(signInResponse.data.user);

    navigate({ to: '/' });
  };

  const onSubmit = form.handleSubmit((data: OtpCodeSchema | PhoneSchema) => {
    if (stage === 'phone') handleCreateOtp(data as PhoneSchema);

    if (stage === 'otp') handleSignIn(data as OtpCodeSchema);
  });

  return {
    form,
    state: {
      isSubmiting: createOtpMutation.isPending,
      auth: auth.authState,
      stage
    },
    functions: {
      auth: auth.authFunctions,
      onSubmit,
      handleCreateOtp
    }
  };
};
