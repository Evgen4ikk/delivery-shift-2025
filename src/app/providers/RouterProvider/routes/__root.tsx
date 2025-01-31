import { createRootRoute, Outlet } from '@tanstack/react-router';

import { Layout } from '@/shared/components/Layout';

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  )
});
