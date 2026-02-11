---
layout: doc
title: Demo Conversation
---

<script setup>
import { ref } from 'vue'
const lang = ref('zh')
</script>

# Demo: Building a DApp with SuiMate

<div class="chat-container">

<div v-if="lang === 'zh'" class="chat-notice">
📋 這是範例對話，內容經過刪減和編輯以呈現核心開發流程。實際開發對話包含更多技術細節和除錯過程。
</div>
<div v-if="lang === 'en'" class="chat-notice">
📋 This is a sample conversation, edited and condensed to showcase the core development workflow. The actual session included more technical details and debugging.
</div>

<div class="lang-toggle">
  <button @click="lang = 'zh'" :class="{ active: lang === 'zh' }">中文</button>
  <button @click="lang = 'en'" :class="{ active: lang === 'en' }">English</button>
</div>

<div v-if="lang === 'zh'">
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:00</span>
    </div>
    <div class="msg-content"><p>我想要建一個 Payment Tunnel DApp。使用者可以存 USDC 到 escrow，API provider 可以根據使用量 claim 付款。用 Sui Move 寫合約，然後做前端。你能幫我嗎？</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:00</span>
    </div>
    <div class="msg-content"><p>當然！這是一個很好的 use case。我來規劃一下：</p>
<br />
<p>1. <strong>研究現有合約</strong> - 先看看 Sui 上類似的 escrow 模式怎麼實現</p>
<p>2. <strong>寫合約</strong> - Payment Tunnel + Test USDC</p>
<p>3. <strong>測試</strong> - 單元測試 + coverage 分析</p>
<p>4. <strong>部署</strong> - 用我的 agent wallet 部署到 testnet</p>
<p>5. <strong>前端</strong> - 完整的 SaaS 平台 UI</p>
<br />
<p>先從研究開始。</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:02</span>
    </div>
    <div class="msg-content"><p>好，先幫我看這幾個合約做參考：<code class="inline">0xdee9</code>（DeepBook）和 <code class="inline">0x2::coin</code>。我想了解 escrow 和 coin 管理的 pattern。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:05</span>
    </div>
    <div class="msg-content"><p>讓我用 <strong>sui-decompile</strong> 去抓這些合約的原始碼...</p>
<br />
<p><span class="check">✅</span> 分析完成。DeepBook 用了 <code class="inline">Custodian</code> pattern 來管理 escrow funds，<code class="inline">0x2::coin</code> 展示了標準的 coin split/merge 操作。這些 pattern 可以直接應用到 Payment Tunnel 上。</p>
<br />
<p>我建議合約架構：</p>
<p>- <code class="inline">Tunnel</code> object 持有 escrow 的 USDC</p>
<p>- Payer 開 tunnel 時存入資金</p>
<p>- Operator 用 Ed25519 簽名的 receipt 來 claim</p>
<p>- 支援 close 退還剩餘資金</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:10</span>
    </div>
    <div class="msg-content"><p>讚，就按這個架構做。這裡有個參考合約，但你要自己寫一個版本。然後還需要一個 test_usdc 合約讓任何人都能 mint 做測試。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:31</span>
    </div>
    <div class="msg-content"><p>好，我用 <strong>sui-move</strong> 開始寫合約。參考 Move Book 的最新語法和 awesome-move 的範例...</p>
<br />
<p>我 spawn 一個 sub-agent 來處理合約開發和部署，這樣不會 block 主 session。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:45</span>
    </div>
    <div class="msg-content"><p>合約都部署好了！</p>
<br />
<p><strong>Testnet 部署資訊：</strong></p>
<p>- Package ID: <code class="inline">0x0a906dc8...</code></p>
<p>- TestUSDC Treasury Cap</p>
<p>- CreatorConfig object</p>
<br />
<p>兩個合約：</p>
<p>1. <code class="inline">test_usdc</code> - 任何人都能 mint 的測試 USDC</p>
<p>2. <code class="inline">tunnel</code> - Payment Tunnel with escrow + Ed25519 claim</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:12</span>
    </div>
    <div class="msg-content"><p>請，三個都做。你有 sui-agent-wallet 這個 skill 對吧？你自己就能測試整個流程了。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:50</span>
    </div>
    <div class="msg-content"><p>Wallet server 啟動了。Testnet 上有 ~0.5 SUI。</p>
