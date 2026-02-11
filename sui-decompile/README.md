# sui-decompile

Fetch on-chain Sui Move contract source code and let your agent explain how smart contracts work.

**Part of the [Sui Agent Skills](https://github.com/EasonC13-agent/sui-skills) suite.**

## Description

This skill enables your AI agent to fetch decompiled or verified source code for any on-chain Sui Move package. It uses block explorers (Suivision, Suiscan) via browser automation to scrape contract source code, then lets the agent analyze and explain how the contracts work.

## Features

- Fetch verified source code from Suivision (preferred, may have official verified source)
- Fetch decompiled code from Suiscan (alternative, uses Revela decompiler)
- Support for multi-module packages (e.g., DeepBook with multiple modules)
- Browser automation workflows for both explorers
- Server/headless setup support via Puppeteer + xvfb

## Prerequisites

- A browser automation setup (OpenClaw browser profile or Puppeteer)
- For headless servers: `xvfb` (virtual framebuffer) to avoid headless detection

## Installation

### Via ClawHub

```bash
clawhub install sui-decompile
```

### Manual

Clone the repo and copy the `sui-decompile/` folder to your OpenClaw workspace's `skills/` directory:

```bash
git clone https://github.com/EasonC13-agent/sui-skills.git
cp -r sui-skills/sui-decompile <your-workspace>/skills/
```

## Usage Examples

### Fetch Contract Source (Browser Workflow)

1. Open the package on Suivision:
   ```
   https://suivision.xyz/package/{package_id}?tab=Code
   ```

2. Click module tabs if the package has multiple modules.

3. Extract the code using the provided JavaScript snippet.

### Example Packages

| Package | URL |
|---------|-----|
| Sui Framework | `suivision.xyz/package/0x2?tab=Code` |
| DeepBook | `suivision.xyz/package/0xdee9?tab=Code` |

### Headless Server Setup

```bash
sudo apt-get install xvfb
xvfb-run --auto-servernum node scraper.js
```

## Related Skills

| Skill | Description |
|-------|-------------|
| [sui-move](../sui-move) | Write and deploy Move smart contracts |
| [sui-coverage](../sui-coverage) | Analyze test coverage with security analysis |
| [sui-agent-wallet](../sui-agent-wallet) | Agent-controlled wallet for signing transactions |
| [mcp-server](../mcp-server) | MCP server exposing Sui tools to Claude Code |

## License

MIT
