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
    type_tool: '/functions/typeTool/',
    url_tool: '/functions/urlTool/',
  }
  const joinTypeUrl = joinUrl(baseUrl.type_tool)
  const joinURLUrl = joinUrl(baseUrl.url_tool)
  const rtnSider:DefaultTheme.SidebarGroup[] = [
    
    {
      text: '数据类型篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: false, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinTypeUrl() },
        { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
        { text: 'isString', link: joinTypeUrl('isString')},
        { text: 'isNumber', link: joinTypeUrl('isNumber')},
        { text: 'isBigint', link: joinTypeUrl('isBigint')},
        { text: 'isSymbol', link: joinTypeUrl('isSymbol')},
        { text: 'isUndefined', link: joinTypeUrl('isUndefined')},
        { text: 'isFloat', link: joinTypeUrl('isFloat')},
        { text: 'isInt', link: joinTypeUrl('isInt')},
        { text: 'isNaN', link: joinTypeUrl('isNaN')},
        { text: 'isFinite', link: joinTypeUrl('isFinite')},
        { text: 'isInfinite', link: joinTypeUrl('isInfinite')},
        { text: 'isNull', link: joinTypeUrl('isNull')},
        { text: 'isArray', link: joinTypeUrl('isArray')},
        { text: 'isObject', link: joinTypeUrl('isObject')},
        { text: 'isDate', link: joinTypeUrl('isDate')},
        { text: 'isFunction', link: joinTypeUrl('isFunction')},
        { text: 'getType', link: joinTypeUrl('getType')},
        { text: 'getArrayAllType', link: joinTypeUrl('getArrayAllType')},
        { text: 'getArrayTypeDetail', link: joinTypeUrl('getArrayTypeDetail')},
        { text: 'getObjectAllType', link: joinTypeUrl('getObjectAllType')},
        { text: 'getObjectTypeDetail', link: joinTypeUrl('getObjectTypeDetail')},
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
        { text: '函数列表概览', link: joinURLUrl() },
        { text: 'getUrlParams',link:joinURLUrl('getUrlParams')},
        { text: 'converParamsToUrl', link: joinURLUrl('converParamsToUrl')},
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
    },
    {
      text: '浏览器存储篇',
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