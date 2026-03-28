---
sidebar_position: 3
title: Social Collector
---

# Social Collector Integration

The CROW Social Collector monitors social media platforms and news sources for brand mentions, reviews, and conversations relevant to your organization. Unlike the Web SDK and CCTV CLI, the Social Collector is configured through the CROW dashboard and runs automatically on a scheduled basis.

## How It Works

1. You configure which platforms and accounts to monitor via the dashboard or API.
2. CROW runs scheduled collection jobs that search for relevant content.
3. Collected items are processed through the AI pipeline for summarization and sentiment analysis.
4. Results appear as `social` source interactions in your CROW dashboard and API.

## Supported Platforms

| Platform | What is collected |
|----------|-------------------|
| **Twitter** | Posts mentioning your brand or from specific accounts |
| **Reddit** | Threads and comments in relevant subreddits |
| **Instagram** | Posts and mentions for configured accounts |
| **TikTok** | Videos and comments mentioning your brand |
| **LinkedIn** | Posts and articles from company pages |
| **Facebook** | Public posts and page mentions |
| **YouTube** | Videos, comments, and channel activity |
| **News** | News articles mentioning your brand or products |

## Dashboard Configuration

1. Navigate to **Integrations > Social** in the [CROW Dashboard](https://app.crowai.dev).
2. Click **Add Source** and select a platform.
3. Enter the account handle or search terms to monitor.
4. Enable the configuration and save.

CROW begins collecting data on the next scheduled run (typically every few hours).

## API Configuration

You can also manage social source configurations programmatically through the CROW API.

### List Configurations

```bash
curl -X GET "https://api.crowai.dev/api/v1/social/configs/{orgId}" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Create a Configuration

```bash
curl -X POST "https://api.crowai.dev/api/v1/social/configs" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "orgId": "your-org-id",
    "platform": "twitter",
    "accountHandle": "@yourbrand"
  }'
```

### Update a Configuration

```bash
curl -X PUT "https://api.crowai.dev/api/v1/social/configs/{configId}" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "enabled": 1
  }'
```

### Delete a Configuration

```bash
curl -X DELETE "https://api.crowai.dev/api/v1/social/configs/{configId}" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Viewing Social Data

Once collection is running, social interactions appear alongside web and CCTV data in your CROW dashboard. You can also query them through:

- **Dashboard**: Filter interactions by `social` source type
- **MCP Server**: Use the `crow_search_interactions` tool with `sourceType: "social"`
- **API**: Query `/api/v1/interactions` with `sourceType=social`

## Configuration Schema

Each social source configuration has the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `orgId` | string | Your organization ID |
| `platform` | enum | One of: `twitter`, `reddit`, `instagram`, `tiktok`, `linkedin`, `facebook`, `youtube`, `news` |
| `platformAccountId` | string | Platform-specific account identifier (optional) |
| `accountHandle` | string | Public handle or username to monitor (optional) |
| `enabled` | number | `1` for active, `0` for paused |
