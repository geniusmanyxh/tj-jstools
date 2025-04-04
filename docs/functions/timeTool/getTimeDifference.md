---
title: 时间操作
titleTemplate: getTimeDifference
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 计算两个日期之间的时间差

## 1. 函数引入

```js
import { getTimeDifference } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getTimeDifference: (startDate: string, endDate: string, unit?: string) => number;
```

## 3. 使用示例

### 3.1 计算两个日期之间的天数差

```ts
const diff = getTimeDifference('2023-01-01', '2023-01-31', 'day');
console.log(diff); // 输出: 30
```

### 3.2 计算两个日期之间的小时差

```ts
const diff = getTimeDifference('2023-01-01 08:00', '2023-01-01 18:00', 'hour');
console.log(diff); // 输出: 10
```

### 3.3 计算两个日期之间的分钟差

```ts
const diff = getTimeDifference('2023-01-01 08:00', '2023-01-01 08:30', 'minute');
console.log(diff); // 输出: 30
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| startDate | string | 是 | 开始日期，格式为`YYYY-MM-DD`或`YYYY-MM-DD HH:mm` |
| endDate | string | 是 | 结束日期，格式为`YYYY-MM-DD`或`YYYY-MM-DD HH:mm` |
| unit | string | 否 | 时间单位，可选值为`'day'`、`'hour'`、`'minute'`，默认为`'day'` |

## 5. 返回值

返回一个`number`，表示两个日期之间的时间差，单位为指定的`unit`。

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 如果输入的日期格式不正确，将返回`NaN`
3. 开始日期必须早于或等于结束日期，否则将返回负数
4. 支持跨年日期计算

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
