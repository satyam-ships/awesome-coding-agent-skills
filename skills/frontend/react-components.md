---
name: react-components
description: Use when writing or refactoring React components and hooks.
---

# React Components

- Small components with one job; lift state only as high as needed.
- Derive values during render instead of syncing them with `useEffect`.
- Effects are for synchronizing with external systems, with complete dependency arrays.
- Stable keys for lists (ids, not indexes, if order changes).
- Avoid premature `useMemo`/`useCallback`; measure first.
- Handle loading, empty and error states explicitly.
- Accessibility: semantic elements, labels, keyboard support, focus management.
