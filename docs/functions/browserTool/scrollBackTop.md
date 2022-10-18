---
title: 浏览器操作
titleTemplate: scrollBackTop
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 使浏览器滚动条返回顶部。

## 1-函数引入

```js 
  import { scrollBackTop } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const scrollBackTop: (step?: number, time?: number) => void;
```

## 3-使用示例

```html
   <button onclick="scrollBackTop()">openFullScreenOfEl</button>
```

## 4-参数配置
- step [可选]
默认值：`0.1`, 它的作用是在返回顶部的过程中每次以减少 `scrollHeight * step` 的大小。
值范围：`0 ~ 1`, 它的可选范围在0到1之间。

- time [可选]
默认值：`20`, 他的作用是每20ms，使得滚动条高度减少`scrollHeight * step` 的大小。
值类型：`number`
