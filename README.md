# Cortex — Mobile AI

A mobile-first AI command center for iOS, Android and web. Cortex is designed to connect to multiple AI providers, prefer local/free models when practical, plan complex tasks, delegate work to parallel agents, and use approved tools such as files, terminal, browser and computer-control gateways.

## Core principles
- Local-first model routing with optional cloud escalation
- Provider-agnostic model connections
- Explicit approval gates for privileged actions
- Off-device execution gateway for terminal/browser/computer use
- No provider secrets embedded in the mobile client
- Parallel agent orchestration with task status and audit trail

## Start
```bash
npm install
npm run start
```

Copy `.env.example` to `.env` and point the app at your secure Cortex gateway.

## Roadmap
1. Provider connection manager and encrypted credential vault
2. Chat streaming and conversation persistence
3. Agent planner + parallel worker runtime
4. File browser and workspace sync
5. Terminal execution gateway with approval policies
6. Browser/computer-use session viewer
7. Persistent memory and project context
8. Push notifications and background task status
