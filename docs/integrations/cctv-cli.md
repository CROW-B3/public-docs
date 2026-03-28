---
sidebar_position: 2
title: CCTV CLI
---

# CCTV CLI Integration

The `@b3-crow/cctv-cli` is a command-line tool for ingesting video frames from RTSP camera streams into the CROW pipeline. It samples frames at a configurable rate, spools them locally, and optionally uploads them to the CROW ingest service for AI-powered analysis.

## Prerequisites

- **[Bun](https://bun.sh)** (runtime) or Node.js 18+
- **[ffmpeg](https://ffmpeg.org)** (required for RTSP frame grabbing)

Verify ffmpeg is installed:

```bash
ffmpeg -version
```

## Installation

### Global Install

```bash
npm install -g @b3-crow/cctv-cli
```

After installation, the `cctv` command is available globally.

### From Source

```bash
git clone https://github.com/CROW-B3/cctv-cli.git
cd cctv-cli
bun install
bun run build
```

Run commands with `bun run dev --` prefix when developing locally.

## Commands

### `grab` -- Single Frame Capture

Grab a single JPEG frame from an RTSP stream. Useful for testing connectivity to a camera.

```bash
cctv grab --rtsp "rtsp://192.168.1.100:554/stream" --out frame.jpg
```

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--rtsp <url>` | Yes | -- | RTSP stream URL |
| `--out <path>` | No | `out.jpg` | Output file path |
| `--timeout <ms>` | No | `10000` | Timeout in milliseconds |

### `sample` -- Continuous Frame Sampling

Run a drift-free sampling loop that captures frames at the configured FPS and writes them to a local spool directory. Press `Ctrl+C` for graceful shutdown with a stats summary.

#### Single Camera Mode

```bash
cctv sample \
  --store nike_colombo_01 \
  --camera cam_01 \
  --rtsp "rtsp://192.168.1.100:554/stream" \
  --fps 1
```

#### Multi-Camera Mode (Config File)

```bash
cctv sample --config store.yaml
```

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--config <path>` | No | -- | YAML config file with store + cameras |
| `--store <id>` | No | -- | Store identifier (single-camera mode) |
| `--camera <id>` | No | -- | Camera identifier (single-camera mode) |
| `--rtsp <url>` | No | -- | RTSP stream URL (single-camera mode) |
| `--spool <path>` | No | `./spool` | Spool directory root |
| `--fps <n>` | No | `1` | Frames per second (between 0 and 30) |
| `--timeout <ms>` | No | `10000` | Per-grab timeout in milliseconds |
| `--ingest <url>` | No | -- | Ingest service URL for cloud upload |
| `--motion <mode>` | No | -- | Motion gating: `onvif` or `simulate` |

Output path format: `<spool>/<store>/<camera>/<bucket_sec>_low.jpg`

### `composite` -- Mosaic Generation

Combine spooled frames from multiple cameras into a single mosaic JPEG.

```bash
cctv composite \
  --config store.yaml \
  --bucket 1711622400 \
  --tile-width 320 \
  --tile-height 240
```

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--config <path>` | Yes | -- | YAML config with store + cameras + grid |
| `--bucket <sec>` | Yes | -- | Bucket timestamp (epoch seconds) |
| `--spool <path>` | No | `./spool` | Spool directory root |
| `--tile-width <px>` | No | `320` | Tile width in pixels |
| `--tile-height <px>` | No | `240` | Tile height in pixels |

### `process` -- Local Video File Processing

Extract frames from a local video file (MP4, AVI, MKV, MOV, WebM) and optionally upload them to the ingest service.

```bash
cctv process \
  --file recording.mp4 \
  --store nike_colombo_01 \
  --camera cam_01 \
  --fps 1 \
  --ingest http://localhost:8015
```

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--file <path>` | Yes | -- | Local video file path |
| `--store <id>` | Yes | -- | Store identifier |
| `--camera <id>` | Yes | -- | Camera identifier |
| `--spool <path>` | No | `./spool` | Spool directory root |
| `--fps <n>` | No | `1` | Frames per second (between 0 and 30) |
| `--timeout <ms>` | No | `10000` | Per-upload timeout in milliseconds |
| `--ingest <url>` | No | -- | Ingest service URL for upload |

## Configuration File

For multi-camera setups, use a YAML configuration file:

```yaml
store_id: nike_colombo_01
motion:
  enabled: true
  ttl_seconds: 2
grid:
  rows: 2
  cols: 2
cameras:
  - id: cam_01
    rtsp: rtsp://192.168.1.100:554/stream
    onvif_url: http://192.168.1.100:80
    grid_position: { row: 0, col: 0 }
  - id: cam_02
    rtsp: rtsp://192.168.1.101:554/stream
    onvif_url: http://192.168.1.101:80
    grid_position: { row: 0, col: 1 }
```

### Configuration Fields

| Field | Description |
|-------|-------------|
| `store_id` | Unique identifier for the physical store location |
| `motion.enabled` | Enable ONVIF motion detection gating |
| `motion.ttl_seconds` | How long to keep sampling after motion stops |
| `grid.rows` / `grid.cols` | Grid layout for composite mosaic generation |
| `cameras[].id` | Unique camera identifier |
| `cameras[].rtsp` | RTSP stream URL for the camera |
| `cameras[].onvif_url` | ONVIF device URL for motion detection |
| `cameras[].grid_position` | Position in the composite mosaic grid |

## Cloud Upload

Pass the `--ingest` flag to upload captured frames to the CROW ingest service:

```bash
cctv sample \
  --config store.yaml \
  --ingest https://cctv-ingest.crowai.dev
```

The CLI sends each frame to the ingest service as it is captured. The ingest service handles storage, AI processing, and integration with the CROW analytics pipeline.

## Resources

- **NPM Package**: [`@b3-crow/cctv-cli`](https://www.npmjs.com/package/@b3-crow/cctv-cli)
- **GitHub Repository**: [CROW-B3/cctv-cli](https://github.com/CROW-B3/cctv-cli)
- **License**: MIT
