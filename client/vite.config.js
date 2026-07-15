import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The client build emits to dist/. A second `--ssr` build emits the server
// entry to server-build/, which scripts/prerender.mjs consumes to write the
// static HTML for every route into dist/.
//
// In dev, /api requests proxy to the local Express server (see ../server) so
// the contact form works without CORS or a hardcoded base URL.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0, // never inline images/assets as base64
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
