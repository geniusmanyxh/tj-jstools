---
title: 时间操作
titleTemplate: getStartEndTimeByPeriod
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 根据指定的时间段获取开始时间和结束时间

## 1. 函数引入

```js
import { getStartEndTimeByPeriod } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getStartEndTimeByPeriod: (period: string) => { start: Date; end: Date };
```

## 3. 使用示例

### 3.1 获取本周的开始和结束时间

```ts
const { start, end } = getStartEndTimeByPeriod('week');
console.log(start); // 输出: 本周的开始时间
console.log(end);   // 输出: 本周的结束时间
```

### 3.2 获取本月的开始和结束时间

```ts
const { start, end } = getStartEndTimeByPeriod('month');
console.log(start); // 输出: 本月的开始时间
console.log(end);   // 输出: 本月的结束时间
```

### 3.3 获取本年的开始和结束时间

```ts
const { start, end } = getStartEndTimeByPeriod('year');
console.log(start); // 输出: 本年的开始时间
console.log(end);   // 输出: 本年的结束时间
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| period | string | 是 | 时间段，可选值为`'week'`、`'month'`、`'year'` |

## 5. 返回值

返回一个对象，包含以下属性：
- `start`: Date类型，表示指定时间段的开始时间
- `end`: Date类型，表示指定时间段的结束时间

## 6. 注意事项

1. 输入的`period`参数必须为`'week'`、`'month'`或`'year'`，否则将抛出错误
2. 返回的时间对象为本地时间
3. 开始时间为指定时间段的00:00:00，结束时间为指定时间段的23:59:59

::: tip
可以使用`dayjs`库对返回的时间对象进行进一步处理
:::
