import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        listings: resolve(__dirname, 'src/listings/index.html'),
        profile: resolve(__dirname, 'src/profile/index.html'),
      },
    },
  },
  server: {
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
