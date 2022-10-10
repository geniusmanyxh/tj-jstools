---
title: 浏览器操作
titleTemplate: isFull
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断当前是否全屏状态。

## 1-函数引入

```js 
  import { isFull } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const isFull: () => boolean;
```

## 3-使用示例

```ts
  const res:boolean = isFull()
```
该方法是判断当前浏览器状态是否处于全屏状态,当你开启全屏时返回的结果是`true`,反之就是`false`。