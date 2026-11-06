---
name: test-first
description: Use when adding features or fixing bugs and tests should drive the change.
---

# Test-First Workflow

1. Write one failing test that expresses the behavior. Run it; confirm it fails for the right reason.
2. Write the minimum code to pass. Run it.
3. Refactor with tests green.
4. Test behavior through public interfaces, not private internals.
5. Cover: happy path, empty/null input, boundaries, error paths, concurrency where relevant.
6. Avoid mocking what you own; mock only network, time and randomness.
7. Tests must be deterministic and independent.
