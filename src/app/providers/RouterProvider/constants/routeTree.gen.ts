/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../routes/__root'

// Create Virtual Routes

const DeliveryLazyImport = createFileRoute('/delivery')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const DeliveryLazyRoute = DeliveryLazyImport.update({
  id: '/delivery',
  path: '/delivery',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/delivery.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/index.lazy').then((d) => d.Route))

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
    '/delivery': {
      id: '/delivery'
      path: '/delivery'
      fullPath: '/delivery'
      preLoaderRoute: typeof DeliveryLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/delivery': typeof DeliveryLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/delivery': typeof DeliveryLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/delivery': typeof DeliveryLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/delivery'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/delivery'
  id: '__root__' | '/' | '/delivery'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  DeliveryLazyRoute: typeof DeliveryLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  DeliveryLazyRoute: DeliveryLazyRoute,
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
        "/delivery"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/delivery": {
      "filePath": "delivery.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
