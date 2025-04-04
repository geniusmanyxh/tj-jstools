---
title: 时间操作
titleTemplate: calculateAge
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能描述：** 根据出生日期计算年龄

## 1. 函数引入

```js
import { calculateAge } from 'tj-jstools'
```

## 2. 函数声明

```ts
declare const calculateAge: (birthDate: string) => number;
```

## 3. 使用示例

### 3.1 基本使用

```ts
const age = calculateAge('1990-01-01');
console.log(age); // 输出当前年龄
```

### 3.2 计算未来日期

```ts
const age = calculateAge('2023-01-01');
console.log(age); // 输出: 0
```

### 3.3 计算过去日期

```ts
const age = calculateAge('1950-01-01');
console.log(age); // 输出: 73 (假设当前年份为2023)
```

## 4. 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| birthDate | string | 是 | 出生日期，格式为YYYY-MM-DD |

## 5. 返回值

返回一个`number`类型的整数，表示计算出的年龄。

## 6. 注意事项

1. 输入的日期字符串必须符合ISO 8601格式
2. 计算基于当前日期，结果会随时间变化
3. 如果输入未来日期，返回值为0
4. 计算时忽略时间部分，仅考虑日期

::: tip
该函数适用于计算周岁年龄，不考虑具体的出生时间
:::
