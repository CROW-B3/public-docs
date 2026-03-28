---
sidebar_position: 5
---

# CCTV CLI

`@b3-crow/cctv-cli` is a Bun-based command-line tool for sampling live **RTSP** feeds or local video files and streaming frames to CROW's edge ingest service over WebSockets. It handles camera registration, authentication, and stream lifecycle management.

- **GitHub**: [CROW-B3/cctv-cli](https://github.com/CROW-B3/cctv-cli)
- **License**: MIT

## Requirements

- [Bun](https://bun.sh) runtime
- [ffmpeg](https://ffmpeg.org) (for RTSP frame grabbing)

## Installation

```bash
git clone https://github.com/CROW-B3/cctv-cli.git
cd cctv-cli
bun install
```

## Commands

### `grab` — Capture a single frame

Grab one frame from an RTSP stream and save it to disk.

```bash
bun run dev -- grab --rtsp "rtsp://localhost:8554/test" --out frame.jpg --timeout 10000
```

| Flag | Required | Default | Description |
|---|---|---|---|
| `--rtsp` | yes | — | RTSP stream URL |
| `--out` | no | `out.jpg` | Output file path |
| `--timeout` | no | `10000` | Timeout in milliseconds |

### `sample` — Continuous frame sampling

Runs a drift-free sampling loop at the configured FPS, writing frames to a local spool directory with deterministic `bucket_sec`-based filenames. Press `Ctrl+C` for a graceful shutdown with stats summary.

```bash
bun run dev -- sample \
  --store mystore \
  --camera cam1 \
  --rtsp "rtsp://localhost:8554/test"
```

| Flag | Required | Default | Description |
|---|---|---|---|
| `--store` | yes | — | Store identifier |
| `--camera` | yes | — | Camera identifier |
| `--rtsp` | yes | — | RTSP stream URL |
| `--spool` | no | `./spool` | Spool directory root |
| `--fps` | no | `1` | Frames per second (0 < fps ≤ 30) |
| `--timeout` | no | `10000` | Per-grab timeout in milliseconds |

**Output path pattern:** `<spool>/<store>/<camera>/<bucket_sec>_low.jpg`

## Development

```bash
bun run build   # Compile
bun run lint    # Lint
bun run test    # Unit tests (no ffmpeg / RTSP needed)

# Integration tests (requires a running RTSP stream)
RTSP_URL="rtsp://localhost:8554/test" bun run test
```

See [docs/mediamtx-setup.md](https://github.com/CROW-B3/cctv-cli/blob/main/docs/mediamtx-setup.md) in the repository for instructions on setting up a local RTSP test server with MediaMTX.

## Roadmap

| Phase | Description | Status |
|---|---|---|
| 0 | Single frame grab | Done |
| 1 | 1 FPS sampler + local spool | Done |
| 2 | Local ingest stub | Planned |
| 3 | Cloudflare ingest MVP (R2 + D1) | Planned |
| 4 | Multi-camera bucketing | Planned |
| 5 | Composite mosaic | Planned |
| 6 | ONVIF motion gating | Planned |
| 7 | Sessionisation + analysis trigger | Planned |
