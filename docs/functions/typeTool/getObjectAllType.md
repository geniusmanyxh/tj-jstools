---
title: 类型判断
titleTemplate: getObjectAllType
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断对象属性的细粒度的数据类型，返回结果有以下这几种类型组成的一个数组详细结果：`string` 、 `bigint` 、 `boolean` 、 `symbol` 、 `undefined` 、 `object` 、 `function` 、 `array` 、 `object` 、 `date` 、 `null` 、 `int` 、 `float` 、 `infinite` 、 `NaN`。

**返回数组：** `[string,null...]`

**注意：** 这里返回的类型并没有：`number` | `finite`,因为`number`类型已经被细粒度的类型细化, 而`finite`则被`int`和`float`类型代替

## 1-函数引入

```js 
  import { getObjectAllType } from 'tj-jstools'
```
## 2-函数声明

```ts 
declare type returnTypeStr = 'string' | 'bigint' | 'boolean' | 'symbol' 
| 'undefined' | 'object' | 'function' | 'array' | 'object' | 'date' 
| 'null' | 'int' | 'float' | 'infinite' | 'NaN';

declare function getObjectAllType(params: object): returnTypeStr[];
```

## 3-使用示例

```ts 
  const testObj:object = {
    a: true,
    b: null,
    c: undefined,
    d: 6,
    e: 6.01,
    f: 1/0,
    g: {},
    h: [],
    i: () => {}
  }
  const res1:returnTypeStr[] = getObjectAllType(testObj)
  /*
[
  'boolean', 'null', 'undefined', 'int', 'float','infinite',
  'object',  'array', 'function'
]
  */
```
::: tip
特别注意该方法返回的类型里面没有：`number` | `finite`; <br/>
该方法接收的必须是一个对象类型的参数，且参数不能为空！
:::




