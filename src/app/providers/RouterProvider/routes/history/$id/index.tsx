import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/history/$id/')({
  beforeLoad: ({ context }) => {
    if (!context.isAuth) {
      throw redirect({
        to: '/auth'
      });
    }
  }
});
