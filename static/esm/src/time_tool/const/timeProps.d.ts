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
declare const seasonProps: ISeasonProp[];
export { seasonProps };
export type { ISeasonProp };
