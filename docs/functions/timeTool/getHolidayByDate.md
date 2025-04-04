---
title: 时间操作
titleTemplate: getHolidayByDate
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 根据指定日期获取节假日信息

## 1. 函数引入

```js
import { getHolidayByDate } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const getHolidayByDate: (date: string) => string | null;
```

## 3. 使用示例

### 3.1 获取指定日期的节假日

```ts
const holiday = getHolidayByDate('2023-01-01');
console.log(holiday); // 输出: "元旦"
```

### 3.2 处理非节假日

```ts
const holiday = getHolidayByDate('2023-01-02');
console.log(holiday); // 输出: null
```

### 3.3 处理边界日期

```ts
const holiday = getHolidayByDate('2023-10-01');
console.log(holiday); // 输出: "国庆节"
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| date | string | 是 | 要查询的日期，格式为`YYYY-MM-DD` |

## 5. 返回值

返回一个`string | null`，表示对应的节假日名称，如果指定日期不是节假日则返回`null`。

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 节假日数据基于中国的法定节假日安排
3. 如果输入的日期格式不正确，将返回`null`
4. 支持闰年日期

::: tip
可以使用`dayjs`库对输入的日期进行格式化后再传入该函数
:::
