# SightCall Q&A App

A web application for interacting with a RAG-based chatbot that answers questions about SightCall from their website.

[![Continuous Integration](https://github.com/cmnemoi/sightcall-qa-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/cmnemoi/sightcall-qa-app/actions/workflows/ci.yaml)
[![Continuous Delivery](https://github.com/cmnemoi/sightcall-qa-app/actions/workflows/release_please.yaml/badge.svg)](https://github.com/cmnemoi/sightcall-qa-app/actions/workflows/cd.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/19d09da9-f02f-453f-ba24-9b07f2f4eaae/deploy-status)](https://sightcall-qa.netlify.app/)
[![codecov](https://codecov.io/gh/cmnemoi/sightcall-qa-app/graph/badge.svg?token=P8HRA82P4B)](https://codecov.io/gh/cmnemoi/sightcall-qa-app)

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
git clone git@github.com:cmnemoi/sightcall-qa-app.git
cd sightcall-qa-app
cp .env.example .env
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
