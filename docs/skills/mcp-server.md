# mcp-server

MCP server that exposes Sui blockchain tools to Claude Code and other MCP-compatible clients.

## Overview

A stdio-based Model Context Protocol server providing Sui blockchain tools. It wraps the Sui CLI and the sui-agent-wallet REST API into MCP tools that Claude Code (or any MCP client) can call directly.

## Installation

```bash
clawhub install mcp-server
```

Or manually:

```bash
cd <your-workspace>/skills/mcp-server
npm install
```

## Features

- Wallet operations: address, balance, accounts, pending transactions
- Transaction approval and rejection
- Network switching
- Sign and execute unsigned transactions
- Run arbitrary Sui CLI commands
- Build and publish Move packages
- Test coverage analysis
- On-chain object queries
- Contract decompilation links

## Prerequisites

- Node.js v18+
- Sui CLI
- sui-agent-wallet server running on `localhost:3847` (for wallet tools)

## Usage

### Start the Server

```bash
npm start
# or
npx tsx index.ts
```

### Configure in Claude Code

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

## API Reference

| Tool | Description |
|------|-------------|
| `sui_wallet_address` | Get current wallet address |
| `sui_wallet_balance` | Get wallet balance |
| `sui_wallet_accounts` | List all accounts |
| `sui_wallet_pending` | Get pending transactions |
| `sui_wallet_approve` | Approve a pending transaction |
| `sui_wallet_reject` | Reject a pending transaction |
| `sui_wallet_switch_network` | Switch network (mainnet, testnet, devnet, localnet) |
| `sui_wallet_sign_execute` | Sign and execute a base64 transaction |
| `sui_cli` | Run any Sui CLI command |
| `sui_move_test_coverage` | Run tests with coverage for a Move package |
| `sui_move_build` | Build a Move package |
| `sui_move_publish_unsigned` | Generate unsigned publish transaction |
| `sui_object` | Query an on-chain object by ID |
| `sui_decompile` | Get Suivision URL for a package |
