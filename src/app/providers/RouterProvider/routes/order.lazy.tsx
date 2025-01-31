import { createLazyFileRoute } from '@tanstack/react-router';

import { OrderPage } from '@/pages/OrderPage';
function Order() {
  return <OrderPage />;
}

export const Route = createLazyFileRoute('/order')({
  component: Order
});
