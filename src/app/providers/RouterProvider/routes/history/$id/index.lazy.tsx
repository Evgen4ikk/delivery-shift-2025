import { createLazyFileRoute } from '@tanstack/react-router';

import { HistoryDetailPage } from '@/pages/HistoryDetailPage';

export const Route = createLazyFileRoute('/history/$id/')({
  component: HistoryDetailPage
});
