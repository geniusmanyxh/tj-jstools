function numberThousandsFormat(num: number, decimal: number = -1) {
  if (typeof num !== 'number') {
    return undefined
  }

  let n: number = num
  let r: string = ''
  let temp: number
  do {
    // 求模的值，用于获取高三位，这里可能有小数
    let mod = n % 1000
    // 值是不是大于1，是继续的条件
    n = n / 1000
    // 高三位
    temp = ~~mod
    // 1. 填充 : n>1 循环未结束， 就要填充为比如，1 => 001,
    // 不然 1 001， 就会变成 '11',
    // 2. 拼接 ","
    r = (n >= 1 ? `${temp}`.padStart(3, '0') : temp) + (!!r ? ',' + r : '')
  } while (n >= 1)

  let sNum = ''
  if (decimal >= 0) {
    sNum += num.toFixed(decimal)
  } else {
    sNum += num
  }

  let idx = sNum.indexOf('.')
  // 拼接小数部分，
  if (idx >= 0) {
    r += sNum.substring(idx)
  }
  return r
}

export {numberThousandsFormat}