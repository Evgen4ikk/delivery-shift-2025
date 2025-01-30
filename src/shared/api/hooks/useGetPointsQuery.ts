import { useQuery } from '@tanstack/react-query';

import { getPoints } from '../requests/delivery/points';

export const useGetPointsQuery = (settings?: QuerySettings<typeof getPoints>) =>
  useQuery({
    queryKey: ['getPoints', settings?.config],
    queryFn: () => getPoints({ config: settings?.config }),
    ...settings?.options
  });
