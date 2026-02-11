import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sui Agent Skills',
  description: 'OpenClaw skills for Sui blockchain development',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Skills', link: '/skills/sui-move' },
      { text: 'Demo', link: '/demo' },
      { text: 'GitHub', link: 'https://github.com/EasonC13-agent/sui-skills' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Demo', link: '/demo' }
        ]
      },
      {
        text: 'Skills',
        items: [
          { text: 'sui-move', link: '/skills/sui-move' },
          { text: 'sui-decompile', link: '/skills/sui-decompile' },
          { text: 'sui-coverage', link: '/skills/sui-coverage' },
          { text: 'sui-agent-wallet', link: '/skills/sui-agent-wallet' },
          { text: 'mcp-server', link: '/skills/mcp-server' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EasonC13-agent/sui-skills' }
    ]
  }
})
