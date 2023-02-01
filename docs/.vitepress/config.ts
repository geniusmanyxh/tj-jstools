import nav from './nav'
import sidebar from './sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TJ-JSTOOLS',
  titleTemplate: 'javaScript utility library',
  description: 'javaScript utility library.',
  lastUpdated: true,
  appearance: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  base:'/tj-jstools/',


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
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#d81e06" d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"  /></svg>'
        },
        link: 'https://gitee.com/geniusman/tj-jstools'
      }
    ],
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },
})
