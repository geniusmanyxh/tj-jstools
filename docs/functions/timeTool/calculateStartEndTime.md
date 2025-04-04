---
title: 时间操作
titleTemplate: calculateStartEndTime
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 计算指定时间维度的开始和结束时间

## 1. 函数引入

```js
import { calculateStartEndTime } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const calculateStartEndTime: (
  baseDate: dayjs.Dayjs,
  dimension: TimeDimension
) => { start: dayjs.Dayjs; end: dayjs.Dayjs };
```

## 3. 使用示例

### 3.1 计算当天的开始和结束时间

```ts
const { start, end } = calculateStartEndTime(dayjs(), 'day');
console.log(start.format('YYYY-MM-DD HH:mm:ss')); // 输出当天的开始时间
console.log(end.format('YYYY-MM-DD HH:mm:ss')); // 输出当天的结束时间
```

### 3.2 计算本周的开始和结束时间

```ts
const { start, end } = calculateStartEndTime(dayjs(), 'week');
console.log(start.format('YYYY-MM-DD')); // 输出本周的第一天
console.log(end.format('YYYY-MM-DD')); // 输出本周的最后一天
```

### 3.3 计算本月的开始和结束时间

```ts
const { start, end } = calculateStartEndTime(dayjs(), 'month');
console.log(start.format('YYYY-MM-DD')); // 输出本月的第一天
console.log(end.format('YYYY-MM-DD')); // 输出本月的最后一天
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| baseDate | dayjs.Dayjs | 是 | 基准日期 |
| dimension | TimeDimension | 是 | 时间维度，支持：'day'、'week'、'month'、'quarter'、'year' |

## 5. 返回值

返回一个包含`start`和`end`属性的对象，分别表示指定时间维度的开始和结束时间。

## 6. 注意事项

1. `baseDate`参数必须是一个`dayjs.Dayjs`对象
2. 返回的时间对象可以继续使用`dayjs`的方法进行格式化或其他操作
3. 计算周的开始和结束时间基于ISO周标准（周一开始）

::: tip
建议使用`dayjs`的`format`方法将返回的`Dayjs`对象转换为需要的字符串格式
:::
