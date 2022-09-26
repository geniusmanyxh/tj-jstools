---
title: 类型判断
titleTemplate: getObjectTypeDetail
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 判断数组的细粒度的数据类型，返回结果有以下这几种类型组成的一个数组详细结果：`string` 、 `bigint` 、 `boolean` 、 `symbol` 、 `undefined` 、 `object` 、 `function` 、 `array` 、 `object` 、 `date` 、 `null` 、 `int` 、 `float` 、 `infinite` 、 `NaN`。

**返回数组：** `[{
  key: 'a' ;
  value: 'hello';
  type: 'string';
}...]`

**注意：** 这里返回的类型并没有：`number` | `finite`,因为`number`类型已经被细粒度的类型细化, 而`finite`则被`int`和`float`类型代替

## 1-函数引入

```js 
  import { getObjectTypeDetail } from 'tj-jstools'
```
## 2-函数声明

```ts 
declare type returnTypeStr = 'string' | 'bigint' | 'boolean' | 'symbol' 
| 'undefined' | 'object' | 'function' | 'array' | 'object' | 'date' 
| 'null' | 'int' | 'float' | 'infinite' | 'NaN';

declare type objectTypeDetail = {
    key: string;
    value: any;
    type: returnTypeStr;
};

declare function getObjectTypeDetail(params: object, selectType?: returnTypeStr | 'number'): objectTypeDetail[];
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
  const res1:objectTypeDetail[] = getObjectTypeDetail(testObj) 
  /*
[
  { key: 'a', value: true, type: 'boolean' },
  { key: 'b', value: null, type: 'null' },
  { key: 'c', value: undefined, type: 'undefined' },
  { key: 'd', value: 6, type: 'int' },
  { key: 'e', value: 6.01, type: 'float' },
  { key: 'f', value: Infinity, type: 'infinite' },
  { key: 'g', value: {}, type: 'object' },
  { key: 'h', value: [], type: 'array' },
  { key: 'i', value: [Function: i], type: 'function' }
]
  */
```
::: tip
特别注意该方法返回的类型里面没有：`number` | `finite`; <br/>
该方法接收的必须是一个对象类型的参数，且参数不能为空！
:::

**第二个参数可以筛选返回的类型**

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
  const res1:objectTypeDetail[] = getObjectTypeDetail(testObj,'infinite') 
  /*
[ { key: 'f', value: Infinity, type: 'infinite' } ]
  */
```

::: details 第二个参数是`number`时注意：
当二个参数是`number`时，返回的数据类型只有：`int` 和 `float` 类型的数据
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
  const res1:objectTypeDetail[] = getObjectTypeDetail(testObj,'number') 
  /*
[
  { key: 'd', value: 6, type: 'int' },
  { key: 'e', value: 6.01, type: 'float' }
]
  */
```
:::


