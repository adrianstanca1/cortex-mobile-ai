import { ModelConnection } from '../types';

export const defaultConnections: ModelConnection[] = [
  { id: 'local', name: 'Local Ollama', provider: 'ollama', model: 'qwen3', enabled: true },
  { id: 'openrouter', name: 'OpenRouter', provider: 'openrouter', model: 'auto', enabled: false },
  { id: 'openai', name: 'OpenAI', provider: 'openai', model: 'gpt-5.6', enabled: false },
  { id: 'anthropic', name: 'Anthropic', provider: 'anthropic', model: 'claude', enabled: false }
];

export function selectModel(connections: ModelConnection[], preferLocal = true) {
  const enabled = connections.filter((c) => c.enabled);
  if (!enabled.length) throw new Error('No model connection is enabled.');
  if (preferLocal) return enabled.find((c) => c.provider === 'ollama') ?? enabled[0];
  return enabled[0];
}
