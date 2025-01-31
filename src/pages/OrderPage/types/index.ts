import type { useOrderPage } from '../hooks/useOrderPage';

export interface useOrderPageProps {
  functions: ReturnType<typeof useOrderPage>['functions'];
  state: ReturnType<typeof useOrderPage>['state'];
}
