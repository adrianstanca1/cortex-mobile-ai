# Security model

Cortex does not store provider secrets in source control. Mobile clients receive scoped session tokens, not raw infrastructure credentials.

Privileged tools follow least privilege. Destructive terminal commands, privilege escalation, secret access, external publishing and security-setting changes require explicit approval unless the owner has created a narrowly scoped standing policy.

All remote actions should produce an audit event containing actor, capability, target, approval state, start time, result and error details.
