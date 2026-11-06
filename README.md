# awesome-coding-agent-skills ⚡

> Battle-tested, copy-paste **skills** that make AI coding agents (Claude Code, Codex, Cursor, Gemini CLI, Copilot, OpenCode, Windsurf, Cline, Roo Code) write better code.

A skill is a short markdown playbook an agent follows for a task: how to review a PR, debug a failure, harden a Dockerfile. Good skills turn "plausible code" into "reliable engineering."

## Quick start

Pick a skill from [`skills/`](skills) and drop it where your agent reads instructions:

| Agent | Where to put it |
|---|---|
| Claude Code | `.claude/skills/<name>/SKILL.md` or reference in `CLAUDE.md` |
| Codex / OpenCode | `AGENTS.md` |
| Cursor | `.cursor/rules/<name>.mdc` |
| Gemini CLI | `GEMINI.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf / Cline / Roo | rules directory or `.clinerules` |

Or use the installer (copies a skill into the current project):

```bash
node install.js debugging/systematic-debugging
```

## Skills

| Category | Skill | Use when |
|---|---|---|
| Code Review | [code-review](skills/code-review/pr-review.md) | Reviewing a diff or PR |
| Debugging | [systematic-debugging](skills/debugging/systematic-debugging.md) | Root-causing a bug |
| Testing | [test-first](skills/testing/test-first.md) | Features/bugfixes driven by tests |
| Security | [api-security](skills/security/api-security.md) | Designing/reviewing APIs |
| Security | [dependency-audit](skills/security/dependency-audit.md) | Checking vulnerable packages |
| DevOps | [dockerfile-hardening](skills/devops/dockerfile-hardening.md) | Production Dockerfiles |
| Backend | [rest-api-design](skills/backend/rest-api-design.md) | Designing REST endpoints |
| Frontend | [react-components](skills/frontend/react-components.md) | React components and hooks |

**Coming up:** Kubernetes, AWS, Spring Boot, Node.js, database migrations, performance profiling, refactoring, documentation.

## Skill format

```markdown
---
name: kebab-case-name
description: Use when <trigger condition>.
---
# Title
Numbered, imperative, verifiable steps.
```

Principles: one skill, one job · imperative steps · a clear trigger in `description` · concrete over generic · under 60 lines.

## Contributing

PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). ⭐ Star the repo if it saves you time so others can find it.

## License

[MIT](LICENSE)
