import { getPackages } from '@api/requests/delivery/packages';
import { useQuery } from '@tanstack/react-query';

export const useGetPackagesQuery = (settings?: QuerySettings<typeof getPackages>) =>
  useQuery({
    queryKey: ['getPackages', settings?.config],
    queryFn: () => getPackages({ config: settings?.config }),
    ...settings?.options
  });
