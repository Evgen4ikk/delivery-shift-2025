import type { useOrderPage } from '../hooks/useOrderPage';

export interface useOrderPageProps {
  form: ReturnType<typeof useOrderPage>['form'];
  functions: ReturnType<typeof useOrderPage>['functions'];
  state: ReturnType<typeof useOrderPage>['state'];
}
