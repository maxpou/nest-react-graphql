#!/bin/sh -x
npm run lint --workspaces --if-present
npm run build --workspace=fees && npm run build --workspace=frontend --workspace=backend
npm run test --workspaces --if-present