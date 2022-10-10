const { findTreeData , toTreeData , treeToFlat} = require('tj-jstools') 


const testArr = [
  {
    id:'1',
    pid:'0',
    label:'省/直辖市',
    value:'重庆'
  },
  {
    id:'2',
    pid:'0',
    label:'省/直辖市',
    value:'四川'
  },
  {
    id:'3',
    pid:'2',
    label:'市/区',
    value:'成都'
  },
  {
    id:'4',
    pid:'1',
    label:'市/区',
    value:'九龙坡'
  },
  {
    id:'5',
    pid:'1',
    label:'市/区',
    value:'大渡口'
  },
  {
    id:'6',
    pid:'4',
    label:'镇/街道',
    value:'九龙镇'
  }
]

const treeData = toTreeData(testArr)
const flatTree = treeToFlat(treeData)
const findTree = findTreeData(testArr,{value:'九龙坡'})
console.log(JSON.stringify(flatTree))
console.log(JSON.stringify(treeData))
console.log(JSON.stringify(findTree))