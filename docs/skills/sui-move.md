# sui-move

<img src="/images/skill-move.png" alt="sui-move" style="max-width: 200px; border-radius: 12px; margin-bottom: 1rem;" />

Sui blockchain and Move smart contract development skill.

## Overview

A comprehensive knowledge base that enables your AI agent to understand, write, and deploy Move smart contracts on the Sui blockchain. Includes reference documentation from the Move Book, Sui docs, and Awesome Move.

## Installation

```bash
clawhub install sui-move
```

Or manually copy the `sui-move/` folder to your workspace's `skills/` directory.

### Setup References

After installation, clone the reference documentation:

```bash
cd <your-workspace>/skills/sui-move
mkdir -p references && cd references
git clone --depth 1 https://github.com/MystenLabs/move-book.git
git clone --depth 1 --filter=blob:none --sparse https://github.com/MystenLabs/sui.git
cd sui && git sparse-checkout set docs
git clone --depth 1 https://github.com/MystenLabs/awesome-move.git
```

## Features

- **Move Language Reference**: Variables, functions, structs, abilities, generics, and more
- **Sui Object Model**: Object storage, UID, ownership, dynamic fields, transfer functions
- **Common Patterns**: Creating objects, shared objects, entry functions, events, witnesses
- **CLI Commands**: Build, test, publish, call functions, query objects
- **Searchable Local Docs**: Use `rg` to quickly find information across all references

## Prerequisites

- Sui CLI: `brew install sui`
- ripgrep (`rg`): For searching references

## Usage Examples

### Search References

```bash
rg -i "shared_object" references/move-book/book/ --type md
rg -i "transfer" references/sui/docs/ --type md
```

### Common CLI Commands

```bash
sui move new my_project         # Create new project
sui move build                  # Build
sui move test                   # Run tests
sui client publish --gas-budget 100000000  # Publish
sui client call --package <PKG> --module <MOD> --function <FN> --args <ARGS>
```

### Key Concepts

**Abilities**: `copy`, `drop`, `store`, `key`

```move
public struct MyStruct has key, store {
    id: UID,
    value: u64
}
```

**Create and Transfer**:

```move
public fun create(ctx: &mut TxContext) {
    let obj = MyObject {
        id: object::new(ctx),
        value: 0
    };
    transfer::transfer(obj, tx_context::sender(ctx));
}
```

**Shared Object**:

```move
public fun create_shared(ctx: &mut TxContext) {
    let obj = SharedObject {
        id: object::new(ctx),
        counter: 0
    };
    transfer::share_object(obj);
}
```

## Reference Structure

| Directory | Content |
|-----------|---------|
| `move-book/book/your-first-move/` | Hello World, Hello Sui tutorials |
| `move-book/book/move-basics/` | Variables, functions, structs, abilities |
| `move-book/book/storage/` | Object storage, UID, transfer functions |
| `move-book/book/object/` | Object model, ownership, dynamic fields |
| `move-book/book/programmability/` | Events, witness, publisher, display |
| `move-book/book/move-advanced/` | BCS, PTB, cryptography |
