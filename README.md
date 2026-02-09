# Sui Agent Skills

A collection of [OpenClaw](https://github.com/openclaw/openclaw) skills for Sui blockchain development. Let your AI agent understand, write, test, and deploy Move smart contracts.

## Skills

| Skill | Description | ClawHub |
|-------|-------------|---------|
| [sui-decompile](./sui-decompile) | Fetch on-chain contract source code and let your agent explain how smart contracts work | [Install](https://clawhub.com/skills/sui-decompile) |
| [sui-move](./sui-move) | Write and deploy Move smart contracts with comprehensive reference docs | [Install](https://clawhub.com/skills/sui-move) |
| [sui-coverage](./sui-coverage) | Analyze test coverage, find untested code, and perform security audits | [Install](https://clawhub.com/skills/sui-coverage) |
| [sui-agent-wallet](./sui-agent-wallet) | Agent-controlled wallet for signing transactions and interacting with DApps | [Install](https://clawhub.com/skills/sui-agent-wallet) |

## Installation

```bash
# Install via ClawHub CLI
npm i -g clawhub

clawhub install sui-decompile
clawhub install sui-move
clawhub install sui-coverage
clawhub install sui-agent-wallet
```

Or copy skill folders directly to your OpenClaw workspace's `skills/` directory.

## Workflow

These four skills work together for a complete Sui development workflow:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌──────────────────┐
│  sui-decompile  │ ──▶ │    sui-move     │ ──▶ │  sui-coverage   │ ──▶ │ sui-agent-wallet │
│                 │     │                 │     │                 │     │                  │
│ Study existing  │     │ Write your own  │     │ Test & audit    │     │ Build and test   │
│ contracts       │     │ contracts       │     │ your code       │     │ DApps frontend   │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └──────────────────┘
```

### Example: Build a DeFi Protocol

1. **Decompile**: "Show me how DeepBook's order matching works"
2. **Learn**: Agent fetches `0xdee9` source and explains the CLOB logic
3. **Write**: "Help me write a simple AMM based on what we learned"
4. **Test**: "Analyze test coverage and write missing tests"
5. **Audit**: "Check for security vulnerabilities"
6. **Deploy**: Agent uses its wallet to publish the contract to testnet
7. **Interact**: Build a frontend and test with the agent wallet

## Requirements

- [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install)
- Python 3 (for coverage tools)
- Puppeteer or browser automation (for decompilation, works headless with xvfb)
- Bun (for agent wallet server)
- Chrome/Chromium (for wallet extension)

## Faucets (Test Networks)

Get free SUI tokens for development:

| Network | Faucet URL | Discord Channel |
|---------|------------|-----------------|
| Testnet | <https://faucet.testnet.sui.io/> | `#testnet-faucet` |
| Devnet | <https://faucet.devnet.sui.io/> | `#devnet-faucet` |

Or via CLI: `sui client faucet --address <YOUR_ADDRESS>`

Join [Sui Discord](https://discord.gg/sui) for faucet channels.

## License

MIT
