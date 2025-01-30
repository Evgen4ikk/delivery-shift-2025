import { createLazyFileRoute } from '@tanstack/react-router';

import { IndexPage } from '@/pages/IndexPage';

function Index() {
  return <IndexPage />;
}

export const Route = createLazyFileRoute('/')({
  component: () => <Index />
});
