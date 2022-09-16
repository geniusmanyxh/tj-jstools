const navList = [
  { text: '指南', link: '/guide/',activeMatch: '/guide/' },
  { text: '函数', link: '/functions/' },
  {
    text: '下拉菜单',
    items: [
      { text: '我的博客', link: 'https://www.itbooks.work' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' }
    ]
  }
]

export default navList