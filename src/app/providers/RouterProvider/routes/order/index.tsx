import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/order/')({
  beforeLoad: ({ context }) => {
    if (!context.isAuth) {
      throw redirect({
        to: '/auth'
      });
    }
  }
});