<br />
<p>已完成：</p>
<p>- <span class="check">✅</span> <code class="inline">test_usdc</code> + <code class="inline">tunnel</code> 合約部署到 testnet</p>
<p>- <span class="check">✅</span> CreatorConfig 已建立</p>
<p>- <span class="check">✅</span> 後端新增 Sui SDK 整合（SponsoredTransaction + Gas Station）</p>
<p>- <span class="check">✅</span> Backend operator key 設定完成</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">17:00</span>
    </div>
    <div class="msg-content"><p>繼續做前端，然後記得你有 wallet skill 對吧？你自己就能測試整個流程了。還可以自己打 API 模擬付款，確保流程都流暢後，部署。</p>
<br />
<p>然後幫我確保 UI 漂亮專業，是個專業的 SaaS 平台的樣子。最好還有個 landing page.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">17:05</span>
    </div>
    <div class="msg-content"><p>收到！開了兩個 sub-agent 並行：</p>
<br />
<p>1. <strong>frontend-integration</strong> - Wallet 連接 + Tunnel 管理 + Demo API + 自動化測試</p>
<p>2. <strong>landing-docs</strong> - Landing page + API 文件</p>
<br />
<p>用 <strong>sui-agent-wallet</strong> 直接連錢包測試。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">17:30</span>
    </div>
    <div class="msg-content"><p>Landing page 和 docs 做好了！專業的暗色主題，包含 Hero + How it Works + Features + Pricing section，以及完整的 API 文件。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">18:00</span>
    </div>
    <div class="msg-content"><p>🎉 全流程測試通過！</p>
<br />
<pre><code>
Mint 100 TEST_USDC    ✅
Open Tunnel (deposit)  ✅
Register to backend     ✅
Query Status            ✅
</code></pre>
<br />
<p>用 agent wallet 簽署所有交易，Gas Station 贊助 gas fee。現在 build 前端部署。</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">18:30</span>
    </div>
    <div class="msg-content"><p>合約審計一下，unit test make it 100% coverage</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">18:45</span>
    </div>
    <div class="msg-content"><p>用 <strong>sui-coverage</strong> 跑分析...</p>
<br />
<p>目前 coverage：91.65%</p>
<p>- <code class="inline">test_usdc</code>: 94.59%</p>
<p>- <code class="inline">tunnel</code>: 91.38%</p>
<br />
<p>剩餘未覆蓋的是 <code class="inline">claim()</code> 函數中 Ed25519 verify 的路徑，因為 Move test 裡 tunnel_id 是隨機的，沒辦法預計算簽名。</p>
<br />
<p><strong>Security 審計：</strong></p>
<p>- <span class="check">✅</span> Access control 正確（operator/payer 分離）</p>
<p>- <span class="check">✅</span> Nonce 防重放</p>
<p>- <span class="check">✅</span> 餘額不足檢查</p>
<p>- <span class="check">✅</span> Closing 狀態互斥</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">19:00</span>
    </div>
    <div class="msg-content"><p>你可以指定 ID 然後生成簽名去測試吧？可以用 TS 去生成。請參考 <a href="https://github.com/EasonC13/wip-blackjack-app" target="_blank">https://github.com/EasonC13/wip-blackjack-app</a> 的做法。</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">19:15</span>
    </div>
    <div class="msg-content"><p>參考了 blackjack repo 的做法：</p>
<br />
<p>1. 先跑一次 test 用 <code class="inline">std::debug::print</code> 拿到 deterministic tunnel ID</p>
<p>2. TS 腳本用 tweetnacl 對 <code class="inline">tunnel_id || amount || nonce</code> 簽名</p>
<p>3. 把簽名硬編碼回 Move test 裡</p>
<br />
<p>Tunnel ID: <code class="inline">0x1611edd9...</code></p>
<p>簽名和 public key 都算好了，寫入 test...</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">19:30</span>
    </div>
    <div class="msg-content"><p><strong>100.00% coverage!</strong> 🎉</p>
<br />
<p>全部 35 個 tests 通過，每個函數都 100% 覆蓋。</p>
<br />
<pre><code>
test_usdc: 100.00%
tunnel:    100.00%
Total:     100.00%
</code></pre></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">19:45</span>
    </div>
    <div class="msg-content"><p>好欸！那我要去哪裡測試呢？部署到 platform 了嗎？</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">20:00</span>
    </div>
    <div class="msg-content"><p>已部署到 production！</p>
