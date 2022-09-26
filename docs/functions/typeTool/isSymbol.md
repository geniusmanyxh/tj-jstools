---
title: 类型判断
titleTemplate: isSymbol
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数据是否是一个标记(`Symbol`)类型的数据，如果是则返回`true`,否则返回`false`。

## 1-函数引入

```js 
  import { isSymbol } from 'tj-jstools'
```
## 2-函数声明

```ts 
  declare const isSymbol: (value: unknown) => boolean
```

## 3-使用示例

```ts 
  const res1:boolean = isSymbol(5) // false
  const res2:boolean = isSymbol(Symbol(55)) // true
```

## 4-参数不能为空

::: danger ERROR
该方法的参数不能为空,否则将抛出错误

```js
Uncaught Error: isXXXX方法的参数不能为空！
```
:::