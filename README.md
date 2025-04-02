!TODO:

- Footer
- About
- 1 Blog content
- og:image maken

## Projects
Available metadata example:

- title: string
- category: string
- link: string (link to third-party site)
- order: integer (numerical order to select)
- main: boolean (true = show on index page, false = only on /projects overview)
- size: string (empty = normal, vertical = high, horizontal = wide, large = big)
- contrast: boolean (true = support for better readability if the project image has the same colour as the project description)
- image: string (path to image like "/img/image.webp")

## Blogs
Available metadata example:

- title: string
- category: string
- description: string
- order: integer (numerical order to select)
- main: boolean (true = show on index page, false = only on /blog overview)
- highlight: boolean (true = make blog card bigger to highlight)
- visible: boolean (false = invisible)
- date: string
- image: string (path to image like "/img/image.webp")
- lang: string (language like NL/EN)

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
