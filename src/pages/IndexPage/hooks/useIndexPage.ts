import { useGetPackagesQuery } from '@api/hooks/useGetPackagesQuery';
import { useGetPointsQuery } from '@api/hooks/useGetPointsQuery';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCombobox } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCalcDeliveryMutation } from '@/shared/api/hooks/useCalcDeliveryMutation';

import type { CalcDeliverySchema } from '../consts/calcDeliverySchema';

import { calcDeliverySchema } from '../consts/calcDeliverySchema';

export const useIndexPage = () => {
  const navigate = useNavigate();
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
    onDropdownClose: () => combobox.resetSelectedOption()
  });
  const [mode, setMode] = useState('approximate');

  const getPointsQuery = useGetPointsQuery();
  const getPackagesQuery = useGetPackagesQuery();
  const calcDelivery = useCalcDeliveryMutation();

  const points = getPointsQuery.data ? getPointsQuery.data.data.points : [];
  const packages = getPackagesQuery.data ? getPackagesQuery.data.data.packages : [];

  const form = useForm<CalcDeliverySchema>({
    resolver: zodResolver(calcDeliverySchema)
  });

  useEffect(() => {
    if (points.length > 0 && packages.length > 0) {
      form.reset({
        receiverPoint: points[0].name,
        senderPoint: points[0].name,
        package: {
          name: packages[0].name,
          weight: packages[0].weight.toString(),
          length: packages[0].length.toString(),
          width: packages[0].width.toString(),
          height: packages[0].height.toString()
        }
      });
    }
  }, [points, packages]);

  const onSubmit = form.handleSubmit(async (data: CalcDeliverySchema) => {
    const senderPoint = points.find((point) => point.name === data.senderPoint);
    const receiverPoint = points.find((point) => point.name === data.receiverPoint);

    if (!senderPoint || !receiverPoint) {
      return;
    }

    const params = {
      receiverPoint: senderPoint,
      senderPoint: receiverPoint,
      package: data.package
    };

    await calcDelivery.mutateAsync(
      {
        params
      },
      {
        onSuccess: () => {
          navigate({ to: '/delivery' });
        }
      }
    );
  });

  return {
    form,
    combobox,
    state: {
      mode,
      points,
      packages,
      loading: {
        getSelectItems: getPointsQuery.isPending || getPackagesQuery.isPending,
        submitForm: form.formState.isSubmitting
      }
    },
    functions: {
      setMode,
      onSubmit
    }
  };
};
