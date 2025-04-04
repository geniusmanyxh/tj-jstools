---
title: 时间操作
titleTemplate: addTime
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 在指定日期上增加时间量

## 1. 函数引入

```js
import { addTime } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const addTime: (
  date: string,
  amount: number,
  unit: dayjs.ManipulateType
) => dayjs.Dayjs;
```

## 3. 使用示例

### 3.1 基本使用

```ts
const newDate = addTime('2023-01-01', 1, 'day');
console.log(newDate.format('YYYY-MM-DD')); // 输出: "2023-01-02"
```

### 3.2 增加月份

```ts
const newDate = addTime('2023-01-31', 1, 'month');
console.log(newDate.format('YYYY-MM-DD')); // 输出: "2023-02-28"
```

### 3.3 增加年份

```ts
const newDate = addTime('2023-01-01', 1, 'year');
console.log(newDate.format('YYYY-MM-DD')); // 输出: "2024-01-01"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 是 | 要操作的日期字符串 |
| amount | number | 是 | 要增加的时间量 |
| unit | dayjs.ManipulateType | 是 | 时间单位，支持：'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond' |

## 5. 返回值

返回一个`dayjs.Dayjs`对象，表示增加时间后的日期。

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 如果增加月份导致日期超出目标月份的天数，会自动调整为该月的最后一天
3. 支持链式调用，可以连续进行多个时间操作

::: tip
建议使用`dayjs`的`format`方法将返回的`Dayjs`对象转换为需要的字符串格式
:::
