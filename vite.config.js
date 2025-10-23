import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/',
  server: {
    port: 5173,
    open: true,
    strictPort: true
  },
  preview: {
    port: 4173,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      input: 'index.html'
    }
  }
});
