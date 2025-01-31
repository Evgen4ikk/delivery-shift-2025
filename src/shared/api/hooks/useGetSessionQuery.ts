import { useQuery } from '@tanstack/react-query';

import { getSession } from '../requests/user/session';

export const useGetSessionQuery = (settings?: QuerySettings<typeof getSession>) =>
  useQuery({
    queryKey: ['getSession', settings?.config],
    queryFn: () => getSession({ config: settings?.config }),
    ...settings?.options
  });
