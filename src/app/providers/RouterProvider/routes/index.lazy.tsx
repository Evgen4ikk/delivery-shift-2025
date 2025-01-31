import { createLazyFileRoute } from '@tanstack/react-router';

import { IndexPage } from '@/pages/IndexPage';

export const Route = createLazyFileRoute('/')({
  component: () => <IndexPage />
});
