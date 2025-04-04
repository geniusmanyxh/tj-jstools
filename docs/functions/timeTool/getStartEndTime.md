---
title: 时间操作
titleTemplate: getStartEndTime
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 获取指定日期的开始时间和结束时间

## 1. 函数引入

```js
import { getStartEndTime } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getStartEndTime: (date?: string) => { start: Date; end: Date };
```

## 3. 使用示例

### 3.1 获取当前日期的开始和结束时间

```ts
const { start, end } = getStartEndTime();
console.log(start); // 输出: 当前日期的开始时间
console.log(end);   // 输出: 当前日期的结束时间
```

### 3.2 获取指定日期的开始和结束时间

```ts
const { start, end } = getStartEndTime('2023-10-01');
console.log(start); // 输出: 2023-10-01 00:00:00
console.log(end);   // 输出: 2023-10-01 23:59:59
```

### 3.3 处理跨年日期

```ts
const { start, end } = getStartEndTime('2023-12-31');
console.log(start); // 输出: 2023-12-31 00:00:00
console.log(end);   // 输出: 2023-12-31 23:59:59
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 否 | 要查询的日期，格式为`YYYY-MM-DD`，默认为当前日期 |

## 5. 返回值

返回一个对象，包含以下属性：
- `start`: Date类型，表示指定日期的开始时间（00:00:00）
- `end`: Date类型，表示指定日期的结束时间（23:59:59）

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 如果输入的日期格式不正确，将返回当前日期的开始和结束时间
3. 支持跨年日期
4. 返回的时间对象为本地时间

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
