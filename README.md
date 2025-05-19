# SightCall Q&A App

A web application for interacting with a RAG-based chatbot that answers questions about SightCall from their website.

Stack:

- [React 19](https://react.dev/) for the frontend framework
- [Vite](https://vitejs.dev/) for development/build tooling
- [Vitest](https://vitest.dev/) for testing
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Yarn](https://yarnpkg.com/) for dependency management

# Contributing

## Prerequisites

- [Node.js LTS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Launching SightCall Q&A API on your machine](https://github.com/cmnemoi/sightcall_qa_api)

## Installation

```bash
# Clone the repository
git clone git@github.com:cmnemoi/sightcall-qa-app.git
cd sightcall-qa-app

# Install dependencies
yarn install
```

## Usage

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` by default.

## Development

- Lint code with `yarn lint`
- Run tests with `yarn test`
- Format code with `yarn format`
- Build for production with `yarn build`

# License

The source code of this repository is licensed under the [AGPL-3.0-only License](LICENSE).
