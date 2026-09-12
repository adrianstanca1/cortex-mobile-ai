import { Capability } from '../types';

const approvalRequired = new Set<Capability>([
  'files.write',
  'terminal.exec',
  'computer.use',
  'agents.spawn'
]);

export function requiresApproval(capability: Capability) {
  return approvalRequired.has(capability);
}

export function isHighRisk(capability: Capability) {
  return capability === 'terminal.exec' || capability === 'computer.use';
}
