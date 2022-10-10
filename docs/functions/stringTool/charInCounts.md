---
title: 字符串操作
titleTemplate: charInCounts
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 计算字符串中指定字符出现的次数。

## 1-函数引入

```js 
  import { charInCounts } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const charInCounts: (str: string, char: string) => number;
```

## 3-使用示例

```ts
const str = 'www.itbooks.work?name=jstool&p1=js&p2=tool#code'
const count1 = charInCounts(str,'?') // 1
const count2 = charInCounts(str,'&') // 2
const count3 = charInCounts(str,'#') // 1
const count4 = charInCounts(str,'=') // 3
const count5 = charInCounts(str,'.') // 2
const count5 = charInCounts(str,'@') // 0
```
查找特殊字符在字符串出现的次数，如果字符在字符串上面不存在，则返回`0`。
