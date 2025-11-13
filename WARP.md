# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Frontend single-page application built with Create React App (CRA)
- React 19 with React Router (BrowserRouter) for routing
- Testing via Jest + React Testing Library (configured in src/setupTests.js)
- No backend code in this repo; builds to a static bundle in build/

Common commands
- Install dependencies
  ```bash
  npm install
  ```
- Start the development server (port 3000)
  ```bash
  npm start
  ```
- Run tests (watch mode)
  ```bash
  npm test
  ```
- Run a single test file
  ```bash
  npm test -- src/App.test.js
  ```
- Run tests matching a name/pattern
  ```bash
  npm test -- -t "pattern"
  ```
- Run tests once (non-watch/CI mode)
  ```bash
  CI=true npm test -- --watchAll=false
  ```
- Build for production (outputs to build/)
  ```bash
  npm run build
  ```
- Eject CRA tooling (irreversible; only if you need full control)
  ```bash
  npm run eject
  ```
- Linting
  - CRA surfaces ESLint issues during dev/build. There is no explicit lint script.
  - If you need an ad-hoc lint run, you can invoke ESLint directly (resolved from react-scripts):
    ```bash
    npx eslint "src/**/*.{js,jsx}"
    ```

High-level architecture and code structure
- Entry point: src/index.js
  - Creates the React root and wraps the app with BrowserRouter.
- Application shell and routing: src/App.js
  - Declares top-level layout: Header, routed main content, Footer.
  - Routes:
    - "/" → HomePage (composes HeroSection, ScrollingLogos, DetailedServices, BookCatalogueSection)
    - "/hsp-books" → DeliveryPolicySection
    - "/hsp-journals" → HspJournalsPage
  - UI state (local with useState) controls two modals:
    - AboutModal (opened via Header callback)
    - KeepInTouchForm (opened via a floating button)
- Components live flat under src/
  - Presentational sections: HeroSection, ScrollingLogos, DetailedServices, BookCatalogueSection, DeliveryPolicySection, HspJournalsPage, etc.
  - Layout: Header, Footer
  - Modals/forms: AboutModal, KeepInTouchForm
  - Styles: App.css, index.css and some page-specific CSS (e.g., HspJournalsPage.css)
- Testing
  - Test setup: src/setupTests.js imports @testing-library/jest-dom matchers
  - Example test: src/App.test.js

Notes from README
- This project was bootstrapped with Create React App; the standard CRA scripts apply (start, test, build, eject).

CI/CD and tools
- No CLAUDE, Cursor, or Copilot rules found in this repo.
- No custom lint/test/build tooling beyond CRA.
