---
title: URL操作
titleTemplate: getUrlParams
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 获取URL地址上的参数，并组合为一个对象数据格式返回。

**返回对象：** `[{key:'value'}...]`

## 1-函数引入

```js 
  import { getUrlParams } from 'tj-jstools'
```
## 2-函数声明

```ts 
interface IParamsType {
  [key: string]: string;
}

declare type parseUrlType = 'splitType' | 'URLSearchParamsType' | 'RegExpType';
declare type decodeUrlType = 'noneType' | 'decodeURIType' | 'decodeURIComponentType';

interface IGetUrlParamsConfig {
  url: string;
  parseUrlType: parseUrlType;
  decodeUrlType: decodeUrlType;
}


declare function getUrlParams(): IParamsType;
declare function getUrlParams(key?: string): string;
declare function getUrlParams(options?: IGetUrlParamsConfig): IParamsType;
declare function getUrlParams(key?: string, options?: IGetUrlParamsConfig): IParamsType | string;
```

## 3-使用示例
我这里将URL地址分为3个部分 <br/>
URL地址：1、（域名+api路径）—— 2、(携带参数) —— 3、(哈希值) <br/>
URL示例（默认当前地址栏）：<br/> `https://jstools.itbooks.work/functions?tool=urlTool&fun=getUrlParams#code`

### 示例1：getUrlParams()
```ts 
  const res1:IParamsType = getUrlParams() 

// { tool: 'urlTool', fun: 'getUrlParams' }
```
::: tip
当没有在`options`参数里面配置`url`地址时，默认取值：`window.location.search` <br/>
截取的部分为 `?tool=urlTool&fun=getUrlParams`

参考MDN地址：[window.location.search](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/search)
:::

### 示例2：getUrlParams(key?: string)

```ts 
  const res2:string = getUrlParams('tool') // urlTool
```

### 示例3：getUrlParams(options?: IGetUrlParamsConfig)

```ts 
  const res3:string = getUrlParams({parseUrlType:'URLSearchParamsType'})
  
 // { tool: 'urlTool', fun: 'getUrlParams' }
```

### 示例4：getUrlParams(key?: string, options?: IGetUrlParamsConfig)

```ts 
  const res3:string = getUrlParams('tool',{parseUrlType:'URLSearchParamsType'})
  // urlTool
```

## 4-OPTIONS配置详解
```ts
const config:IGetUrlParamsConfig = {
  url: globalThis?.location?.search, // url默认值
  parseUrlType: "splitType", // 默认解析url参数的方式
  decodeUrlType: "noneType" // 默认解码方式
}
```
**【url】**
- 默认值：包含一个 URL 标识中的 '?' 以及跟随其后的一串 URL 查询参数
- 可以自定义配置该参数

**【parseUrlType】** 解析参数的方式
- splitType： 传统的字符串切割，然后组合为对象
- URLSearchParamsType： 使用的是[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)实验性功能，存在兼容性
- RegExpType： 正则表达式方法，获取简单的参数形式，暂不支持复杂的参数形式如：`?obj={key:'value'}`

**【decodeUrlType】** 解码参数的方式
- noneType：  默认不解码
- decodeURIType： 使用[decodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)方法解码
- decodeURIComponentType： 使用[decodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)方法解码
