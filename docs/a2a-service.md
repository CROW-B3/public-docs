---
sidebar_position: 9
---

# A2A Service

`CROW-B3/a2a-service` implements the **Agent-to-Agent (A2A)** JSON-RPC protocol, exposing CROW capabilities to external autonomous AI agents. It enables interoperability between CROW and other AI systems that speak the A2A specification.

- **GitHub**: [CROW-B3/a2a-service](https://github.com/CROW-B3/a2a-service)

## What is A2A?

Agent-to-Agent (A2A) is an open protocol for autonomous agents to discover and call each other's capabilities via a standardised JSON-RPC interface. CROW's A2A service publishes its agent card so that external orchestrators and agents can:

- Discover what CROW can do
- Invoke CROW actions programmatically
- Receive structured results back in a normalised format

## Setup

```bash
git clone https://github.com/CROW-B3/a2a-service.git
cd a2a-service
bun install
```

## Running the Service

```bash
bun run dev
```

The service starts on **`localhost:8020`** by default.

## Agent Card

Once running, the agent card (capability manifest) is available at:

```
GET http://localhost:8020/.well-known/agent.json
```

External agents use this endpoint to discover available skills and the JSON-RPC methods they can call.

## Resources

- **A2A Specification**: [google.github.io/A2A](https://google.github.io/A2A)
- **GitHub**: [CROW-B3/a2a-service](https://github.com/CROW-B3/a2a-service)
