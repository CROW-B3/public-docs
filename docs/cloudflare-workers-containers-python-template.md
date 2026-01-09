# Cloudflare Workers Containers Python Template

A template for creating Cloudflare Workers applications using Python and Cloudflare Workers Containers.

## Overview

This template enables you to build and deploy Python applications on Cloudflare's edge network using Workers Containers. It combines the flexibility of Python with the performance and global distribution of Cloudflare Workers.

**Key Features:**
- 🐍 Python runtime support on Cloudflare Workers
- 🐳 Containerized Python applications at the edge
- 🌍 Global edge deployment with low latency
- ⚡ Serverless scaling and execution
- 🔧 Easy to configure and deploy
- 🚀 Fast cold starts with container optimization
- 🔷 Hybrid TypeScript/JavaScript and Python setup
- 🤖 Automated CI/CD with GitHub Actions
- 🌐 Live deployment example available

## Getting Started

### Prerequisites

- Python 3.8 or later
- Docker (for building containers)
- Cloudflare account
- Wrangler CLI
- Bun (package manager for build tooling)

### Installation

Clone the template:

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-python-template.git
cd cloudflare-workers-containers-python-template
```

### Setup

1. Install Python dependencies:

```bash
pip install -r requirements.txt
```

2. Configure your Cloudflare credentials in `wrangler.jsonc`

### Development

The template is designed to work with Cloudflare Workers Containers, allowing you to:

1. Develop your Python application locally
2. Build a Docker container for your application
3. Deploy the container to Cloudflare's edge network

### Local Development

Test your Python application locally:

```bash
python app.py
```

### Deployment

Deploy your Python application to Cloudflare Workers:

```bash
wrangler deploy
```

This will:
1. Build your Python container
2. Push it to Cloudflare
3. Deploy it globally to the edge network

## Use Cases

### API Backends

Build fast, globally distributed API backends with Python:
- REST APIs
- GraphQL endpoints
- Microservices

### Data Processing

Process data at the edge with Python:
- Data transformation
- Image processing
- Text analysis
- Machine learning inference

### Web Applications

Deploy full Python web applications:
- Flask applications
- FastAPI services
- Django projects (with appropriate optimization)

## Project Structure

```
cloudflare-workers-containers-python-template/
├── .github/
│   └── workflows/      # CI/CD automation pipelines
├── .vscode/            # VS Code configuration
├── container_src/      # Python application source code
├── src/                # TypeScript/JavaScript worker code
├── Dockerfile          # Container build configuration
├── wrangler.jsonc      # Cloudflare Workers configuration
├── tsconfig.json       # TypeScript settings
├── package.json        # Node dependencies and scripts
├── worker-configuration.d.ts # TypeScript type definitions
├── .dockerignore       # Docker build exclusions
└── bun.lock            # Bun dependency lockfile
```

## Architecture

### Workers Containers

Workers Containers allow you to run Python code in a containerized environment at the edge:

1. **Container Build**: Your Python app is packaged in a Docker container
2. **Edge Distribution**: The container is distributed to Cloudflare's global network
3. **Request Handling**: Incoming requests are routed to the nearest edge location
4. **Python Execution**: Your Python code executes in the container at the edge

### Benefits

- **Low Latency**: Code runs close to users worldwide
- **Scalability**: Automatic scaling based on demand
- **Cost-Effective**: Pay only for execution time
- **Flexibility**: Use any Python libraries and frameworks

## Configuration

### Wrangler Configuration

Configure your worker in `wrangler.jsonc`:

```jsonc
{
  "name": "python-worker",
  "compatibility_date": "2024-01-01",
  "build": {
    "command": "docker build -t python-worker ."
  }
}
```

### Docker Configuration

Create a `Dockerfile` for your Python application:

```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

## Best Practices

### Performance Optimization

1. **Minimize Container Size**: Use slim Python images and only essential dependencies
2. **Optimize Cold Starts**: Keep initialization code minimal
3. **Cache Dependencies**: Use Docker layer caching effectively
4. **Async Operations**: Use async/await for I/O operations

### Security

1. **Environment Variables**: Store secrets in Cloudflare Worker environment variables
2. **Input Validation**: Validate all incoming data
3. **Dependencies**: Keep Python packages up to date
4. **Container Scanning**: Regularly scan containers for vulnerabilities

## Limitations

Be aware of Cloudflare Workers Containers limitations:

- **CPU Time**: Limited execution time per request
- **Memory**: Memory constraints for containers
- **File System**: Ephemeral file system
- **Cold Starts**: Initial container startup time

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/cloudflare-workers-containers-python-template)
- **Live Demo**: [cloudflare-workers-containers-python-template.bitbybit-b3.workers.dev](https://cloudflare-workers-containers-python-template.bitbybit-b3.workers.dev)
- **Cloudflare Workers Containers Docs**: [developers.cloudflare.com](https://developers.cloudflare.com/workers/)
- **Python Documentation**: [python.org](https://www.python.org/)
- **Wrangler CLI**: [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler/)
- **License**: MIT

## Support

For issues and questions:
- Check the [GitHub Issues](https://github.com/CROW-B3/cloudflare-workers-containers-python-template/issues)
- Review Cloudflare Workers documentation
- Join the CROW-B3 community

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
