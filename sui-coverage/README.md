# sui-coverage

Analyze Sui Move test coverage, identify untested code, write missing tests, and perform security audits.

**Part of the [Sui Agent Skills](https://github.com/EasonC13-agent/sui-skills) suite.**

## Description

This skill gives your AI agent the ability to analyze test coverage for Sui Move smart contracts, identify untested functions and branches, automatically write missing tests, and perform security analysis. It includes Python tools for parsing coverage output and generating detailed reports.

## Features

- Run test coverage analysis with `sui move test --coverage`
- Source-level coverage analysis with `analyze_source.py`
- LCOV statistics with `analyze.py`
- Low-level bytecode coverage parsing with `parse_bytecode.py`
- Automatic identification of uncalled functions, uncovered branches, and untested assertion paths
- Security analysis: access control, integer overflow, state manipulation, economic exploits, DoS
- Markdown and JSON report generation

## Prerequisites

- **Sui CLI**: Install via `brew install sui` or see [official docs](https://docs.sui.io/guides/developer/getting-started/sui-install)
- **Python 3**: For running the analysis tools

## Installation

### Via ClawHub

```bash
clawhub install sui-coverage
```

### Manual

Clone the repo and copy the `sui-coverage/` folder to your OpenClaw workspace's `skills/` directory:

```bash
git clone https://github.com/EasonC13-agent/sui-skills.git
cp -r sui-skills/sui-coverage <your-workspace>/skills/
```

## Usage Examples

### Full Coverage Workflow

```bash
# 1. Run tests with coverage
cd /path/to/move/package
sui move test --coverage --trace

# 2. Analyze coverage for a module
python3 <skill-dir>/analyze_source.py -m my_module -o coverage.md

# 3. Review the report
cat coverage.md

# 4. Write missing tests, then re-run to verify improvement
sui move test --coverage --trace
python3 <skill-dir>/analyze_source.py -m my_module
```

### LCOV Analysis

```bash
sui move coverage lcov
python3 <skill-dir>/analyze.py lcov.info -f "<package>" -s sources/ --issues-only
```

### Security Analysis

While writing tests, the agent actively checks for:
- Access control issues
- Integer overflow/underflow
- State manipulation vulnerabilities
- Economic exploit vectors
- Denial of service risks

## Related Skills

| Skill | Description |
|-------|-------------|
| [sui-decompile](../sui-decompile) | Fetch and read on-chain contract source code |
| [sui-move](../sui-move) | Write and deploy Move smart contracts |
| [sui-agent-wallet](../sui-agent-wallet) | Agent-controlled wallet for signing transactions |
| [mcp-server](../mcp-server) | MCP server exposing Sui tools to Claude Code |

## License

MIT
