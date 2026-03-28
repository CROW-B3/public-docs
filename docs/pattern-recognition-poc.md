---
sidebar_position: 10
---

# Pattern Recognition POC

`CROW-B3/pattern-recognisition-poc` is a proof-of-concept Streamlit application for analysing customer behaviour in CCTV footage using **MediaPipe** and **Google Gemini AI**. It demonstrates two complementary AI pipelines for retail analytics.

- **GitHub**: [CROW-B3/pattern-recognisition-poc](https://github.com/CROW-B3/pattern-recognisition-poc)
- **Live Demo**: [HuggingFace Spaces](https://huggingface.co/spaces/BitByBit-B3/pattern-recognition-poc)
- **License**: MIT

## Overview

The application provides two analysis approaches that can be run individually or side-by-side for comparison.

| Mode | Description |
|---|---|
| **MediaPipe + Gemini** | Uses MediaPipe Holistic for pose detection and skeleton tracking, detects hand-object interactions, builds a frame-by-frame timeline, then sends structured data to Gemini for behavioural analysis |
| **Gemini Vision Only** | Uploads video directly to Gemini 2.5 for end-to-end multimodal analysis — simpler pipeline, powerful AI-driven insights |
| **Both (Comparison)** | Runs both pipelines side-by-side so you can compare results and evaluate trade-offs |

## Tech Stack

| Library | Purpose |
|---|---|
| Python 3.11 | Core language |
| Streamlit | Interactive web UI |
| MediaPipe | Pose and hand landmark detection |
| OpenCV | Video frame processing |
| Google Gemini API | AI analysis and insights |
| uv | Fast Python package management |

## Quick Start

### Prerequisites

- Python 3.10 or 3.11
- [uv](https://github.com/astral-sh/uv) package manager
- Google Gemini API key ([get one here](https://aistudio.google.com/app/apikey))

### Local Setup

```bash
git clone https://github.com/CROW-B3/pattern-recognisition-poc.git
cd pattern-recognisition-poc

# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies
uv sync

# Configure environment
cp .env.example .env
# Edit .env and add: GOOGLE_API_KEY=your_key_here

# Start the application
uv run streamlit run app.py
```

The app opens at [http://localhost:8501](http://localhost:8501).

## Using the Application

1. **Configure Settings** in the sidebar — select processing mode, enter your Gemini API key, and adjust confidence thresholds
2. **Upload a video** — drag-and-drop or browse for MP4, AVI, MOV, or MKV files
3. **Start Processing** — monitor progress in real time
4. **Review Results** — AI-generated insights, frame-by-frame timeline data, and a side-by-side comparison (if running Both mode)

## Configuration

### MediaPipe Settings

| Setting | Range | Description |
|---|---|---|
| Detection Confidence | 0.0–1.0 | Minimum confidence for initial detection |
| Tracking Confidence | 0.0–1.0 | Minimum confidence for cross-frame tracking |
| Contact Distance | 0.01–0.3 | Normalised distance threshold for contact detection |

### Video Processing

| Setting | Range | Description |
|---|---|---|
| Frame Skip | 1–10 | Process every Nth frame (higher = faster, less detail) |
| Max Duration | 5–300s | Maximum video length to process |

## Deployment

### Docker

```bash
docker build -t pattern-recognition-poc .
docker run -p 8501:8501 -e GOOGLE_API_KEY=your_key pattern-recognition-poc
```

### HuggingFace Spaces

The app is already deployed on HuggingFace Spaces. Fork the repo and connect your own Space, or use the [live demo](https://huggingface.co/spaces/BitByBit-B3/pattern-recognition-poc) directly.

## Project Structure

```
pattern-recognisition-poc/
├── app.py                          # Main Streamlit app
├── processors/
│   ├── mediapipe_processor.py      # MediaPipe pipeline
│   └── gemini_vision_processor.py  # Gemini Vision pipeline
└── utils/
    ├── gemini_client.py            # Gemini API client
    ├── video_utils.py              # Video processing utilities
    └── visualization.py            # Visualisation helpers
```

## Current Limitations

- Object detection uses simulated placeholder data (POC stage)
- Processing speed depends on video length and resolution
- Gemini API rate limits and token limits apply

## Development

```bash
uv sync --extra dev     # Install dev dependencies
uv run black .          # Format
uv run ruff check .     # Lint
uv run mypy .           # Type check
```
