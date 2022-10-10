---
title: 浏览器操作
titleTemplate: getFullEl
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 获取当前全屏元素。

## 1-函数引入

```js 
  import { getFullEl } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const getFullEl: () => Element | undefined;
```

## 3-使用示例

```ts
  const res:Element | undefined = getFullEl()
```
该方法是判断当前浏览器开启全屏的元素,如果未开启全屏返回的是`undefined`,反之是一个具体的DOM元素。