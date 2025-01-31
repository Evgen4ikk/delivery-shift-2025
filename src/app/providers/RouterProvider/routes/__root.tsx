import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import { Layout } from '@/shared/components/Layout';

interface RouterContext {
  isAuth: boolean;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
});
