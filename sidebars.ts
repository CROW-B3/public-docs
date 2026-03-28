import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    "open-source",
    {
      type: "category",
      label: "NPM Packages",
      items: ["ui-kit", "website-hook-sdk"],
    },
    {
      type: "category",
      label: "Developer Tools",
      items: ["cctv-cli", "local-dev", "npm-sdk-template"],
    },
    {
      type: "category",
      label: "AI & Integrations",
      items: ["mcp-service", "a2a-service", "pattern-recognition-poc"],
    },
    {
      type: "category",
      label: "Cloudflare Templates",
      items: [
        "cloudflare-opennext-nextjs-template",
        "cloudflare-workers-containers-hono-template",
        "cloudflare-workers-containers-python-template",
        "cloudflare-workers-containers-go-template",
      ],
    },
    {
      type: "category",
      label: "Demo & Blog",
      items: ["rogue-store", "blog"],
    },
  ],
};

export default sidebars;
