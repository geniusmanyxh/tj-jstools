---
title: 数值操作
titleTemplate: numberThousandsFormat
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 数值千分位格式化处理。

## 1-函数引入

```js 
  import { numberThousandsFormat } from 'tj-jstools'
```
## 2-函数声明
```ts
declare function numberThousandsFormat(num: number, decimal?: number): string | undefined;
```

## 3-使用示例

```js
numberThousandsFormat(1234565) // 1,234,565
numberThousandsFormat(1234565.256) // 1,234,565.256
numberThousandsFormat(1234565.256,2) // 1,234,565.26
numberThousandsFormat('12456') // undefined
```
当传入需要处理的参数不是`number`类型时，将返回`undefined`。
第二个参数是处理后的数值需要保留多少为小数，默认值是`-1`, 代表不处理，原来是整数就返回整数，原来是小数就保留原来的小数。