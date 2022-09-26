---
title: url类工具
titleTemplate: urlTool
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——url操作
  - - meta
    - name: keywords
      content: JSTOOLS urlTool
---

# TJ-JSTOOLS ---- URL工具函数

## 安装

```sh
  npm i tj-jstools
```
## 简单使用

```js {1,3}
  import { getUrlParams } from "tj-jstools";
  console.log(getUrlParams)
  console.log(getUrlParams(true)) // boolean
```

## API-列表


| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`getUrlParams`](./getUrlParams.html) | key?:`string`,<br/> options?:`IGetUrlParamsConfig` | 获取url路径参数 |
| 2    | [`converParamsToUrl`](./converParamsToUrl.html)  | urlParams:`object`,<br/>options?:`IConverParamsConfig` | 拼接参数到url路径上  |
::: tip
点击API名称，可以直接进入对应API详情页面！
:::
