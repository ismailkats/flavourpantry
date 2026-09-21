# Host the site free on GitHub Pages with www.flavourpantry.co.za

The site is entirely static — four pages (Home, Sweet, Savoury, About Us), no logins, no database, no server code. That makes it a clean fit for GitHub Pages.

## What changes

1. **Turn on pre-building of pages.** Every page gets written out as a ready-made HTML file at build time, so GitHub Pages can serve it directly. Pages covered: Home, Sweet, Savoury, About Us.
2. **Keep the web address at the root.** Because you're using your own domain (`www.flavourpantry.co.za`), no sub-folder prefix is needed — the site stays at `/`.
3. **Add the domain file.** A `CNAME` file containing `www.flavourpantry.co.za` so GitHub Pages serves the site on your domain.
4. **Add a `.nojekyll` file** so GitHub doesn't strip files that start with an underscore.
5. **Add an automatic publish workflow.** Every push to the main branch rebuilds the site and publishes it to GitHub Pages — no manual steps after that.
6. **Nothing else changes** — design, images, wording, navigation, prices and styling stay exactly as they are, and the current Lovable site keeps working unchanged.

## Technical detail

- `vite.config.ts`: add `pages: [{ path: "/" }, { path: "/about" }, { path: "/sweet" }, { path: "/savoury" }]` and `prerender: { enabled: true, autoStaticPathsDiscovery: false }` alongside the existing `server: { entry: "server" }`. `@lovable.dev/vite-tanstack-config` is already 2.23.1, so prerendering is supported.
- New files: `public/CNAME`, `public/.nojekyll`, `.github/workflows/deploy.yml` (Node 20, `npm ci`, `npm run build`, upload the prerendered output, deploy with `actions/deploy-pages`).
- No source files under `src/` are touched, so the Lovable-hosted site is unaffected.
- A verification build is run after the change to confirm one HTML file per page and that the build exits cleanly.

## What you'll do afterwards

- In GitHub: Settings → Pages → Source = GitHub Actions, then add the custom domain `www.flavourpantry.co.za`.
- At Truehost DNS: point `www` to GitHub Pages with a CNAME record to `<your-github-username>.github.io`.

## One thing I cannot do

I can't push to GitHub directly. Your project's GitHub sync pushes these changes to the connected repository automatically once they're made; if the repo isn't connected yet, connect it from the chat's plus menu and the code syncs then.
