import { MantineProvider } from '@providers/MantineProvider'
import { TanstackProvider } from '@providers/TanstackProvider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app/App'

import '@mantine/core/styles.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <TanstackProvider>
        <App />
      </TanstackProvider>
    </MantineProvider>
  </StrictMode>
)
