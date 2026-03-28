import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "index",
    "getting-started",
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations/web-sdk",
        "integrations/cctv-cli",
        "integrations/social-webhook",
        "integrations/mcp-server",
        "integrations/a2a-protocol",
      ],
    },
    {
      type: "category",
      label: "Source & Packages",
      items: [
        "open-source",
        "ui-kit",
        "rogue-store",
        "website-hook-sdk",
      ],
    },
    {
      type: "category",
      label: "Templates",
      items: [
        "npm-sdk-template",
        "cloudflare-opennext-nextjs-template",
        "cloudflare-workers-containers-hono-template",
        "cloudflare-workers-containers-python-template",
      ],
    },
    "blog",
  ],
};

export default sidebars;
