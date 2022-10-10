---
title: 数组操作
titleTemplate: findTreeData
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 根据字段匹配条件查找指定的树形节点数据。

## 1-函数引入

```js 
  import { findTreeData } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const findTreeData: (targetArr: any[], conditions: object, cb?: Function, childName?: string) => {} | undefined;
```

## 3-使用示例


## 4-OPTIONS配置详解