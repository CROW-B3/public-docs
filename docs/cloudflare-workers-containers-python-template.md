# Cloudflare Workers Containers Python Template

A template for creating Cloudflare Workers applications using Python and Cloudflare Workers Containers.

## Overview

This template enables you to build and deploy Python applications on Cloudflare's edge network using Workers Containers. It combines the flexibility of Python with the performance and global distribution of Cloudflare Workers.

**Key Features:**
- Python runtime support on Cloudflare Workers
- Containerized Python applications at the edge
- Global edge deployment with low latency
- Serverless scaling and execution
- Easy to configure and deploy
- Fast cold starts with container optimization
- Hybrid TypeScript/JavaScript and Python setup
- Automated CI/CD with GitHub Actions
- Live deployment example available

## Getting Started

### Installation

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-python-template.git
cd cloudflare-workers-containers-python-template
pip install -r requirements.txt
```

Configure your Cloudflare credentials in `wrangler.jsonc`.

### Deployment

```bash
wrangler deploy  # Builds Python container, pushes to Cloudflare, deploys globally
```

## Architecture

Workers Containers allow you to run Python code in a containerized environment at the edge. Your Python app is packaged in a Docker container, distributed to Cloudflare's global network, and executes at the nearest edge location for incoming requests.

## Configuration

Configure your worker in `wrangler.jsonc` and create a `Dockerfile` for your Python application. See the repository for example configurations.

## Best Practices

1. Minimize container size using slim Python images and essential dependencies only
2. Keep initialization code minimal to optimize cold starts
3. Use Docker layer caching effectively
4. Store secrets in Cloudflare Worker environment variables
5. Validate all incoming data
6. Keep Python packages up to date

## Limitations

Be aware of Cloudflare Workers Containers limitations including CPU time per request, memory constraints, ephemeral file system, and initial container startup time.

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
