function formatChineseRMB(money: number) {
  //汉字的数字
  const cnNums: string[] = [
    "零",
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖",
  ];
  //基本单位
  const cnIntRadice: string[] = ["", "拾", "佰", "仟"];
  //对应整数部分扩展单位
  const cnIntUnits: string[] = ["", "万", "亿", "兆"];
  //对应小数部分单位
  const cnDecUnits: string[] = ["角", "分", "毫", "厘"];
  //整数金额时后面跟的字符
  const cnInteger = "整";
  //整型完以后的单位
  const cnIntLast = "元";
  //最大处理的数字
  const maxNum = 999999999999999.9999;
  //金额整数部分
  let integerNum = "";
  //金额小数部分
  let decimalNum = "";
  //输出的中文金额字符串
  let chineseStr = "";
  //分离金额后用的数组，预定义
  // let parts: string[] = []
  // 传入的参数为空情况
  if (typeof money === "undefined") {
    return "";
  }
  // 去除前面的0
  // money = Number(money.toString().replace(/\b(0+)/gi,""))
  // 当数字 < 0 时，取绝对值
  money = parseFloat(Math.abs(money).toString());
  if (money >= maxNum) {
    return "";
  }
  // 传入的参数为0情况
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转为字符串
  const moneyStr: string = money.toString();
  // indexOf 检测某字符在字符串中首次出现的位置 返回索引值（从0 开始） -1 代表无
  if (moneyStr.indexOf(".") == -1) {
    integerNum = moneyStr;
    decimalNum = "";
  } else {
    const parts: string[] = moneyStr.split(".");
    integerNum = parts[0] as string;
    decimalNum = (parts[1] as string).substring(0, 4);
  }
  //转换整数部分
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    const IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      const n = integerNum.substring(i, i + 1);
      const p = IntLen - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n == "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    // 最后+ 元
    chineseStr += cnIntLast;
  }
  // 转换小数部分
  if (decimalNum != "") {
    const decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      const n = decimalNum.substring(i, i + 1);
      if (n != "0") {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == "") {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == "") {
    chineseStr += cnInteger;
  }

  return chineseStr;
}

export { formatChineseRMB };
