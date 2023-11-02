import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Got UI Project',
  description: 'Vue3+TS Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components/card', activeMatch: '/components/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [{ text: '安装', link: '/guide/installation' }]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [{ text: '卡片', link: '/components/card' }]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
