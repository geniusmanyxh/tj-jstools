---
title: 浏览器操作
titleTemplate: isFullEnable
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断当前是否支持全屏功能。

## 1-函数引入

```js 
  import { isFullEnabled } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const isFullEnabled: () => boolean;
```

## 3-使用示例

```ts
  const res:boolean = isFullEnabled()
```
该方法是判断当前浏览器状态是否支持开启全屏功能,支持的结果是`true`,反之就是`false`。