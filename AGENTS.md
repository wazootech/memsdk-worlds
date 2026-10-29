# Agent guidelines

## What this repo is

This repository contains the MemSDK Worlds integration package.

## How to work here

- Keep Worlds-specific adapter behavior separate from core MemSDK behavior.
- Use `package.json` scripts for build, test, typecheck, and formatting.
- Run `npm run typecheck` and `npm test` for code changes when practical.
- Document graph, search, or persistence assumptions in README examples.

## Code health

Family-wide rules live in the
[wazootech workspace constitution](https://github.com/wazootech/workspace/blob/main/AGENTS.md#code-health-standards);
this repo's specifics:

- Before pushing, run `npm run format:check`, `npm run lint`, `npm run typecheck`,
  `npm run build`, and `npm test`; CI runs the same checks. Lint uses
  `--max-warnings 0`.
- `@typescript-eslint/no-explicit-any` is an error through the typescript-eslint
  recommended config; use real types or `unknown`.
- Workflow actions are pinned to full commit SHAs with a version comment; Node comes
  from `.node-version`; installs are frozen (`npm ci`).
- `secret-scan.yml` runs gitleaks on every pull request and push to `main`.
  `code-health.yml` only warns and is listed in `.prettierignore` to stay identical to
  the org template. `CODEOWNERS` routes review to `@EthanThatOneKid`.
