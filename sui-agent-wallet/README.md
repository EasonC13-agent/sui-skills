# sui-agent-wallet

Give your AI agent its own Sui wallet to interact with DApps and sign transactions.

**Part of the [Sui Agent Skills](https://github.com/EasonC13-agent/sui-skills) suite.**

## Description

This skill provides your AI agent with a fully functional Sui wallet. It includes a local server for key management and transaction signing, plus a Chrome extension that implements the Sui Wallet Standard. Your agent can connect to any Sui DApp, review transactions, and approve or reject signing requests.

## Features

- Automatic wallet creation with seed phrase stored securely in macOS Keychain
- Multi-account support via BIP44 derivation (`m/44'/784'/{index}'/0'/0'`)
- Network switching (mainnet, testnet, devnet, localnet)
- Transaction review, approval, and rejection via REST API
- Chrome extension implementing Sui Wallet Standard
- Direct CLI integration for signing unsigned transactions
- Built-in test DApp (Counter) for development

## Prerequisites

- **Bun**: For running the server (`bun install`, `bun run`)
- **Chrome/Chromium**: For the wallet extension
- **macOS**: Seed phrase is stored in macOS Keychain (other platforms need adaptation)

## Installation

### Via ClawHub

```bash
clawhub install sui-agent-wallet
```

### Manual

Clone the repo and copy the `sui-agent-wallet/` folder to your OpenClaw workspace's `skills/` directory:

```bash
git clone https://github.com/EasonC13-agent/sui-skills.git
cp -r sui-skills/sui-agent-wallet <your-workspace>/skills/
```

Then install and start:

```bash
cd <your-workspace>/skills/sui-agent-wallet/server
bun install
bun run index.ts
```

Load the Chrome extension:
1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `extension/` folder

## Usage Examples

### Basic Wallet Operations

```bash
# Get current address
curl http://localhost:3847/address

# Get balance
curl http://localhost:3847/balance

# Switch network
curl -X POST http://localhost:3847/network \
  -H "Content-Type: application/json" \
  -d '{"network": "testnet"}'
```

### Transaction Signing

```bash
# View pending transactions
curl http://localhost:3847/pending

# Approve a transaction
curl -X POST http://localhost:3847/approve/<request-id>

# Reject a transaction
curl -X POST http://localhost:3847/reject/<request-id>
```

### CLI Integration

```bash
# Generate unsigned transaction
AGENT_ADDR=$(curl -s localhost:3847/address | jq -r .address)
TX_BYTES=$(sui client publish --serialize-unsigned-transaction \
  --sender $AGENT_ADDR --gas-budget 100000000 | tail -1)

# Sign and execute
curl -X POST http://localhost:3847/sign-and-execute \
  -H "Content-Type: application/json" \
  -d "{\"txBytes\": \"$TX_BYTES\"}"
```

### Get Test Coins

- Testnet faucet: https://faucet.testnet.sui.io/
- Devnet faucet: https://faucet.devnet.sui.io/
- CLI: `sui client faucet --address <YOUR_ADDRESS>`

## Related Skills

| Skill | Description |
|-------|-------------|
| [sui-decompile](../sui-decompile) | Fetch and read on-chain contract source code |
| [sui-move](../sui-move) | Write and deploy Move smart contracts |
| [sui-coverage](../sui-coverage) | Analyze test coverage with security analysis |
| [mcp-server](../mcp-server) | MCP server exposing Sui tools to Claude Code |

## License

MIT
