---
sidebar_position: 8
---

# MCP Service

`CROW-B3/mcp-service` is a **Model Context Protocol (MCP)** server that exposes CROW platform tools and resources to AI assistants such as Claude, Cursor, and any other MCP-compatible client.

- **GitHub**: [CROW-B3/mcp-service](https://github.com/CROW-B3/mcp-service)

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io) is an open standard that lets AI assistants securely connect to external data sources and tools. By running the CROW MCP server, AI assistants can query CROW's analytics data, trigger actions, and surface insights directly inside the assistant's context window.

## Setup

```bash
git clone https://github.com/CROW-B3/mcp-service.git
cd mcp-service
bun install
```

## Running the Server

```bash
bun run dev
```

The server starts on **`localhost:8011`** by default.

## Connecting to an AI Assistant

### Claude Desktop

Add the following to your Claude Desktop configuration (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "crow": {
      "command": "bun",
      "args": ["run", "dev"],
      "cwd": "/path/to/mcp-service"
    }
  }
}
```

### Cursor

Add the server via Cursor's MCP settings panel pointing to `http://localhost:8011`.

## Resources

- **MCP Specification**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **GitHub**: [CROW-B3/mcp-service](https://github.com/CROW-B3/mcp-service)
