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
    storage_tool: '/functions/storageTool/',
    browser_tool: '/functions/browserTool/',
    string_tool: '/functions/stringTool/',
    array_tool:'/functions/arrayTool/',
    number_tool:'/functions/numberTool/'
  }
  const joinTypeUrl = joinUrl(baseUrl.type_tool)
  const joinURLUrl = joinUrl(baseUrl.url_tool)
  const joinStorageUrl = joinUrl(baseUrl.storage_tool)
  const joinBrowserUrl = joinUrl(baseUrl.browser_tool)
  const joinStringTool = joinUrl(baseUrl.string_tool)
  const joinArrayTool = joinUrl(baseUrl.array_tool)
  const joinNumberTool = joinUrl(baseUrl.number_tool)
  const rtnSider:DefaultTheme.SidebarGroup[] = [
    
    {
      text: '数据类型篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
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
        { text: '函数列表概览', link: joinStringTool() },
        { text: 'charInCounts',link:joinStringTool('charInCounts')},
        { text: 'DTMobile', link: joinStringTool('DTMobile')},
      ]
    },
    {
      text: '数值篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinNumberTool() },
        { text: 'formatChineseRMB',link:joinNumberTool('formatChineseRMB')},
      ]
    },
    {
      text: '数组篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinArrayTool() },
        { text: 'toTreeData',link:joinArrayTool('toTreeData')},
        { text: 'treeToFlat', link: joinArrayTool('treeToFlat')},
        { text: 'findTreeData', link: joinArrayTool('findTreeData')},
      ]
    },
    // {
    //   text: '对象篇',
    //   collapsible: true, // 开启可折叠侧边栏
    //   collapsed: true, // 初始加载页面时关闭
    //   items: [
    //     { text: '函数列表概览', link: joinTypeUrl('index') },
    //     { text: 'isBoolean',link:joinTypeUrl('isBoolean')},
    //     { text: 'isString', link: joinTypeUrl('isString')},
    //   ]
    // },
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
        { text: '函数列表概览', link: joinBrowserUrl() },
        { text: 'isFull',link:joinBrowserUrl('isFull')},
        { text: 'isFullEnabled', link: joinBrowserUrl('isFullEnabled')},
        { text: 'getFullEl', link: joinBrowserUrl('getFullEl')},
        { text: 'openFull', link: joinBrowserUrl('openFull')},
        { text: 'closeFull', link: joinBrowserUrl('closeFull')},
        { text: 'toggleFull', link: joinBrowserUrl('toggleFull')},
        { text: 'scrollBackTop', link: joinBrowserUrl('scrollBackTop')},
        { text: 'scrollProgressBar', link: joinBrowserUrl('scrollProgressBar')},
      ]
    },
    {
      text: '浏览器缓存篇',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: true, // 初始加载页面时关闭
      items: [
        { text: '函数列表概览', link: joinStorageUrl() },
        { text: 'newStorage',link:joinStorageUrl('newStorage')},
        { text: 'setFun',link:joinStorageUrl('setFun')},
        { text: 'getFun',link:joinStorageUrl('getFun')},
        { text: 'delFun',link:joinStorageUrl('delFun')},
        { text: 'existFun',link:joinStorageUrl('existFun')},
        { text: 'allKey',link:joinStorageUrl('allKey')},
        { text: 'clearFun',link:joinStorageUrl('clearFun')},
      ]
    }
  ]
  return rtnSider
}