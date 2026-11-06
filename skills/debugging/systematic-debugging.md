---
name: systematic-debugging
description: Use when a bug, failing test or unexpected behavior needs root-cause analysis.
---

# Systematic Debugging

1. **Reproduce** with the smallest possible command or test. No repro, no fix.
2. **Observe** actual vs expected. Read the full error and stack trace before theorizing.
3. **Hypothesize**: list 2-3 causes ranked by likelihood. Pick the cheapest to falsify.
4. **Bisect**: `git bisect`, comment out halves, or add logging at boundaries.
5. **Fix the cause**, not the symptom. Explain why the bug could happen.
6. **Lock it in**: add a regression test that fails before the fix and passes after.
7. Do not change multiple things at once.
