# Pixel Art Creator — web3 Farcaster Mini‑App

A lightweight mini‑app built with **Vite** and the **@farcaster/create-mini-app** framework, enabling users to craft pixel art on the web and share via the Farcaster ecosystem.

##  Features

- **Fast and lightweight** — Built using Vite for speedy development and optimized production builds.
- **Blockchain-native** — Designed as a Farcaster mini‑app using `@farcaster/create-mini-app`, making it easily embeddable and sharable.
- **Configurable splash screen** — Customize your mini‑app’s appearance via the `public/.well‑known/farcaster.json` and optional `splashBackgroundImageUrl`.
- **Shareable frame embed** — Add a `fc:frame` meta tag in `index.html` to embed a launchable app frame within Farcaster feeds.

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/bytemyke/Pixel-Art-Creator---web3-Farcast-mini-app.git
   cd Pixel-Art-Creator---web3-Farcast-mini-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser to the local URL (usually `http://localhost:3000`) to see the mini‑app in action. * NOTE * blockchain functionality not abailable in localhost.

### Customization

- **farcaster.json**  
  Located at `public/.well‑known/farcaster.json`, this file defines your mini‑app’s metadata. To customize the splash screen, update the `splashBackgroundImageUrl` field.

- **Frame Embed**  
  To make the mini‑app sharable within Farcaster feeds, add this snippet into your `index.html`:
  ```html
  <meta name="fc:frame" content='{"version":"next","imageUrl":"YOUR_IMAGE_URL","button":{"title":"Open","action":{"type":"launch_frame","name":"App Name","url":"YOUR_APP_URL"}}}' />
  ```
  Replace `YOUR_IMAGE_URL`, `App Name`, and `YOUR_APP_URL` with your desired values.

##  Project Structure

```
/
├── public/
│   ├── .well-known/farcaster.json
│   └── ... assets ...
├── src/
│   └── ... source code (TS, components, styles)
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

- **public/** — Contains static files including the Farcaster metadata.
- **src/** — Your app’s TypeScript, UI components, and styling.
- **Vite config & tsconfig** — Basic setup for TypeScript and build tooling.

##  Deployment

1. Build the production version:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the generated `dist/` directory to your preferred hosting platform (e.g., Netlify, Vercel, GitHub Pages).

3. Verify that `farcaster.json` and your frame embed are correctly configured, so the mini‑app displays properly on Farcaster.

##  Contributing

Contributions, bug reports, and feature suggestions are always welcome! Please:

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -am 'Add new feature'`)  
4. Push to your branch (`git push origin feature/my-feature`)  
5. Open a pull request for review

##  License

This project is licensed under the **MIT License**.
