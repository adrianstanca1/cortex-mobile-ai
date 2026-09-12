# Architecture

## Mobile client
Expo + React Native. The client provides chat, model selection, task plans, approvals, files, execution logs, agent state and notifications.

## Cortex Gateway
A separate authenticated backend owns provider API keys and exposes narrow capabilities to the mobile client. High-risk operations are never executed directly by the phone app.

## Model router
The router selects among local Ollama, OpenRouter, OpenAI, Anthropic, Google and compatible custom endpoints. Default policy is local-first with optional escalation based on capability, latency and user policy.

## Agent runtime
A planner decomposes an objective into tasks. Worker agents can execute independent tasks in parallel while a coordinator tracks dependencies, results and failures.

## Tool security
Read-only actions can be auto-approved by policy. File writes, terminal execution, computer control and agent spawning are approval-gated by default. Every tool call should be auditable.

## Execution layer
Terminal, browser and computer-use actions run through an isolated remote gateway/container or authorized user machine. Root-level operations should require a separate explicit approval and narrowly scoped session.
