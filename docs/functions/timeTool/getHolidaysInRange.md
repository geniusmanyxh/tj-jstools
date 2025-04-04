---
title: 时间操作
titleTemplate: getHolidaysInRange
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 获取指定日期范围内的所有节假日

## 1. 函数引入

```js
import { getHolidaysInRange } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getHolidaysInRange: (startDate: string, endDate: string) => Array<string>;
```

## 3. 使用示例

### 3.1 获取指定日期范围内的节假日

```ts
const holidays = getHolidaysInRange('2023-01-01', '2023-12-31');
console.log(holidays);
// 输出: ["2023-01-01", "2023-01-22", "2023-01-23", ...]
```

### 3.2 处理跨年日期范围

```ts
const holidays = getHolidaysInRange('2022-12-25', '2023-01-05');
console.log(holidays);
// 输出: ["2022-12-25", "2023-01-01"]
```

### 3.3 处理无节假日的日期范围

```ts
const holidays = getHolidaysInRange('2023-02-01', '2023-02-28');
console.log(holidays);
// 输出: []
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| startDate | string | 是 | 开始日期，格式为`YYYY-MM-DD` |
| endDate | string | 是 | 结束日期，格式为`YYYY-MM-DD` |

## 5. 返回值

返回一个`Array<string>`，包含指定日期范围内的所有节假日日期，格式为`YYYY-MM-DD`。

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 节假日数据基于中国的法定节假日安排
3. 如果输入的日期格式不正确，将返回空数组
4. 支持跨年日期范围查询
5. 返回的日期数组已按时间顺序排序

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
