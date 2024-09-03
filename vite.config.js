import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Sett 'src' som root
  build: {
    outDir: '../dist', // Sett output til å være i dist-mappen på rot-nivå
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
  server: {
    historyApiFallback: true, // Sørg for at SPA-routing fungerer
    open: true, // Åpner prosjektet i nettleseren automatisk
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
