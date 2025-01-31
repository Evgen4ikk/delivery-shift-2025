import { MantineProvider } from '@providers/MantineProvider';
import { TanstackProvider } from '@providers/TanstackProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

import { AuthProvider } from './shared/contexts/auth';
import { OrderProvider } from './shared/contexts/order';

import '@mantine/core/styles.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <TanstackProvider>
        <AuthProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </AuthProvider>
      </TanstackProvider>
    </MantineProvider>
  </StrictMode>
);
