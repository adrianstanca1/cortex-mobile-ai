export type ModelProvider = 'openai' | 'anthropic' | 'google' | 'openrouter' | 'ollama' | 'custom';

export type Capability =
  | 'chat'
  | 'files.read'
  | 'files.write'
  | 'terminal.exec'
  | 'browser.use'
  | 'computer.use'
  | 'agents.spawn';

export type AgentTask = {
  id: string;
  title: string;
  status: 'queued' | 'running' | 'waiting_approval' | 'done' | 'failed';
  capability?: Capability;
};

export type ModelConnection = {
  id: string;
  name: string;
  provider: ModelProvider;
  model: string;
  baseUrl?: string;
  enabled: boolean;
};
