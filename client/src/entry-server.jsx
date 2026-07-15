import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

// Called once per route by scripts/prerender.mjs. MemoryRouter is used so the
// same <App/> route tree renders deterministically for any given URL on the
// server, with no dependency on a running server or browser history.
export function render(url) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  );
  return { html };
}
