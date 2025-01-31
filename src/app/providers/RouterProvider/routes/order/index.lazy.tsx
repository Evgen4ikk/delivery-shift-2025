import { Loader } from '@mantine/core';
import { createLazyFileRoute } from '@tanstack/react-router';

import { OrderPage } from '@/pages/OrderPage';

export const Route = createLazyFileRoute('/order/')({
  component: OrderPage,
  pendingComponent: Loader
});
