---
title: 浏览器类工具
titleTemplate: browserTool
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——字符串操作
  - - meta
    - name: keywords
      content: JSTOOLS browserTool
---

# TJ-JSTOOLS ---- 浏览器工具函数

## 安装

```sh
  npm i tj-jstools
```
## 简单使用

```js 
  import { isFull } from "tj-jstools";
  console.log(isFull)
  console.log(isFull()) // false
```

## API-列表


| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`isFull`](./isFull.html) | `none` | 判断当前是否全屏 |
| 2    | [`getFullEl`](./getFullEl.html)  | `none` | 获取全屏元素  |
| 3    | [`isFullEnabled`](./isFullEnabled.html)  | `none` | 判断当前是否支持全屏功能  |
| 4    | [`openFull`](./openFull.html)  | el?: `Element`,<br/> options?: `FullscreenOptions` | 打开全屏  |
| 5    | [`closeFull`](./closeFull.html)  | `none` | 关闭全屏  |
| 6    | [`toggleFull`](./toggleFull.html)  | el?: `Element`,<br/> options?: `FullscreenOptions` | 打开或者关闭全屏  |
| 7    | [`scrollBackTop`](./scrollBackTop.html)  | step?: `number`,<br/> time?: `number` | 返回浏览器顶部  |
| 8    | [`scrollProgressBar`](./scrollProgressBar.html)  | `none` | 计算当前页面已读内容的百分比占比  |
::: tip
点击API名称，可以直接进入对应API详情页面！
:::
