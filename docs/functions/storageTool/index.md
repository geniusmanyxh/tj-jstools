---
title: 浏览器缓存工具
titleTemplate: Storage|Cookie
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——浏览器缓存存储
  - - meta
    - name: keywords
      content: JSTOOLS localStorage sessionStorage cookie
---

# TJ-JSTOOLS ---- 浏览器缓存工具

## 安装

```sh
  npm i tj-jstools
```
## 简单使用

```js {1,3}
  import { newStorage } from "tj-jstools";
  const LInstance = newStorage('local') // 生成一个可操作的localStorage实例
  const SInstance = newStorage('session') // 生成一个可操作的sessionStorage实例
  const CInstance = newStorage('cookie') // 生成一个可操作的cookie实例
```
## API-列表

| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`newStorage`](./newStorage.html) | type,[options] | 生成一个可操作的浏览器缓存实例 |

## 实例方法-列表

| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`setFun`](./setFun.html) | key,value,[options] | 设置浏览器缓存的方法 |
| 2    | [`getFun`](./getFun.html) | key,[options] | 获取浏览器缓存的方法 |
| 3    | [`delFun`](./delFun.html) | key,[options] | 移除浏览器缓存的方法 |
| 4    | [`existFun`](./existFun.html) | key,[options] | 监测浏览器缓存的方法 |
| 5    | [`allkey`](./allKey.html) | [options] | 获取浏览器缓存的key值唯一标识的方法 |
| 6    | [`clearFun`](./clearFun.html) | [options] | 批量清除浏览器缓存的方法 |