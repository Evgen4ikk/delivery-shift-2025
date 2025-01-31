import { MantineProvider } from '@providers/MantineProvider';
import { TanstackProvider } from '@providers/TanstackProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

import { OrderProvider } from './shared/contexts/order';

import '@mantine/core/styles.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <TanstackProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </TanstackProvider>
    </MantineProvider>
  </StrictMode>
);