<br />
<p>👉 <strong><a href="https://platform.3mate.io" target="_blank">https://platform.3mate.io</a></strong></p>
<br />
<p>測試流程：</p>
<p>1. 打開網站，連接 Sui 錢包（切到 testnet）</p>
<p>2. 登入 Google 帳號</p>
<p>3. 到 Dashboard → Mint 100 Test USDC</p>
<p>4. Open Tunnel（存入 USDC）</p>
<p>5. 取得 API Key → 呼叫 API</p>
<p>6. 查看 Usage + Balance</p>
<br />
<p>從概念到部署，全程 AI agent 完成。</p></div>
  </div>
</div>

</div>

<div v-if="lang === 'en'">
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:00</span>
    </div>
    <div class="msg-content"><p>I want to build a Payment Tunnel DApp. Users deposit USDC into an escrow, and the API provider can claim payments based on usage. Write the contracts in Sui Move, then build the frontend. Can you help?</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:00</span>
    </div>
    <div class="msg-content"><p>Of course! Great use case. Here&#x27;s my plan:</p>
<br />
<p>1. <strong>Study existing contracts</strong> - Look at similar escrow patterns on Sui</p>
<p>2. <strong>Write contracts</strong> - Payment Tunnel + Test USDC</p>
<p>3. <strong>Test</strong> - Unit tests + coverage analysis</p>
<p>4. <strong>Deploy</strong> - Use my agent wallet to deploy to testnet</p>
<p>5. <strong>Frontend</strong> - Full SaaS platform UI</p>
<br />
<p>Let&#x27;s start with research.</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:02</span>
    </div>
    <div class="msg-content"><p>Sure. First, study these contracts for reference: <code class="inline">0xdee9</code> (DeepBook) and <code class="inline">0x2::coin</code>. I want to understand escrow and coin management patterns.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:05</span>
    </div>
    <div class="msg-content"><p>Let me fetch the source code using <strong>sui-decompile</strong>...</p>
<br />
<p><span class="check">✅</span> Analysis complete. DeepBook uses a <code class="inline">Custodian</code> pattern for escrow funds, and <code class="inline">0x2::coin</code> shows standard coin split/merge operations. These patterns can be applied to our Payment Tunnel.</p>
<br />
<p>Suggested contract architecture:</p>
<p>- <code class="inline">Tunnel</code> object holds escrowed USDC</p>
<p>- Payer opens tunnel by depositing funds</p>
<p>- Operator claims with Ed25519-signed receipts</p>
<p>- Support closing to refund remaining balance</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:10</span>
    </div>
    <div class="msg-content"><p>Nice, go with that architecture. Here&#x27;s a reference contract, but write your own version. Also need a test_usdc contract that anyone can mint for testing.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:31</span>
    </div>
    <div class="msg-content"><p>OK, writing contracts using <strong>sui-move</strong> skill. Referencing Move Book&#x27;s latest syntax and awesome-move examples...</p>
<br />
<p>I&#x27;ll spawn a sub-agent to handle contract development and deployment so we don&#x27;t block the main session.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:45</span>
    </div>
    <div class="msg-content"><p>Contracts deployed!</p>
<br />
<p><strong>Testnet deployment info:</strong></p>
<p>- Package ID: <code class="inline">0x0a906dc8...</code></p>
<p>- TestUSDC Treasury Cap</p>
<p>- CreatorConfig object</p>
<br />
<p>Two contracts:</p>
<p>1. <code class="inline">test_usdc</code> - test USDC anyone can mint</p>
<p>2. <code class="inline">tunnel</code> - Payment Tunnel with escrow + Ed25519 claim</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">16:12</span>
    </div>
    <div class="msg-content"><p>Go ahead, do all three. You have the sui-agent-wallet skill right? You can test the entire flow yourself.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">16:50</span>
    </div>
    <div class="msg-content"><p>Wallet server is up. ~0.5 SUI on testnet.</p>
<br />
<p>Completed:</p>
<p>- <span class="check">✅</span> <code class="inline">test_usdc</code> + <code class="inline">tunnel</code> contracts deployed to testnet</p>
<p>- <span class="check">✅</span> CreatorConfig created</p>
<p>- <span class="check">✅</span> Backend Sui SDK integration (SponsoredTransaction + Gas Station)</p>
<p>- <span class="check">✅</span> Backend operator key configured</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">17:00</span>
    </div>
    <div class="msg-content"><p>Continue with frontend. Remember you have the wallet skill? You can test the whole flow yourself. Also simulate API payments to make sure everything works before deploying.</p>
<br />
<p>Make the UI look professional, like a real SaaS platform. Add a landing page too.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">17:05</span>
    </div>
    <div class="msg-content"><p>Got it! Spawned two sub-agents in parallel:</p>
