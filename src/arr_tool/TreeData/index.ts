import { isArray , isObject } from '../../type_tool/objDel'

type treeOption = {
  pidName: string
  idName: string
  childName: string
  initPid: string | number
}

/**
 * 将目标数组转换为tree树形数组
 * @param targetArr
 * @param options
 * @returns 返回一个treeData
 */
const toTreeData = (
  targetArr: any[],
  options: treeOption = {
    pidName: 'pid',
    childName: 'children',
    idName: 'id',
    initPid: '0',
  }
): any[] => {
  if (!isArray(targetArr)) {
    console.warn('请传入一个数组类型的参数')
    return []
  }
  const len = targetArr.length
  if (len < 2) {
    return targetArr
  }

  const treelist: any[] = []
  for (let i = 0; i < len; i++) {
    let param = {}
    if (targetArr[i][options.pidName] == options.initPid) {
      let getArr = toTreeData(targetArr, {
        ...options,
        initPid: targetArr[i][options.idName],
      })
      if (getArr && getArr.length > 0) {
        param[options.childName] = getArr
      }
      param = { ...targetArr[i], ...param }
      treelist.push(param)
    }
  }
  return treelist
}

/**
 * 归树形数据扁平化
 * @param targetArr
 * @param childName
 * @returns
 */
const treeToFlat = (
  targetArr: any[],
  childName: string = 'children'
): any[] => {
  if (!isArray(targetArr)) {
    console.warn('请传入一个数组类型的参数')
    return []
  }
  const len = targetArr.length
  if (len < 1) {
    return targetArr
  }
  const flatArr: any[] = []

  for (let i = 0; i < len; i++) {
    let param = { ...targetArr[i] }
    delete param[childName]
    flatArr.push(param)
    if (targetArr[i][childName] && targetArr[i][childName]?.length) {
      flatArr.push(...treeToFlat(targetArr[i][childName]))
    }
  }

  return flatArr
}

/**
 * 根据条件查询树节点数据
 * @param targetArr 
 * @param conditions 
 * @param cb 
 * @param childName 
 * @returns 
 */
const findTreeData = (targetArr:any[],conditions:object,cb?:Function,childName:string = 'children') => {
  if (!isArray(targetArr)) {
    console.warn('请传入一个数组类型的参数')
    return;
  }
  if (!isObject(conditions)) {
    console.warn('请传入一个JSON对象类型的筛选参数')
    return;
  }
  const len = targetArr.length
  let res = {}
  for (let i = 0; i < len; i++) {
    let flag = true
    for (const key in conditions) {
      if (Object.prototype.hasOwnProperty.call(conditions, key)) {
        const tempCon = conditions[key];
        if (targetArr[i][key] !== tempCon) {
          flag = false
        }
      }
    }

    if (flag) {
      cb && cb(targetArr[i])
      res = targetArr[i]
      return res
    }

    if (targetArr[i][childName]) {
      findTreeData(targetArr[i][childName],conditions,cb,childName)
     }

  }
  return undefined
}

export { toTreeData, treeToFlat, findTreeData }
