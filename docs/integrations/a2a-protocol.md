---
sidebar_position: 5
title: A2A Protocol
---

# A2A Protocol Integration

CROW implements Google's [Agent-to-Agent (A2A) protocol](https://google.github.io/A2A/) v0.3.0, enabling other AI agents to communicate with CROW as a peer. Use this integration when you are building multi-agent systems and want an agent to query CROW data, ask questions about your organization, or delegate tasks to the CROW agent.

## Agent Card

The CROW A2A agent publishes a discovery document (Agent Card) at:

```
https://a2a.crowai.dev/.well-known/agent-card.json
```

Fetch it to discover the agent's capabilities:

```bash
curl https://a2a.crowai.dev/.well-known/agent-card.json
```

### Agent Card Contents

```json
{
  "name": "CROW A2A Agent",
  "description": "CROW A2A protocol agent service.",
  "protocolVersion": "0.3.0",
  "version": "0.1.0",
  "url": "https://a2a.crowai.dev/a2a/jsonrpc",
  "skills": [
    {
      "id": "chat",
      "name": "Chat",
      "description": "Chat with the agent",
      "tags": ["chat"]
    }
  ],
  "capabilities": {
    "pushNotifications": false
  },
  "defaultInputModes": ["text"],
  "defaultOutputModes": ["text"]
}
```

## Endpoint

All A2A communication goes through a single JSON-RPC endpoint:

```
POST https://a2a.crowai.dev/a2a/jsonrpc
```

## Sending a Task

Send a task to the CROW agent using the `tasks/send` method:

```bash
curl -X POST https://a2a.crowai.dev/a2a/jsonrpc \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tasks/send",
    "params": {
      "id": "task-001",
      "message": {
        "role": "user",
        "parts": [
          {"kind": "text", "text": "What are the trending products this week?"}
        ],
        "metadata": {
          "organizationId": "your-org-id"
        }
      }
    }
  }'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "task-001",
    "status": {
      "state": "completed"
    },
    "artifacts": [
      {
        "parts": [
          {
            "kind": "text",
            "text": "Based on your interaction data, the top trending products this week are..."
          }
        ]
      }
    ]
  }
}
```

## Python Example

```python
import httpx

A2A_ENDPOINT = "https://a2a.crowai.dev/a2a/jsonrpc"

def send_task(task_id: str, message: str, org_id: str) -> dict:
    """Send a task to the CROW A2A agent."""
    response = httpx.post(
        A2A_ENDPOINT,
        json={
            "jsonrpc": "2.0",
            "id": 1,
            "method": "tasks/send",
            "params": {
                "id": task_id,
                "message": {
                    "role": "user",
                    "parts": [{"kind": "text", "text": message}],
                    "metadata": {"organizationId": org_id},
                },
            },
        },
    )
    return response.json()


def get_agent_card() -> dict:
    """Fetch the CROW agent card for discovery."""
    response = httpx.get(
        "https://a2a.crowai.dev/.well-known/agent-card.json"
    )
    return response.json()


# Usage
card = get_agent_card()
print(f"Agent: {card['name']} (v{card['version']})")

result = send_task(
    task_id="analysis-001",
    message="Summarize customer behavior patterns for the last 7 days",
    org_id="your-org-id",
)

# Extract the agent's response
artifacts = result.get("result", {}).get("artifacts", [])
for artifact in artifacts:
    for part in artifact.get("parts", []):
        if part.get("kind") == "text":
            print(part["text"])
```

## TypeScript Example

```typescript
const A2A_ENDPOINT = 'https://a2a.crowai.dev/a2a/jsonrpc';

interface A2AResponse {
  jsonrpc: '2.0';
  id: number;
  result?: {
    id: string;
    status: { state: string };
    artifacts?: Array<{
      parts: Array<{ kind: string; text?: string }>;
    }>;
  };
  error?: { code: number; message: string };
}

async function sendTask(
  taskId: string,
  message: string,
  orgId: string
): Promise<A2AResponse> {
  const response = await fetch(A2A_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tasks/send',
      params: {
        id: taskId,
        message: {
          role: 'user',
          parts: [{ kind: 'text', text: message }],
          metadata: { organizationId: orgId },
        },
      },
    }),
  });

  return response.json();
}

// Usage
const result = await sendTask(
  'task-001',
  'What are the most common exit behaviors on our site?',
  'your-org-id'
);

console.log(result.result?.artifacts?.[0]?.parts?.[0]?.text);
```

## Skills

The CROW A2A agent currently supports one skill:

| Skill ID | Name | Description |
|----------|------|-------------|
| `chat` | Chat | Chat with the CROW agent about your organization's data |

The agent forwards your message to CROW's AI chat backend, which has access to your organization's full data context including products, interactions, patterns, and knowledge base.

## Protocol Details

| Property | Value |
|----------|-------|
| Protocol | A2A v0.3.0 |
| Transport | JSON-RPC over HTTP |
| Streaming | Server-Sent Events (SSE) for streaming responses |
| Input modes | `text` |
| Output modes | `text` |
| Push notifications | Not supported |