<br />
<p>1. <strong>frontend-integration</strong> - Wallet connection + Tunnel management + Demo API + automated testing</p>
<p>2. <strong>landing-docs</strong> - Landing page + API docs</p>
<br />
<p>Using <strong>sui-agent-wallet</strong> to connect wallet and test directly.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">17:30</span>
    </div>
    <div class="msg-content"><p>Landing page and docs are done! Professional dark theme with Hero + How it Works + Features + Pricing sections, plus complete API documentation.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">18:00</span>
    </div>
    <div class="msg-content"><p>🎉 Full flow test passed!</p>
<br />
<pre><code>
Mint 100 TEST_USDC    ✅
Open Tunnel (deposit)  ✅
Register to backend     ✅
Query Status            ✅
</code></pre>
<br />
<p>Agent wallet signed all transactions, Gas Station sponsored gas fees. Now building frontend for deployment.</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">18:30</span>
    </div>
    <div class="msg-content"><p>Audit the contracts. Unit tests, make it 100% coverage.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">18:45</span>
    </div>
    <div class="msg-content"><p>Running <strong>sui-coverage</strong> analysis...</p>
<br />
<p>Current coverage: 91.65%</p>
<p>- <code class="inline">test_usdc</code>: 94.59%</p>
<p>- <code class="inline">tunnel</code>: 91.38%</p>
<br />
<p>Remaining uncovered: <code class="inline">claim()</code> function&#x27;s Ed25519 verify path, because tunnel_id is random in Move tests, making it impossible to pre-compute signatures.</p>
<br />
<p><strong>Security audit:</strong></p>
<p>- <span class="check">✅</span> Access control correct (operator/payer separation)</p>
<p>- <span class="check">✅</span> Nonce replay protection</p>
<p>- <span class="check">✅</span> Insufficient balance checks</p>
<p>- <span class="check">✅</span> Closing state mutual exclusion</p></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">19:00</span>
    </div>
    <div class="msg-content"><p>Can&#x27;t you specify the ID and generate signatures? Use TS to generate them. Refer to <a href="https://github.com/EasonC13/wip-blackjack-app" target="_blank">https://github.com/EasonC13/wip-blackjack-app</a> for the approach.</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">19:15</span>
    </div>
    <div class="msg-content"><p>Referenced the blackjack repo approach:</p>
<br />
<p>1. Run test once with <code class="inline">std::debug::print</code> to get deterministic tunnel ID</p>
<p>2. TS script uses tweetnacl to sign <code class="inline">tunnel_id || amount || nonce</code></p>
<p>3. Hardcode signature back into Move test</p>
<br />
<p>Tunnel ID: <code class="inline">0x1611edd9...</code></p>
<p>Signature and public key computed, writing into test...</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">19:30</span>
    </div>
    <div class="msg-content"><p><strong>100.00% coverage!</strong> 🎉</p>
<br />
<p>All 35 tests pass, every function at 100% coverage.</p>
<br />
<pre><code>
test_usdc: 100.00%
tunnel:    100.00%
Total:     100.00%
</code></pre></div>
  </div>
</div>
<div class="msg human">
  <div class="avatar" style="background:#57f287">E</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#57f287">Eason</span>
      <span class="time">19:45</span>
    </div>
    <div class="msg-content"><p>Nice! Where can I test it? Deployed to platform yet?</p></div>
  </div>
</div>
<div class="msg bot">
  <div class="avatar" style="background:#5865f2">S</div>
  <div class="msg-body">
    <div class="msg-header">
      <span class="name" style="color:#5865f2">SuiMate AI</span>
      <span class="time">20:00</span>
    </div>
    <div class="msg-content"><p>Deployed to production!</p>
<br />
<p>👉 <strong><a href="https://platform.3mate.io" target="_blank">https://platform.3mate.io</a></strong></p>
<br />
<p>Test flow:</p>
<p>1. Open site, connect Sui wallet (switch to testnet)</p>
<p>2. Login with Google</p>
<p>3. Dashboard → Mint 100 Test USDC</p>
<p>4. Open Tunnel (deposit USDC)</p>
<p>5. Get API Key → Call API</p>
<p>6. Check Usage + Balance</p>
<br />
<p>From concept to deployment, entirely done by AI agent.</p></div>
  </div>
</div>

</div>

</div>

<div style="text-align: center; margin-top: 2rem; color: #666;">

**Skills used in this conversation:**
sui-decompile · sui-move · sui-coverage · sui-agent-wallet

[View all skills](/getting-started) · [GitHub](https://github.com/EasonC13-agent/sui-skills)

</div>
