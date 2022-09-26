// const {tjType} = require('../static/cjs')
// const {tjType} = require('../static/esm')
// import {tjType} from '../static/esm'
// console.log(tjType)
// console.log(tjType.getType(2))
// console.log(tjType.getType(false))
// console.log(tjType.getType(()=>{}))
// console.log(tjType.getType({}))
// console.log(tjType.getType([]))
// console.log(tjType.getType(0/1))
// console.log(tjType.getType(2.605))
// console.log(tjType.getType(new Date))
// console.log(tjType.getType(1/0))
// console.log(tjType.getType(2n))
// console.log(tjType.getType(Symbol(4)))
// console.log(tjType.getType(null))
// console.log(tjType.getType(undefined))
// console.log(tjType.getType())
// console.log(tjType.getArrayAllType([]))
// console.log(tjType.getArrayTypeDetail([5,1/0,[],true,5.02,()=>{}],'number'))
// console.log(tjType.getObjectAllType({a:1/0,b:true,c:6.02,d:()=>{}}))
// console.log(tjType.getObjectTypeDetail({a:1/0,b:true,c:6.02,d:()=>{}},'number'))

const {getObjectTypeDetail} = require('tj-jstools')
console.log(getObjectTypeDetail({
  a: true,
  b: null,
  c: undefined,
  d: 6,
  e: 6.01,
  f: 1/0,
  g: {},
  h: [],
  i: () => {}
},'number'))
// tj.isBoolean()
// let url = `http://www.baidu.com?name=Jack#9&age=${JSON.stringify({l:'a'})}&sex=men&wife=Lucy&p=${encodeURI('中国')}#9`

// let rtn = getUrlParams()

// console.log(rtn)