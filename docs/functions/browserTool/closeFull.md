---
title: 浏览器操作
titleTemplate: closeFull
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 关闭当前全屏状态。

## 1-函数引入

```js 
  import { closeFull } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const closeFull: () => Promise<void>;
```

## 3-使用示例

```html
  <button onclick="closeFull()">closeFullScreen</button>
```
该方法是退出浏览器的全屏状态，该方法可以自动加载。