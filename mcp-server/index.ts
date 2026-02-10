#!/usr/bin/env npx tsx
/**
 * Sui MCP Server
 * Provides Sui blockchain tools for Claude Code via Model Context Protocol
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const server = new McpServer({
  name: "sui-tools",
  version: "1.0.0",
});

// Helper to run shell commands
async function runCommand(cmd: string, cwd?: string): Promise<string> {
  try {
    const { stdout, stderr } = await execAsync(cmd, { 
      cwd,
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer
    });
    return stdout + (stderr ? `\n[stderr]: ${stderr}` : '');
  } catch (error: any) {
    return `Error: ${error.message}\n${error.stdout || ''}\n${error.stderr || ''}`;
  }
}

// Tool: Get wallet address from Agent Wallet
server.tool(
  "sui_wallet_address",
  "Get the current Sui Agent Wallet address",
  {},
  async () => {
    const result = await runCommand("curl -s http://localhost:3847/address");
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Get wallet balance
server.tool(
  "sui_wallet_balance",
  "Get the balance of the current Sui Agent Wallet",
  {},
  async () => {
    const result = await runCommand("curl -s http://localhost:3847/balance");
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: List all accounts
server.tool(
  "sui_wallet_accounts",
  "List all accounts in the Sui Agent Wallet",
  {},
  async () => {
    const result = await runCommand("curl -s http://localhost:3847/accounts");
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Get pending transactions
server.tool(
  "sui_wallet_pending",
  "Get pending transactions waiting for approval",
  {},
  async () => {
    const result = await runCommand("curl -s http://localhost:3847/pending");
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Approve a transaction
server.tool(
  "sui_wallet_approve",
  "Approve a pending transaction",
  { requestId: z.string().describe("The request ID to approve") },
  async ({ requestId }) => {
    const result = await runCommand(`curl -s -X POST http://localhost:3847/approve/${requestId}`);
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Reject a transaction
server.tool(
  "sui_wallet_reject",
  "Reject a pending transaction",
  { requestId: z.string().describe("The request ID to reject") },
  async ({ requestId }) => {
    const result = await runCommand(`curl -s -X POST http://localhost:3847/reject/${requestId}`);
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Switch network
server.tool(
  "sui_wallet_switch_network",
  "Switch the wallet network (mainnet, testnet, devnet, localnet)",
  { network: z.enum(["mainnet", "testnet", "devnet", "localnet"]).describe("Network to switch to") },
  async ({ network }) => {
    const result = await runCommand(
      `curl -s -X POST http://localhost:3847/network -H "Content-Type: application/json" -d '{"network": "${network}"}'`
    );
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Sign and execute transaction
server.tool(
  "sui_wallet_sign_execute",
  "Sign and execute an unsigned transaction (base64 encoded)",
  { txBytes: z.string().describe("Base64 encoded unsigned transaction bytes") },
  async ({ txBytes }) => {
    const result = await runCommand(
      `curl -s -X POST http://localhost:3847/sign-and-execute -H "Content-Type: application/json" -d '{"txBytes": "${txBytes}"}'`
    );
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Run Sui CLI command
server.tool(
  "sui_cli",
  "Run a Sui CLI command",
  { 
    args: z.string().describe("Arguments to pass to sui CLI (e.g., 'client gas', 'move build')"),
    cwd: z.string().optional().describe("Working directory for the command")
  },
  async ({ args, cwd }) => {
    const result = await runCommand(`sui ${args}`, cwd);
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Run Move tests with coverage
server.tool(
  "sui_move_test_coverage",
  "Run Move tests with coverage analysis",
  { 
    packagePath: z.string().describe("Path to the Move package"),
    module: z.string().optional().describe("Specific module to analyze")
  },
  async ({ packagePath, module }) => {
    let result = await runCommand(`sui move test --coverage --trace`, packagePath);
    if (module) {
      result += "\n\n--- Coverage Analysis ---\n";
      result += await runCommand(`sui move coverage summary --module ${module}`, packagePath);
    }
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Build Move package
server.tool(
  "sui_move_build",
  "Build a Move package",
  { packagePath: z.string().describe("Path to the Move package") },
  async ({ packagePath }) => {
    const result = await runCommand(`sui move build`, packagePath);
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Publish Move package (unsigned)
server.tool(
  "sui_move_publish_unsigned",
  "Generate unsigned transaction for publishing a Move package",
  { 
    packagePath: z.string().describe("Path to the Move package"),
    gasBudget: z.number().default(100000000).describe("Gas budget in MIST")
  },
  async ({ packagePath, gasBudget }) => {
    // Get agent wallet address
    const addrResult = await runCommand("curl -s http://localhost:3847/address");
    let address: string;
    try {
      address = JSON.parse(addrResult).address;
    } catch {
      return { content: [{ type: "text", text: `Failed to get wallet address: ${addrResult}` }] };
    }
    
    const result = await runCommand(
      `sui client publish --serialize-unsigned-transaction --sender ${address} --gas-budget ${gasBudget}`,
      packagePath
    );
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Get object info
server.tool(
  "sui_object",
  "Get information about a Sui object",
  { objectId: z.string().describe("The object ID to query") },
  async ({ objectId }) => {
    const result = await runCommand(`sui client object ${objectId} --json`);
    return { content: [{ type: "text", text: result }] };
  }
);

// Tool: Fetch contract source from Suivision
server.tool(
  "sui_decompile",
  "Fetch decompiled source code for a Sui package from Suivision",
  { packageId: z.string().describe("The package ID to decompile") },
  async ({ packageId }) => {
    const url = `https://suivision.xyz/package/${packageId}?tab=Code`;
    return { 
      content: [{ 
        type: "text", 
        text: `To fetch source code, open in browser:\n${url}\n\nOr use browser automation to scrape the code.` 
      }] 
    };
  }
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Sui MCP Server running on stdio");
}

main().catch(console.error);
