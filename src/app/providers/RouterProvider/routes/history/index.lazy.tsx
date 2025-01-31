import { createLazyFileRoute } from '@tanstack/react-router'

import { HistoryPage } from '@/pages/HistoryPage'

export const Route = createLazyFileRoute('/history/')({
  component: HistoryPage,
})
