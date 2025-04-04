---
title: 时间操作
titleTemplate: getNextHoliday
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 获取下一个节假日的日期和名称

## 1. 函数引入

```js
import { getNextHoliday } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getNextHoliday: (date?: string) => { date: string; name: string } | null;
```

## 3. 使用示例

### 3.1 获取下一个节假日

```ts
const nextHoliday = getNextHoliday();
console.log(nextHoliday);
// 输出: { date: "2023-10-01", name: "国庆节" }
```

### 3.2 从指定日期开始获取下一个节假日

```ts
const nextHoliday = getNextHoliday('2023-01-01');
console.log(nextHoliday);
// 输出: { date: "2023-01-22", name: "春节" }
```

### 3.3 处理无节假日的情况

```ts
const nextHoliday = getNextHoliday('2023-12-31');
console.log(nextHoliday);
// 输出: null
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 否 | 起始日期，格式为`YYYY-MM-DD`，默认为当前日期 |

## 5. 返回值

返回一个对象`{ date: string; name: string } | null`，包含下一个节假日的日期和名称，如果指定日期之后没有节假日则返回`null`。

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 节假日数据基于中国的法定节假日安排
3. 如果输入的日期格式不正确，将返回`null`
4. 支持跨年查询

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
