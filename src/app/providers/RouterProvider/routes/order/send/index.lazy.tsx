import { createLazyFileRoute } from '@tanstack/react-router';

import { OrderSendPage } from '@/pages/OrderSendPage';

export const Route = createLazyFileRoute('/order/send/')({
  component: OrderSendPage
});
