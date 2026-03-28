---
sidebar_position: 4
title: MCP Server
---

# MCP Server Integration

CROW exposes your organization's product catalog, customer interaction history, and AI-generated behavioral patterns through a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server. This allows AI assistants like Claude Desktop, Cursor, and other MCP-compatible clients to query your CROW data using natural language.

## Claude Desktop Configuration

Add the following to your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "crow": {
      "url": "https://mcp.crowai.dev/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

Restart Claude Desktop after saving. The CROW tools will appear in Claude's tool list.

## Authentication

The MCP server requires a valid CROW API key. Pass it in one of two ways:

| Method | Header |
|--------|--------|
| Bearer token | `Authorization: Bearer YOUR_API_KEY` |
| API key header | `X-API-Key: YOUR_API_KEY` |

The server verifies your API key and resolves your organization ID automatically. All queries are scoped to your organization's data.

## Available Tools

The MCP server exposes six tools:

### `crow_search_products`

Search your organization's product catalog using semantic, full-text, or hybrid search.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Search query string |
| `mode` | enum | No | `semantic`, `fts`, or `hybrid` |
| `limit` | number | No | Max results to return |

**Example prompt**: "Search our catalog for running shoes under $150"

### `crow_search_interactions`

Search customer interaction history filtered by source channel and optional text query.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Text query to filter by content |
| `sourceType` | enum | No | `web`, `cctv`, or `social` |
| `limit` | number | No | Max results to return |
| `page` | number | No | Page number for pagination |

**Example prompt**: "Show me the latest web interactions from this week"

### `crow_get_interaction_summary`

Get interaction counts broken down by channel (web, CCTV, social). Takes no parameters.

**Example prompt**: "How many interactions do we have across each channel?"

### `crow_search_patterns`

Search behavioral pattern analysis and AI-generated insights.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Text query to filter insights |
| `period` | enum | No | `daily`, `weekly`, `monthly`, or `yearly` |

**Example prompt**: "What behavioral patterns have we detected this month?"

### `crow_get_product_ai_descriptions`

Get AI-generated descriptions for a specific product, including visual analysis from product images.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `productId` | string | Yes | The product ID |

**Example prompt**: "Show me the AI description for product prod_abc123"

### `crow_search_org_context`

Search your organization's context including company overview, products summary, target market, and knowledge base.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Search query about organization context |
| `limit` | number | No | Max results to return |

**Example prompt**: "What is our company's target market?"

## Protocol Details

The MCP server implements the [MCP specification](https://modelcontextprotocol.io/specification) version `2024-11-05` using Streamable HTTP transport.

### Endpoint

```
POST https://mcp.crowai.dev/mcp
```

### Supported Methods

| Method | Description |
|--------|-------------|
| `initialize` | Handshake and capability negotiation |
| `tools/list` | List all available tools |
| `tools/call` | Execute a tool with arguments |

### Example: Raw JSON-RPC Request

```bash
curl -X POST https://mcp.crowai.dev/mcp \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "crow_search_products",
      "arguments": {
        "query": "summer dresses",
        "mode": "semantic",
        "limit": 5
      }
    }
  }'
```

### Example Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "[\n  {\n    \"id\": \"prod_001\",\n    \"name\": \"Floral Summer Dress\",\n    ...\n  }\n]"
      }
    ]
  }
}
```

## Server Info

| Property | Value |
|----------|-------|
| Server name | `crow-mcp-server` |
| Version | `1.0.0` |
| Protocol version | `2024-11-05` |
| Transport | Streamable HTTP |
