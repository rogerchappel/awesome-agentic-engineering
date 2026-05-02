# Operator playbook

Use this list with a review loop, not blind delegation.

## A useful agentic engineering loop

1. **Frame** the task: expected outcome, constraints, affected files, and forbidden actions.
2. **Isolate** the work: use a fresh branch, worktree, container, or sandbox.
3. **Constrain** tools: grant only the filesystem, network, credentials, and commands needed.
4. **Inspect** the plan: require the agent to state assumptions and verification steps.
5. **Verify** locally: run tests, lint, type checks, smoke tests, and security scanners where relevant.
6. **Review** the diff: check generated code like any other contributor's work.
7. **Record** the decision: capture why the change is acceptable and what evidence supports it.

## Red flags

- The agent asks for broad credentials or permission changes without a narrow reason.
- The diff changes generated files, lockfiles, or infrastructure without explanation.
- The verification output is summarized but not reproducible.
- The task touches secrets, billing, production, or public publishing without human approval.
