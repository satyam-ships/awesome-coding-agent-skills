---
name: dockerfile-hardening
description: Use when writing or reviewing Dockerfiles for production.
---

# Dockerfile Hardening

- Pin base image by version (and digest for critical images); prefer slim/distroless.
- Multi-stage builds: compile in one stage, copy artifacts to a minimal runtime stage.
- Run as a non-root `USER`.
- Order layers by change frequency; copy lockfiles before source to maximize cache.
- Add a `.dockerignore` (node_modules, .git, .env).
- Add `HEALTHCHECK`; no secrets in `ENV` or `ARG`.
- Set `--no-cache-dir`/clean package manager caches in the same layer.
