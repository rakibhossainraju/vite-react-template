# @light_yagami/create-vite-react

A modern, type-safe scaffolding tool for React and Tailwind CSS projects. This generator provides a pre-configured Vite setup with React 19, Tailwind CSS 4, and automated path aliases.

## Features

- ⚛️ **React 19 & Vite 7**: Built on the latest stable versions of React and Vite.
- 🎨 **Tailwind CSS 4**: Integrated with the new `@tailwindcss/vite` plugin for a seamless CSS-in-JS-like experience.
- ⚡ **React Compiler**: Pre-configured with the experimental React Compiler (`babel-plugin-react-compiler`) for automatic performance optimizations.
- 🗺️ **Import Path Aliases**: Type-safe path aliases are automatically synced between TypeScript and Vite.
  - `@/*` -> `src/*`
  - `@components/*` -> `src/components/*`
  - `@utils/*` -> `src/utils/*`
- 🛡️ **Strict TypeScript**: High-standard TypeScript configuration for maximum type safety.
- 🧹 **Modern Linting**: ESLint 9+ configuration using the latest flat config standards.

## Usage

You can create a new project using this template with a single command:

```bash
npx @light_yagami/create-vite-react my-awesome-app
```

Replace `my-awesome-app` with your desired project name.

### Getting Started

Once your project is created, navigate into the directory and install dependencies:

```bash
cd my-awesome-app
yarn install # or npm install
```

Start the development server:

```bash
yarn dev # or npm run dev
```

## Project Structure

```text
my-awesome-app/
├── public/          # Static assets
├── src/
│   ├── components/  # React components (aliased as @components/*)
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Entry point
│   └── style.css    # Tailwind CSS entry
├── index.html
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

## Path Aliases

This template simplifies imports by providing pre-defined aliases. Instead of:

```tsx
import Button from '../../components/Button';
```

You can use:

```tsx
import Button from '@components/Button';
```

## License

ISC
