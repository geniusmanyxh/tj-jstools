---
title: 数组类工具
titleTemplate: arrayTool
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——数组操作
  - - meta
    - name: keywords
      content: JSTOOLS arrayTool
---

# TJ-JSTOOLS ---- 数组工具函数

## 安装

```sh
  npm i tj-jstools
```
## 简单使用

```js 
  import { toTreeData } from "tj-jstools";
  console.log(toTreeData)
```

## API-列表


| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`toTreeData`](./toTreeData.html) | targetArr: `any[]`,<br/> options?: `treeOption` | 将特定数组转为树形结构 |
| 2    | [`treeToFlat`](./treeToFlat.html)  | targetArr: `any[]`,<br/> childName?: `string` | 将树形结构扁平化一维数组  |
| 3    | [`findTreeData`](./findTreeData.html)  | targetArr: `any[]`,<br/> conditions: `object`,<br/> cb?: `Function`, <br/>childName?: `string` | 查找符合条件的树形节点  |
<!-- | 4    | [`openFull`](./openFull.html)  | el?: `Element`,<br/> options?: `FullscreenOptions` | 打开全屏  |
| 5    | [`closeFull`](./closeFull.html)  | `none` | 关闭全屏  |
| 6    | [`toggleFull`](./toggleFull.html)  | el?: `Element`,<br/> options?: `FullscreenOptions` | 打开或者关闭全屏  | -->
::: tip
点击API名称，可以直接进入对应API详情页面！
:::
