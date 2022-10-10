---
title: 浏览器操作
titleTemplate: toggleFull
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 开启或者关闭浏览器全屏状态。

## 1-函数引入

```js 
  import { toggleFull } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const toggleFull: (el?: Element, options?: FullscreenOptions) => Promise<void>;
```

## 3-使用示例

```html
 <button onclick="toggleFull()">toggleFullScreen</button>
```
该方法开启全屏时触发的是`openFull`方法，关闭时触发的是`closeFull`方法，
**所以该方法不支持自动加载，需要用户主动触发！**

关于参数和 **[openFull](./openFull.md)** 方法使用一致，可点击查看详情，这里不做赘述！