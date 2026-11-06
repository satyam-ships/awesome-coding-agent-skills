---
name: dependency-audit
description: Use when asked to check dependencies for vulnerabilities or outdated packages.
---

# Dependency Audit

1. Detect the ecosystem (npm, pip, maven, go) and run its audit command (`npm audit`, `pip-audit`, `mvn dependency-check:check`, `govulncheck ./...`).
2. Group findings by severity and whether the vulnerable code path is reachable.
3. Prefer minimal upgrades (patch/minor). Flag breaking majors separately.
4. Check lockfile changes in the diff; verify no unexpected new packages (typosquatting).
5. Report: package, current → fixed version, CVE, risk, upgrade command.
