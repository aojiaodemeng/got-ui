import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Got UI Project',
  description: 'Vue3+TS Library',
  base: '/got-ui/',
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components/icon', activeMatch: '/components/' }
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
          items: [
            { text: 'Icon图标', link: '/components/icon' },
            { text: 'Card卡片', link: '/components/card' },
            { text: 'Tag标签', link: '/components/tag' },
            { text: 'Divider分割线', link: '/components/divider' },
            { text: 'Breadcrumb面包屑', link: '/components/breadcrumb' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/aojiaodemeng/got-ui' }]
  }
})
