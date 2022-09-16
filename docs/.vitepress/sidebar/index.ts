const sidebar =  {
  '/guide/':[
  {
    text: 'TJ-JSTOOLS文档',
    link: '/',
    items: [
      { text: '指南', link: '/guide/' },
      { text: '快速开始', link: '/guide/getting-started' },
      
    ]
  },],
  '/functions/':[
  {
    text: '下拉菜单',
    collapsible: true, // 开启可折叠侧边栏
    collapsed: true, // 初始加载页面时关闭
    items: [
      { text: 'Item C', link: '/item-c' },
      { text: 'Item D', link: '/item-d' },
    ]
  }]
}

export default sidebar