import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/order/send/')({
  beforeLoad: ({ context }) => {
    if (!context.isAuth) {
      throw redirect({
        to: '/auth'
      });
    }
  }
});
