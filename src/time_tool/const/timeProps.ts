/**
 * @description 季节属性
 * @type {ISeasonProp}
 * @property {number} index - 季节的索引
 * @property {string} name - 季节的名称
 * @property {string} prop - 季节的属性
 * @property {string} description - 季节的描述
 */
interface ISeasonProp {
  index: number;
  name: string;
  prop: string;
  description: string;
}

/**
 * @description 季节属性
 * @type {ISeasonProp[]}
 */
const seasonProps: ISeasonProp[] = [
  {
    index: 0,
    name: "春",
    prop: "spring",
    description: "春季",
  },
  {
    index: 1,
    name: "夏",
    prop: "summer",
    description: "夏季",
  },
  {
    index: 2,
    name: "秋",
    prop: "autumn",
    description: "秋季",
  },
  {
    index: 3,
    name: "冬",
    prop: "winter",
    description: "冬季",
  },
];

export { seasonProps };
export type { ISeasonProp };
