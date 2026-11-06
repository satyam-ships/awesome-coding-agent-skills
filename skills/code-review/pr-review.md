---
name: code-review
description: Use when reviewing a diff or pull request for bugs, risk and clarity.
---

# Code Review

1. Read the PR description, then the diff. State the intent in one sentence before judging it.
2. Check in this order: correctness → security → data loss/migrations → concurrency → error handling → tests → naming/style.
3. For each finding give: file:line, what breaks, a concrete input that triggers it, a suggested fix.
4. Separate **blocking** issues from **nits**. Never block on style a linter could enforce.
5. Verify claims by reading the code, not by trusting comments or the PR text.
6. End with a verdict: approve / request changes, plus the top 3 risks.
