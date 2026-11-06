---
name: api-security
description: Use when designing, building or reviewing HTTP APIs for security issues.
---

# API Security Checklist

- **AuthN**: short-lived tokens, rotate refresh tokens, never put secrets in URLs.
- **AuthZ**: check object-level ownership on every request (BOLA/IDOR is the #1 API flaw).
- **Input**: validate against a schema; reject unknown fields; cap sizes and pagination.
- **Output**: return only needed fields; no stack traces; consistent error shapes.
- **Rate limiting** per user and per IP; stricter on login and password reset.
- **Transport**: TLS only, HSTS, tight CORS allowlist (never `*` with credentials).
- **Secrets**: from env or a vault; never logged; rotated.
- **Logging**: audit auth events; never log tokens or PII.
- **Dependencies**: run an audit in CI.
