---
title: 时间操作
titleTemplate: getWeekday
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 获取指定日期对应的星期几

## 1. 函数引入

```js
import { getWeekday } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getWeekday: (date?: string) => string;
```

## 3. 使用示例

### 3.1 获取当前日期的星期几

```ts
const weekday = getWeekday();
console.log(weekday); // 输出: "星期一" 或 "星期二" 等
```

### 3.2 获取指定日期的星期几

```ts
const weekday = getWeekday('2023-10-01');
console.log(weekday); // 输出: "星期日"
```

### 3.3 处理跨年日期

```ts
const weekday = getWeekday('2023-01-01');
console.log(weekday); // 输出: "星期日"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 否 | 要查询的日期，格式为`YYYY-MM-DD`，默认为当前日期 |

## 5. 返回值

返回一个`string`，表示指定日期对应的星期几，可能的值为：
- "星期一"
- "星期二"
- "星期三"
- "星期四"
- "星期五"
- "星期六"
- "星期日"

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 如果输入的日期格式不正确，将返回当前日期的星期几
3. 支持跨年日期计算

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
