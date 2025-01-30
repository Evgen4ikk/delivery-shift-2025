import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/delivery')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/delivery"!</div>;
}
