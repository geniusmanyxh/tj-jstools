import nav from './nav'
import sidebar from './sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TJ-JSTOOLS',
  titleTemplate: 'javaScript & Node utility library',
  description: 'javaScript & Node utility library.',
  lastUpdated: true,
  appearance: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  // base:'./',


  themeConfig:{
    logo: '/tian.png',
    outline: 'deep',
    outlineTitle:'本章目录',
    nav,
    sidebar,
    lastUpdatedText:'上次更新时间',
    docFooter: {
      prev:'上一页',
      next:'下一页'
    },
    // team:{},
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: '<APP_ID>',
      placeholder:'关键字搜索',
      // searchParameters:['555','888'],
      disableUserPersonalization:false,
      // initialQuery:'5555', // 初始查询
      buttonText:'搜索'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present 天界程序员'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/geniusmanyxh/tj-jstools' },
      // { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...'
      // }
    ],
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },
})


function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}