---
title: 类型判断
titleTemplate: isBigint
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个大整型(`bigint`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isBigint } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isBigint: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isBigint(5) // false
  const res2:boolean = isBigint(5n) // true
```

## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::