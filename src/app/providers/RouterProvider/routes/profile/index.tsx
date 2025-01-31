import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/profile/')({
  beforeLoad: ({ context }) => {
    if (!context.isAuth) {
      throw redirect({
        to: '/auth'
      });
    }
  }
});
