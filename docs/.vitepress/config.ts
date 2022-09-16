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


  themeConfig:{
    logo: '/tian.png',
    outline: 'deep',
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present 天界程序员'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
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
