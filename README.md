# Awesome Agentic Engineering

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A practical map of tools, patterns, safety checks, and workflows for building software with coding agents.

This is a curated, practical field guide for people building software with coding agents: tools worth knowing, workflows that hold up under review, and safety checks that keep autonomy bounded. It follows the awesome-list tradition while using an original taxonomy for agentic engineering.

## How to use this list

- Start with **Coding agents and agentic IDEs** if you want tools that directly change code.
- Use **Verification, evaluation, and observability** before trusting automated changes.
- Pair **Safety, governance, and secure execution** with any workflow that can touch secrets, dependencies, infrastructure, or releases.
- Treat entries as starting points, not endorsements. Evaluate licenses, security posture, maintenance, and fit for your environment.

## Contents

- [Coding agents and agentic IDEs](#coding-agents-and-agentic-ides)
- [Agent frameworks and orchestration](#agent-frameworks-and-orchestration)
- [Protocols, tools, and context plumbing](#protocols-tools-and-context-plumbing)
- [Verification, evaluation, and observability](#verification-evaluation-and-observability)
- [Safety, governance, and secure execution](#safety-governance-and-secure-execution)
- [Workflow patterns and operator playbooks](#workflow-patterns-and-operator-playbooks)
- [Roger's agentic engineering tools](#rogers-agentic-engineering-tools)

## Coding agents and agentic IDEs

Tools that can inspect, edit, test, and iterate on software projects with varying levels of autonomy.

- [OpenAI Codex CLI](https://github.com/openai/codex) — Terminal-based coding agent for delegating repository changes with reviewable diffs.
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — Agentic command-line workflow for navigating codebases, changing files, and running verification loops.
- [Aider](https://github.com/Aider-AI/aider) — Pair-programming agent that edits local Git repositories through conversational requests.
- [Cline](https://github.com/cline/cline) — VS Code agent extension focused on tool use, file edits, browser actions, and task execution.
- [Roo Code](https://github.com/RooVetGit/Roo-Code) — VS Code coding agent with configurable modes for planning, implementation, debugging, and review.
- [Continue](https://github.com/continuedev/continue) — Open-source AI code assistant framework for chat, autocomplete, and custom model workflows.
- [Cursor](https://www.cursor.com/) — AI-first editor combining codebase-aware chat, inline edits, and agentic implementation workflows.
- [Windsurf](https://windsurf.com/) — Agentic development environment built around codebase context and multi-step software changes.

## Agent frameworks and orchestration

Libraries and runtimes for building agents that plan, call tools, maintain state, and coordinate work.

- [LangGraph](https://github.com/langchain-ai/langgraph) — Graph-based framework for stateful, controllable agents with durable execution patterns.
- [AutoGen](https://github.com/microsoft/autogen) — Framework for composing multi-agent conversations, tool calls, and human-in-the-loop workflows.
- [CrewAI](https://github.com/crewAIInc/crewAI) — Python framework for role-based agent teams, tasks, delegation, and process-oriented automation.
- [Pydantic AI](https://github.com/pydantic/pydantic-ai) — Python agent framework emphasizing typed outputs, dependency injection, and production-friendly validation.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) — SDK for building agents with handoffs, guardrails, tracing, and structured tool execution.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — SDK for connecting prompts, planners, memory, and plugins into enterprise AI applications.
- [LlamaIndex](https://github.com/run-llama/llama_index) — Data and agent framework for retrieval-heavy applications over documents, tools, and knowledge sources.

## Protocols, tools, and context plumbing

Standards and utilities that make tool access, repository context, and runtime capabilities explicit.

- [Model Context Protocol](https://github.com/modelcontextprotocol) — Open protocol for connecting AI systems to tools, data sources, prompts, and resources.
- [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) — API description standard that helps agents understand available HTTP operations and schemas.
- [JSON Schema](https://json-schema.org/) — Vocabulary for declaring structured data contracts used by tool inputs and agent outputs.
- [Tree-sitter](https://github.com/tree-sitter/tree-sitter) — Incremental parsing toolkit useful for building reliable code navigation and context extraction.
- [ast-grep](https://github.com/ast-grep/ast-grep) — Structural search and rewrite tool that gives agents safer code modification primitives.
- [Sourcegraph Cody](https://sourcegraph.com/cody) — Codebase-aware assistant backed by Sourcegraph search and repository intelligence capabilities.

## Verification, evaluation, and observability

Systems for proving agent work, measuring quality, replaying traces, and catching regressions early.

- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-specification) — Observability standard for traces, metrics, and logs across agent and application runtimes.
- [LangSmith](https://www.langchain.com/langsmith) — Platform for tracing, evaluating, and monitoring LLM application and agent behavior.
- [Arize Phoenix](https://github.com/Arize-ai/phoenix) — Open-source observability and evaluation tooling for LLM applications, embeddings, and agents.
- [ax](https://github.com/Necmttn/ax) — Local agent-experience graph for coding agents that tracks transcripts, tool calls, skills, costs, routing, hooks, and recall.
- [promptfoo](https://github.com/promptfoo/promptfoo) — Testing framework for prompts, models, and agent outputs using repeatable eval suites.
- [OpenAI Evals](https://github.com/openai/evals) — Framework and registry for evaluating model behavior with reproducible task definitions.
- [DeepEval](https://github.com/confident-ai/deepeval) — LLM evaluation framework for correctness, faithfulness, regression tests, and CI checks.
- [SWE-bench](https://github.com/SWE-bench/SWE-bench) — Benchmark for evaluating systems that solve real software engineering issues from repositories.

## Safety, governance, and secure execution

Practices and tools for sandboxing, secret hygiene, dependency risk, and human approval boundaries.

- [OpenSSF Scorecard](https://github.com/ossf/scorecard) — Automated checks for open-source project security posture and supply-chain hygiene.
- [gitleaks](https://github.com/gitleaks/gitleaks) — Secret scanning tool that helps prevent credentials from leaking through agent-generated commits.
- [Semgrep](https://github.com/semgrep/semgrep) — Static analysis engine for finding vulnerabilities and enforcing code patterns across languages.
- [OSV-Scanner](https://github.com/google/osv-scanner) — Vulnerability scanner using OSV data to check dependencies, lockfiles, SBOMs, and containers.
- [Sigstore Cosign](https://github.com/sigstore/cosign) — Artifact signing and verification tooling for strengthening provenance in automated release pipelines.
- [GitHub Actions permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) — Documentation for limiting workflow token privileges and reducing blast radius for CI automation.

## Workflow patterns and operator playbooks

Concrete ways to use agents responsibly inside real repositories and delivery processes.

- [Stacked Git worktrees](https://git-scm.com/docs/git-worktree) — Git feature that supports isolated agent workspaces without dirtying established checkouts.
- [Conventional Commits](https://www.conventionalcommits.org/) — Commit message convention that makes agent changes easier to review, release, and audit.
- [Keep a Changelog](https://keepachangelog.com/) — Human-readable changelog format useful for summarizing agent-produced changes clearly.
- [Architecture Decision Records](https://adr.github.io/) — Lightweight decision records that preserve why an agent-assisted design choice was made.
- [Google Engineering Practices Review Guide](https://google.github.io/eng-practices/review/) — Practical review guidance that translates well to human review of agent-generated patches.
- [GitHub Pull Request Reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) — Review workflow documentation for structuring approvals, comments, and merge readiness.

## Roger's agentic engineering tools

Local-first utilities from Roger's open-source ecosystem that support agent-led software delivery.

- [repoctx](https://github.com/rogerchappel/repoctx) — Repository context generator for giving agents concise maps of code structure and project signals.
- [branchbrief](https://github.com/rogerchappel/branchbrief) — Branch summary tool for reviewing diffs, commits, and change intent before handoff.
- [taskbrief](https://github.com/rogerchappel/taskbrief) — Task framing helper for turning ideas into clearer scoped work packages for agents.
- [workspacewire](https://github.com/rogerchappel/workspacewire) — Workspace automation utility for coordinating repository state and agent-facing project metadata.

## Curation principles

- Prefer practical projects, standards, and docs that help teams ship safer agent-assisted software.
- Include tools with clear public documentation, active maintenance signals, or durable ecosystem importance.
- Avoid bulk dumping links, thin wrappers, growth-hacked projects, or entries without a concrete engineering use case.
- Keep descriptions original, specific, and useful to a practitioner deciding what to inspect next.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/curation-policy.md](docs/curation-policy.md) before opening an issue or pull request.

## Attribution

Inspired by the awesome-list format and the category represented by [sindresorhus/awesome](https://github.com/sindresorhus/awesome). This repository does not copy that list's contents, branding, wording, or structure; descriptions and taxonomy here are original.

## License

Content is licensed under [CC BY 4.0](LICENSE).
