/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as ProfileIndexImport } from './../routes/profile/index'
import { Route as OrderIndexImport } from './../routes/order/index'
import { Route as HistoryIndexImport } from './../routes/history/index'
import { Route as AuthIndexImport } from './../routes/auth/index'
import { Route as OrderSendIndexImport } from './../routes/order/send/index'
import { Route as HistoryIdIndexImport } from './../routes/history/$id/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/index.lazy').then((d) => d.Route))

const ProfileIndexRoute = ProfileIndexImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/profile/index.lazy').then((d) => d.Route),
)

const OrderIndexRoute = OrderIndexImport.update({
  id: '/order/',
  path: '/order/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/order/index.lazy').then((d) => d.Route),
)

const HistoryIndexRoute = HistoryIndexImport.update({
  id: '/history/',
  path: '/history/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/history/index.lazy').then((d) => d.Route),
)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/auth/index.lazy').then((d) => d.Route))

const OrderSendIndexRoute = OrderSendIndexImport.update({
  id: '/order/send/',
  path: '/order/send/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/order/send/index.lazy').then((d) => d.Route),
)

const HistoryIdIndexRoute = HistoryIdIndexImport.update({
  id: '/history/$id/',
  path: '/history/$id/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/history/$id/index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/history/': {
      id: '/history/'
      path: '/history'
      fullPath: '/history'
      preLoaderRoute: typeof HistoryIndexImport
      parentRoute: typeof rootRoute
    }
    '/order/': {
      id: '/order/'
      path: '/order'
      fullPath: '/order'
      preLoaderRoute: typeof OrderIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/history/$id/': {
      id: '/history/$id/'
      path: '/history/$id'
      fullPath: '/history/$id'
      preLoaderRoute: typeof HistoryIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/order/send/': {
      id: '/order/send/'
      path: '/order/send'
      fullPath: '/order/send'
      preLoaderRoute: typeof OrderSendIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/auth': typeof AuthIndexRoute
  '/history': typeof HistoryIndexRoute
  '/order': typeof OrderIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/history/$id': typeof HistoryIdIndexRoute
  '/order/send': typeof OrderSendIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/auth': typeof AuthIndexRoute
  '/history': typeof HistoryIndexRoute
  '/order': typeof OrderIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/history/$id': typeof HistoryIdIndexRoute
  '/order/send': typeof OrderSendIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/auth/': typeof AuthIndexRoute
  '/history/': typeof HistoryIndexRoute
  '/order/': typeof OrderIndexRoute
  '/profile/': typeof ProfileIndexRoute
  '/history/$id/': typeof HistoryIdIndexRoute
  '/order/send/': typeof OrderSendIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/history'
    | '/order'
    | '/profile'
    | '/history/$id'
    | '/order/send'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/history'
    | '/order'
    | '/profile'
    | '/history/$id'
    | '/order/send'
  id:
    | '__root__'
    | '/'
    | '/auth/'
    | '/history/'
    | '/order/'
    | '/profile/'
    | '/history/$id/'
    | '/order/send/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AuthIndexRoute: typeof AuthIndexRoute
  HistoryIndexRoute: typeof HistoryIndexRoute
  OrderIndexRoute: typeof OrderIndexRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
  HistoryIdIndexRoute: typeof HistoryIdIndexRoute
  OrderSendIndexRoute: typeof OrderSendIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AuthIndexRoute: AuthIndexRoute,
  HistoryIndexRoute: HistoryIndexRoute,
  OrderIndexRoute: OrderIndexRoute,
  ProfileIndexRoute: ProfileIndexRoute,
  HistoryIdIndexRoute: HistoryIdIndexRoute,
  OrderSendIndexRoute: OrderSendIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth/",
        "/history/",
        "/order/",
        "/profile/",
        "/history/$id/",
        "/order/send/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/history/": {
      "filePath": "history/index.tsx"
    },
    "/order/": {
      "filePath": "order/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/history/$id/": {
      "filePath": "history/$id/index.tsx"
    },
    "/order/send/": {
      "filePath": "order/send/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
