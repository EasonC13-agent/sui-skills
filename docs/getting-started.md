# Getting Started

<img src="/images/slide-skills.png" alt="SuiMate Skills Overview" style="max-width: 100%; border-radius: 12px; margin-bottom: 1.5rem;" />

SuiMate is a collection of [OpenClaw](https://github.com/openclaw/openclaw) skills for Sui blockchain development. These skills enable your AI agent to study, write, test, and deploy Move smart contracts.

## Prerequisites

- [OpenClaw](https://github.com/openclaw/openclaw) installed and configured
- [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install) (`brew install sui` on macOS)
- Python 3 (for coverage tools)
- Bun (for agent wallet server)
- Chrome/Chromium (for wallet extension and contract decompilation)

## Installation

### Via ClawHub

```bash
clawhub install sui-move
clawhub install sui-decompile
clawhub install sui-coverage
clawhub install sui-agent-wallet
clawhub install mcp-server
```

### Manual Installation

Clone the repository and copy the skill folders you need into your OpenClaw workspace:

```bash
git clone https://github.com/EasonC13-agent/sui-skills.git
cp -r sui-skills/<skill-name> <your-workspace>/skills/
```

## Workflow

The five skills work together for a complete Sui development workflow:

<img src="/images/slide-workflow.png" alt="SuiMate Workflow" style="max-width: 100%; margin: 1.5rem auto; display: block; border-radius: 12px;" />

```
sui-decompile --> sui-move --> sui-coverage --> sui-agent-wallet
    Study          Write       Test & Audit      Build DApps
```

1. **sui-decompile**: Study how existing contracts work by fetching on-chain source code
2. **sui-move**: Write your own contracts using the Move language reference and patterns
3. **sui-coverage**: Analyze test coverage, write missing tests, and audit for security issues
4. **sui-agent-wallet**: Deploy contracts and interact with DApps using the agent's own wallet
5. **mcp-server**: Expose all tools to Claude Code via MCP for seamless integration

## Example: Build a DeFi Protocol

1. "Show me how DeepBook's order matching works" (sui-decompile fetches the source)
2. "Help me write a simple AMM based on what we learned" (sui-move writes the contract)
3. "Analyze test coverage and write missing tests" (sui-coverage runs analysis)
4. "Check for security vulnerabilities" (sui-coverage performs audit)
5. Agent uses its wallet to publish the contract to testnet (sui-agent-wallet)

## Test Networks and Faucets

Get free SUI tokens for development:

| Network | Faucet URL |
|---------|------------|
| Testnet | https://faucet.testnet.sui.io/ |
| Devnet | https://faucet.devnet.sui.io/ |

Or via CLI: `sui client faucet --address <YOUR_ADDRESS>`
