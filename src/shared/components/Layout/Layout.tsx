import type { ReactNode } from 'react';

import { AppShell } from '@mantine/core';

import { Header } from './components/Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <AppShell header={{ height: 80 }}>
    <AppShell.Header px={240}>
      <Header />
    </AppShell.Header>
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);
