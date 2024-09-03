import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.', // Angir rotmappen der din hoved index.html ligger
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Hovedfilen i rotmappen
        listings: resolve(__dirname, 'src/listings/index.html'), // Listings side
      },
      output: {
        dir: 'dist', // Output directory for build files
        entryFileNames: '[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    outDir: 'dist', // Output directory for build files
    assetsDir: 'assets', // Directory for static assets within 'dist'
  },
  server: {
    historyApiFallback: true, // Sikrer SPA-routing fallback til index.html
    open: '/index.html', // Åpner hovedsiden automatisk når serveren starter
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias for src-mappen
    },
  },
});
