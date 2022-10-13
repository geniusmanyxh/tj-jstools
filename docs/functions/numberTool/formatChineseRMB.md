---
title: 数值操作
titleTemplate: formatChineseRMB
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 数字金额转换为大写人民币汉字。

## 1-函数引入

```js 
  import { formatChineseRMB } from 'tj-jstools'
```
## 2-函数声明
```ts
declare function formatChineseRMB(money: number): string;
```

## 3-使用示例

```js
formatChineseRMB(555) // 伍佰伍拾伍元整
formatChineseRMB(555.00) // 伍佰伍拾伍元整
formatChineseRMB(555.25) // 伍佰伍拾伍元贰角伍分
formatChineseRMB(+555.25) // 伍佰伍拾伍元贰角伍分
formatChineseRMB(-555.2536) // 伍佰伍拾伍元贰角伍分叁毫陆厘
formatChineseRMB(545555.2536665) // 伍拾肆万伍仟伍佰伍拾伍元贰角伍分叁毫陆厘
```
- 对于数值小于 `0` 时，取绝对值
- 对于小数超过`4`位数时，只保留`4`位小数进行转换
- 最大数值不能超过`999999999999999.9999`