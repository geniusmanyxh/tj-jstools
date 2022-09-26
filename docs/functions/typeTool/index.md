---
title: 数据类型工具
titleTemplate: typeTool
layout: doc
head:
  - - meta
    - name: description
      content: 前端业务工具库——js数据类型
  - - meta
    - name: keywords
      content: JSTOOLS typeTool
---

# TJ-JSTOOLS ---- js数据类型工具

## 安装

```sh
  npm i tj-jstools
```
## 简单使用

```js {1,3}
  import { getType } from "tj-jstools";
  console.log(getType)
  console.log(getType(true)) // boolean
```

## API-列表


| 序号 |    名称     | 参数            | 功能简介                    |
| ---- | :--------------: | --------------- | --------------------------- |
| 1    | [`isBoolean`](./isBoolean.html) | param: `unknow` | 判断数据是否是`boolean`类型 |
| 2    | [`isString`](./isString.html)  | param: `unknow` | 判断数据是否是`string`类型  |
| 3    | [`isNumber`](./isNumber.html)  | param: `unknow` | 判断数据是否是`number`类型  |
| 4    | [`isSymbol`](./isSymbol.html)  | param: `unknow` | 判断数据是否是`symbol`类型  |
| 5    | [`isUndefined`](./isUndefined.html)  | param: `unknow` | 判断数据是否是`undefined`类型  |
| 6    | [`isBigint`](./isBigint.html)  | param: `unknow` | 判断数据是否是`bigint`类型  |
| 7    | [`isInt`](./isInt.html)  | param: `unknow` | 判断数据是否是`int`类型  |
| 8    | [`isFloat`](./isFloat.html)  | param: `unknow` | 判断数据是否是`float`类型  |
| 9    | [`isNaN`](./isNaN.html)  | param: `unknow` | 判断数据是否是`NaN`类型  |
| 10    | [`isFinite`](./isFinite.html)  | param: `unknow` | 判断数据是否是`finite`类型  |
| 11   | [`isNull`](./isNull.html)  | param: `unknow` | 判断数据是否是`null`类型  |
| 12   | [`isArray`](./isArray.html)  | param: `unknow` | 判断数据是否是`array`类型  |
| 13   | [`isDate`](./isDate.html)  | param: `unknow` | 判断数据是否是`date`类型  |
| 14   | [`isFunction`](./isFunction.html)  | param: `unknow` | 判断数据是否是`function`类型  |
| 15   | [`isObject`](./isObject.html)  | param: `unknow` | 判断数据是否是`object`类型  |
| 16   | [`getType`](./getType.html)  | param: `unknow` | 判断数据是否是`returnTypeStr`类型  |
| 17   | [`getArrayAllType`](./getArrayAllType.html)  | param: `any[]` | 判断数组值是否是`returnTypeStr`类型  |
| 18   | [`getArrayTypeDetail`](./getArrayTypeDetail.html)  | param: `any[]`, <br/> selectType?: `returnTypeStr or 'number'` | 判断数组值是否是`returnTypeStr`类型  |
| 19   | [`getObjectAllType`](./getObjectAllType.html)  | param: `object` | 判断对象属性是否是`returnTypeStr`类型  |
| 20   | [`getObjectTypeDetail`](./getObjectTypeDetail.html)  | param: `object`, <br/> selectType?: `returnTypeStr or 'number'` | 判断对象属性是否是`returnTypeStr`类型  |

::: tip
点击API名称，可以直接进入对应API详情页面！
:::
