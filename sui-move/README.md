# sui-move

Sui blockchain and Move smart contract development skill for [OpenClaw](https://github.com/openclaw/openclaw) agents.

**Part of the [Sui Agent Skills](https://github.com/EasonC13-agent/sui-skills) suite.**

## Description

A comprehensive knowledge base that enables your AI agent to understand, write, and deploy Move smart contracts on the Sui blockchain. It includes reference documentation from the Move Book, Sui docs, and Awesome Move, plus common patterns and CLI commands.

## Features

- Comprehensive Move language reference (variables, structs, abilities, generics, etc.)
- Sui object model and storage patterns
- CLI command reference for building, testing, and publishing contracts
- Searchable local documentation via `rg`
- Common patterns: creating objects, shared objects, entry functions
- Topics index for quick lookup

## Prerequisites

- **Sui CLI**: Install via `brew install sui` (macOS) or see [official docs](https://docs.sui.io/guides/developer/getting-started/sui-install)
- **ripgrep** (`rg`): For searching references

## Installation

### Via ClawHub

```bash
clawhub install sui-move
```

### Manual

Clone the repo and copy the `sui-move/` folder to your OpenClaw workspace's `skills/` directory:

```bash
git clone https://github.com/EasonC13-agent/sui-skills.git
cp -r sui-skills/sui-move <your-workspace>/skills/
```

Then set up the reference docs:

```bash
cd <your-workspace>/skills/sui-move
mkdir -p references && cd references
git clone --depth 1 https://github.com/MystenLabs/move-book.git
git clone --depth 1 --filter=blob:none --sparse https://github.com/MystenLabs/sui.git
cd sui && git sparse-checkout set docs
```

## Usage Examples

Once installed, your agent can:

- **Answer Move questions** by searching the local reference docs
- **Write smart contracts** using common patterns and best practices
- **Build and test** using `sui move build` and `sui move test`
- **Publish contracts** with `sui client publish --gas-budget 100000000`

### Quick Search

```bash
# Search Move Book for a topic
rg -i "keyword" references/move-book/book/ --type md

# Search Sui docs
rg -i "keyword" references/sui/docs/ --type md
```

### Common CLI Commands

```bash
sui move new my_project    # Create new project
sui move build             # Build
sui move test              # Run tests
sui client publish --gas-budget 100000000  # Publish
```

## Related Skills

| Skill | Description |
|-------|-------------|
| [sui-decompile](../sui-decompile) | Fetch and read on-chain contract source code |
| [sui-coverage](../sui-coverage) | Analyze test coverage with security analysis |
| [sui-agent-wallet](../sui-agent-wallet) | Agent-controlled wallet for signing transactions |
| [mcp-server](../mcp-server) | MCP server exposing Sui tools to Claude Code |

## License

MIT
