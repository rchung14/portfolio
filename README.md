# Ryan Chung — Portfolio

Freelance developer portfolio. A statically prerendered marketing site (`client/`)
plus a small Express contact API (`server/`), managed as npm workspaces.

```
client/   Vite + React 19 + React Router 7, prerendered to static HTML per route
server/   Express contact endpoint that emails submissions via Resend
```

## Develop

```bash
npm install          # installs both workspaces
npm run dev          # runs client (http://localhost:5173) + server (http://localhost:3001)
```

The client dev server proxies `/api/*` to the local Express server, so the
contact form works with no extra setup. Without a `RESEND_API_KEY`, the server
logs emails to the console instead of sending them.

Run one side alone with `npm run dev:client` or `npm run dev:server`.

## Build

```bash
npm run build        # builds the client to client/dist (prerenders every route)
npm run preview      # serves the built client
```

## Server configuration

Copy the template and fill it in:

```bash
cp server/.env.example server/.env
```

| Variable         | Purpose                                                        |
| ---------------- | ------------------------------------------------------------- |
| `PORT`           | Server port (default 3001)                                    |
| `CLIENT_ORIGIN`  | Comma-separated allowed CORS origins (the deployed site)      |
| `CONTACT_TO`     | Where submissions are delivered                               |
| `CONTACT_FROM`   | From header; must be on a Resend-verified domain to send      |
| `RESEND_API_KEY` | Resend key. If unset, emails are logged, not sent             |

## Deploy

- **Client:** static host (Vercel). `client/vercel.json` sets security headers,
  `cleanUrls`, and the SPA fallback. Set `VITE_API_BASE` to the deployed server
  origin so the contact form posts across origins.
- **Server:** any Node host (Render, Railway, Fly, a VPS). Set the env vars
  above, including `CLIENT_ORIGIN` = the client's URL for CORS.
