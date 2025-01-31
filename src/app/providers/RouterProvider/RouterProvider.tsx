import * as TanstackRouter from '@tanstack/react-router';

import { useAuth } from '@/shared/contexts/auth';

import { routeTree } from './constants/routeTree.gen';

const router = TanstackRouter.createRouter({
  routeTree,
  context: {
    isAuth: false
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  const auth = useAuth();

  return (
    <TanstackRouter.RouterProvider context={{ isAuth: auth.authState.isAuth }} router={router} />
  );
};
