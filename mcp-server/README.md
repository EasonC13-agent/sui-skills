# mcp-server

MCP (Model Context Protocol) server that exposes Sui blockchain tools to Claude Code and other MCP-compatible clients.

**Part of the [Sui Agent Skills](https://github.com/EasonC13-agent/sui-skills) suite.**

## Description

A stdio-based MCP server that provides Sui blockchain tools, including wallet management, Move contract building/testing/publishing, coverage analysis, object queries, and contract decompilation. It integrates with the sui-agent-wallet server for transaction signing.

## Features

- Wallet operations: get address, balance, accounts, pending transactions
- Transaction approval and rejection
- Network switching (mainnet, testnet, devnet, localnet)
- Sign and execute unsigned transactions
- Run arbitrary Sui CLI commands
- Build and publish Move packages
- Run tests with coverage analysis
- Query on-chain objects
- Decompile package source (links to Suivision)

## Prerequisites

- **Node.js** (v18+) with `npx` available
- **Sui CLI**: Install via `brew install sui` or see [official docs](https://docs.sui.io/guides/developer/getting-started/sui-install)
- **sui-agent-wallet** server running on `localhost:3847` (for wallet-related tools)

## Installation

### Via ClawHub

```bash
clawhub install mcp-server
```

### Manual

Clone the repo and install dependencies:

```bash
git clone https://github.com/EasonC13-agent/sui-skills.git
cd sui-skills/mcp-server
npm install
```

## Usage

### Start the Server

```bash
npm start
# or
npx tsx index.ts
```

The server communicates via stdio using the Model Context Protocol.

### Configure in Claude Code

Add to your Claude Code MCP config:

```json
{
  "mcpServers": {
    "sui-tools": {
      "command": "npx",
      "args": ["tsx", "/path/to/mcp-server/index.ts"]
    }
  }
}
```

### Available Tools

| Tool | Description |
|------|-------------|
| `sui_wallet_address` | Get current wallet address |
| `sui_wallet_balance` | Get wallet balance |
| `sui_wallet_accounts` | List all accounts |
| `sui_wallet_pending` | Get pending transactions |
| `sui_wallet_approve` | Approve a pending transaction |
| `sui_wallet_reject` | Reject a pending transaction |
| `sui_wallet_switch_network` | Switch network |
| `sui_wallet_sign_execute` | Sign and execute a transaction |
| `sui_cli` | Run any Sui CLI command |
| `sui_move_test_coverage` | Run tests with coverage |
| `sui_move_build` | Build a Move package |
| `sui_move_publish_unsigned` | Generate unsigned publish transaction |
| `sui_object` | Query an on-chain object |
| `sui_decompile` | Get decompilation URL for a package |

## Related Skills

| Skill | Description |
|-------|-------------|
| [sui-decompile](../sui-decompile) | Fetch and read on-chain contract source code |
| [sui-move](../sui-move) | Write and deploy Move smart contracts |
| [sui-coverage](../sui-coverage) | Analyze test coverage with security analysis |
| [sui-agent-wallet](../sui-agent-wallet) | Agent-controlled wallet for signing transactions |

## License

MIT
