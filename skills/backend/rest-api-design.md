---
name: rest-api-design
description: Use when designing REST endpoints, request/response shapes and error handling.
---

# REST API Design

- Nouns for resources, HTTP verbs for actions: `GET /orders/{id}`, `POST /orders`.
- Correct status codes: 201 create, 204 no body, 400 validation, 401/403 auth, 404, 409 conflict, 429 rate limit.
- Error body: `{ "error": { "code": "...", "message": "...", "details": [] } }`.
- Paginate lists (cursor preferred); filter and sort via query params.
- Make writes idempotent with an `Idempotency-Key` header.
- Version via path (`/v1`) and never break a published version.
- Document with OpenAPI and keep it the source of truth.
