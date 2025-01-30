import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@providers': path.resolve(__dirname, './src/app/providers'),
      '@api': path.resolve(__dirname, './src/shared/api')
    }
  },
  plugins: [TanStackRouterVite(), react()]
});
