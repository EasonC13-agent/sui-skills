# sui-coverage

Analyze Sui Move test coverage, identify untested code, and perform security audits.

## Overview

This skill enables your AI agent to analyze test coverage for Move smart contracts, identify untested functions and branches, automatically write missing tests, and perform security analysis. It includes Python tools for parsing coverage output and generating reports.

## Installation

```bash
clawhub install sui-coverage
```

Or manually copy the `sui-coverage/` folder to your workspace's `skills/` directory.

## Features

- Source-level coverage analysis with `analyze_source.py`
- LCOV statistics with `analyze.py`
- Bytecode coverage parsing with `parse_bytecode.py`
- Identifies uncalled functions, uncovered branches, and untested assertion failure paths
- Security analysis: access control, overflow/underflow, state manipulation, economic exploits, DoS
- Markdown and JSON report output

## Prerequisites

- Sui CLI: `brew install sui`
- Python 3

## Usage Examples

### Full Coverage Workflow

```bash
cd /path/to/move/package

# Run tests with coverage
sui move test --coverage --trace

# Analyze coverage
python3 <skill-dir>/analyze_source.py -m my_module -o coverage.md

# Review the report
cat coverage.md
```

### LCOV Analysis

```bash
sui move coverage lcov
python3 <skill-dir>/analyze.py lcov.info -f "<package>" -s sources/ --issues-only
```

### Writing Missing Tests

For uncalled functions:

```move
#[test]
fun test_my_function() {
    let mut ctx = tx_context::dummy();
    my_function(&mut ctx);
}
```

For assertion failure paths:

```move
#[test]
#[expected_failure(abort_code = EInsufficientBalance)]
fun test_withdraw_insufficient() {
    let mut balance = 50;
    withdraw(&mut balance, 100);
}
```

## API Reference

### analyze_source.py

```bash
python3 analyze_source.py --module <name> [options]

Options:
  -m, --module    Module name (required)
  -p, --path      Package path (default: .)
  -o, --output    Output file
  --json          JSON output
  --markdown      Markdown to stdout
```

### analyze.py

```bash
python3 analyze.py lcov.info [options]

Options:
  -f, --filter       Filter by path pattern
  -s, --source-dir   Source directory for context
  -i, --issues-only  Only show files with issues
  -j, --json         JSON output
```

### parse_bytecode.py

```bash
sui move coverage bytecode --module <name> | python3 parse_bytecode.py
```

## Security Analysis

The skill checks for these vulnerability categories during testing:

1. **Access Control**: Missing owner/admin checks on critical functions
2. **Integer Overflow/Underflow**: Unchecked arithmetic at boundary values
3. **State Manipulation**: Inconsistent state from partial failures
4. **Economic Exploits**: Rounding errors, flash loan vectors, missing slippage protection
5. **Denial of Service**: Unbounded loops, unlimited vector growth
