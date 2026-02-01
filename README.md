# express4-eslint-tscheck

Express.js server with JSDoc type checking & ESLint config.

## Quick Start

```bash
npm install
node server.js
```

## Structure

- **server.js** - Main app entry. Express setup w/ middleware
- **routes/api.tc.js** - API endpoints (`/api/users`)
- **services/apiService.tc.js** - Business logic. Simulates DB queries
- **types/user.types.js** - JSDoc type definitions
- **jsconfig.json** - TypeScript-like checking for JS via `checkJs: true`

## Features

- Express 4.22.1 server
- ESLint 8.57 for code quality
- Full JS type checking w/ strict mode
- JSDoc type definitions via `@typedef`
- `@ts-check` comments enable TS validation per file

## Endpoints

`GET /api/users` - Returns user list

## Config

**jsconfig.json** enables strict type checking on plain JS:
- `checkJs: true` - Validates all .js
- `noImplicitAny: true` - Require types everywhere
- `strict: true` - Full strictness
