import {DefaultTheme} from 'vitepress/types/default-theme'

const sidebar =  {
  '/guide/': siderbarGuide(),
  '/functions/': siderbarFunction(),
}

export default sidebar

function joinUrl (baseUrl:string) {

  return (detailUrl:string = '') => baseUrl + detailUrl;
}

function siderbarGuide ():DefaultTheme.SidebarGroup[] {
  let rtnSider:DefaultTheme.SidebarGroup[] = [
    {
      text: 'TJ-JSTOOLS文档',
      items: [
        { text: '指南', link: '/guide/' },
        { text: '快速开始', link: '/guide/getting-started' },
        
      ]
    }
  ]
  return rtnSider
}

function siderbarFunction ():DefaultTheme.SidebarGroup[] {
  const baseUrl = {
    type_tool: '/functions/typeTool/'
  }
  const joinTypeUrl = joinUrl(baseUrl.type_tool)
  const rtnSider:DefaultTheme.SidebarGroup[] = [
    
    {
      text: '数据类型篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: false, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    },
    {
      text: '字符串篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    },
    {
      text: '数值篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    },
    {
      text: '数组篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    },
    {
      text: '对象篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    },
    {
      text: 'URL篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    },
    {
      text: '浏览器篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl('index') },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
      ]
    }
  ]
  return rtnSider
}