import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The client build emits to dist/. A second `--ssr` build emits the server
// entry to server-build/, which scripts/prerender.mjs consumes to write the
// static HTML for every route into dist/.
//
// In dev, /api requests proxy to the local Express server (see ../server) so
// the contact form works without CORS or a hardcoded base URL.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0, // never inline images/assets as base64
    rollupOptions: {
      output: {
        // Client-only: route-level code splitting (React.lazy) isn't used —
        // entry-server.jsx calls the synchronous renderToString, which can't
        // await a lazy chunk during prerender and would ship empty <main>
        // markup for every route but the one rendered eagerly. Splitting
        // vendor from app code is the safe subset of the win — smaller,
        // cacheable initial payload with no risk to prerendered output.
        // Skipped for the SSR build: react/react-dom/react-router-dom are
        // external there, and can't be named in manualChunks.
        ...(isSsrBuild
          ? {}
          : { manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] } }),
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
}));
