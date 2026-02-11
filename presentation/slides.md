---
theme: default
background: https://skills.suimate.ai/images/hero.png
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: Sui Agent Skills
---

# Sui Agent Skills

AI-Powered Sui Blockchain Development

<div class="abs-br m-6 flex gap-2">
  <a href="https://skills.suimate.ai" target="_blank" class="text-xl slidev-icon-btn">
    🌐 skills.suimate.ai
  </a>
  <a href="https://github.com/EasonC13-agent/sui-skills" target="_blank" class="text-xl slidev-icon-btn">
    GitHub
  </a>
</div>

---
transition: fade-out
---

# The Problem

Building on Sui is powerful, but the learning curve is steep.

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### For Developers
- 😵 Move language is **unfamiliar** to most devs
- 📚 Scattered docs across Move Book, Sui Docs, examples
- 🧪 Writing comprehensive tests is **tedious**
- 🔍 Understanding existing protocols requires **manual code reading**

</div>
<div>

### Current Workflow
```
1. Read docs for hours          😩
2. Write contract manually      😰
3. Debug cryptic errors         😤
4. Write tests one by one       😴
5. Deploy and pray              🙏
```

</div>
</div>

---
transition: slide-up
---

# The Solution

**Give your AI agent the skills to do it all.**

<div class="grid grid-cols-4 gap-4 mt-8">

<div class="text-center p-4 bg-blue-900 bg-opacity-50 rounded-xl">
  <div class="text-4xl mb-2">🔍</div>
  <h3 class="text-sm font-bold">sui-decompile</h3>
  <p class="text-xs opacity-75 mt-1">Study any on-chain contract</p>
</div>

<div class="text-center p-4 bg-blue-900 bg-opacity-50 rounded-xl">
  <div class="text-4xl mb-2">✍️</div>
  <h3 class="text-sm font-bold">sui-move</h3>
  <p class="text-xs opacity-75 mt-1">Write Move contracts with full reference</p>
</div>

<div class="text-center p-4 bg-blue-900 bg-opacity-50 rounded-xl">
  <div class="text-4xl mb-2">🛡️</div>
  <h3 class="text-sm font-bold">sui-coverage</h3>
  <p class="text-xs opacity-75 mt-1">Auto-test and security audit</p>
</div>

<div class="text-center p-4 bg-blue-900 bg-opacity-50 rounded-xl">
  <div class="text-4xl mb-2">🚀</div>
  <h3 class="text-sm font-bold">sui-agent-wallet</h3>
  <p class="text-xs opacity-75 mt-1">Deploy and interact with DApps</p>
</div>

</div>

<div class="mt-8 text-center">

```
"Show me how DeepBook works" → "Write me an AMM" → "Test it" → "Deploy to testnet"
```

**One conversation. Four skills. Full development cycle.**

</div>

---
layout: image-right
image: https://skills.suimate.ai/images/workflow.png
---

# How It Works

Built on **OpenClaw** (open-source AI agent framework)

<v-clicks>

1. **Install skills** via ClawHub
   ```bash
   clawhub install sui-move
   clawhub install sui-decompile
   clawhub install sui-coverage
   clawhub install sui-agent-wallet
   ```

2. **Talk to your agent** in natural language

3. **Agent uses the right skill** automatically

4. **Full Sui dev workflow** in one conversation

</v-clicks>

---
layout: center
class: text-center
---

# Live Demo

<div class="text-2xl mt-4 opacity-75">
  Watch the agent build a Move contract from scratch
</div>

<!-- Insert demo video here or switch to live demo -->

---

# What We Built

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### Skills (Open Source)
- 🔓 **sui-decompile**: Fetch source from Suivision/Suiscan
- 📖 **sui-move**: Move Book + Sui Docs as agent knowledge
- 🔍 **sui-coverage**: Python-powered coverage analysis
- 💼 **sui-agent-wallet**: Chrome extension + local server
- 🔌 **mcp-server**: Claude Code / MCP integration

### Tech Stack
- OpenClaw (agent framework)
- ClawHub (skill marketplace)
- VitePress (documentation)
- GitHub Actions (CI/CD)

</div>
<div>

### Impact
- ⚡ **10x faster** from idea to deployed contract
- 🧪 **Automated testing** catches bugs humans miss
- 📊 **Coverage analysis** ensures code quality
- 🔐 **Security audit** built into the workflow
- 🌍 **Open source**, anyone can use and contribute

### Links
- 📚 Docs: [skills.suimate.ai](https://skills.suimate.ai)
- 💻 Code: [github.com/EasonC13-agent/sui-skills](https://github.com/EasonC13-agent/sui-skills)
- 📦 Install: `clawhub install sui-move`

</div>
</div>

---
layout: center
class: text-center
---

# Try It Now

<div class="text-3xl font-bold mt-4 text-blue-400">
  skills.suimate.ai
</div>

<div class="mt-8 text-xl">

```bash
npm i -g clawhub
clawhub install sui-move sui-decompile sui-coverage sui-agent-wallet
```

</div>

<div class="mt-8 opacity-75">
  Open source · Built for Sui · Powered by OpenClaw
</div>
