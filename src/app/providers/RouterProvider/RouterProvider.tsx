import * as TanstackRouter from '@tanstack/react-router'

import { routeTree } from './constants/routeTree.gen'

const router = TanstackRouter.createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const RouterProvider = () => (
  <TanstackRouter.RouterProvider router={router} />
)
