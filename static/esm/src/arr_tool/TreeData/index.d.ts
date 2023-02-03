declare type treeOption = {
    pidName: string;
    idName: string;
    childName: string;
    initPid: string | number;
};
/**
 * 将目标数组转换为tree树形数组
 * @param targetArr
 * @param options
 * @returns 返回一个treeData
 */
declare const toTreeData: (targetArr: any[], options?: treeOption) => any[];
/**
 * 归树形数据扁平化
 * @param targetArr
 * @param childName
 * @returns
 */
declare const treeToFlat: (targetArr: any[], childName?: string) => any[];
/**
 * 根据条件查询树节点数据
 * @param targetArr
 * @param conditions
 * @param cb
 * @param childName
 * @returns
 */
declare const findTreeData: (targetArr: any[], conditions: object, cb?: Function, childName?: string) => {} | undefined;
export { toTreeData, treeToFlat, findTreeData };
