// 1、计算字符串中指定字符出现的次数
const charInCounts = (str: string, char: string): number => {
  return str.split(char).length - 1;
};

export { charInCounts };
