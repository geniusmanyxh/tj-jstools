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

// const {getObjectTypeDetail} = require('tj-jstools')
// console.log(getObjectTypeDetail({
//   a: true,
//   b: null,
//   c: undefined,
//   d: 6,
//   e: 6.01,
//   f: 1/0,
//   g: {},
//   h: [],
//   i: () => {}
// },'number'))
// tj.isBoolean()
// let url = `https://jstools.itbooks.work/functions?tool=urlTool&fun=getUrlParams#code`

// let urll = url.substring(url.lastIndexOf("#"))

// console.log(urll)
// const testUrlP = {
//     tool: 'newUrltool',
//     name: 'tj',
//     city: '重庆'
//   }
// const {converParamsToUrl,getUrlParams,getType} = require('tj-jstools')
// let key;
// console.log(getType(key))
// let rtn = getUrlParams('tool',{url,parseUrlType:'URLSearchParamsType'})

// console.log(rtn)
// console.log(converParamsToUrl(testUrlP,{hashValue:'#address',url,encodeUrlType:'encodeURIComponent'}))


class Myqueue {
  constructor() {
      this.len = 0;
      this.head = null;
      this.tail = null;
  }
  /**
   * 入队，在tail位置
   */
  add(n) {
      const linkNode = {
          value: n,
          next: null
      };
      // 处理head，如果head是null，说明当前队列是个空的
      if (this.head == null) {
          this.head = linkNode;
      }
      // 处理tail
      const tailNode = this.tail;
      if (tailNode) {
          tailNode.next = linkNode;
      }
      // 将新的节点，作为队尾部
      this.tail = linkNode;
      // 记录长度+1
      this.len++;
  }
  /**
   * 出队，在head位置
   */
  delete() {
      // 获取当前head，如果是null，说明是个空队列，返回null
      const headNode = this.head;
      if (headNode == null)
          return null;
      if (this.len <= 0)
          return null;
      // 当不是空队列时，取值
      const value = headNode.value;
      // 处理head,让head指针指向下一个元素, 当前被删除的节点由js的gc处理
      this.head = headNode.next;
      // 记录长度-1
      this.len--;
      return value;
  }
  get length() {
      // length要单独获取，不能遍历链表获取（否则时间复杂度太高O（n））
      return this.len;
  }
}

class MyQueue1 {
  constructor() {
      this.stack1 = [];
      this.stack2 = [];
  }
  add(num) {
      this.stack1.push(num);
  }
  delete() {
      let res;
      const stack1 = this.stack1;
      const stack2 = this.stack2;
      // 将stck1 所有元素移动到stack2中
      while (stack1.length) {
          const n = stack1.pop();
          if (n != null) {
              stack2.push(n);
          }
      }
      // stack2 pop
      res = stack2.pop();
      // 将 stack2 所有元素“还给”stack1
      while (stack2.length) {
          const n = stack2.pop();
          if (n != null) {
              stack1.push(n);
          }
      }
      return res || null;
  }
  get length() {
      return this.stack1.length;
  }
}


const q = new Myqueue();
console.time('link with queue');
for (let i = 0; i < 10 * 10000; i++) {
  q.add(i);
}
for (let i = 0; i < 10 * 10000; i++) {
  q.delete();
}
console.timeEnd('link with queue');

const q1 = new MyQueue1();
console.time('stack with queue');
for (let i = 0; i < 10 * 10000; i++) {
  q1.add(i);
}
for (let i = 0; i < 10 * 10000; i++) {
  q1.delete();
}
console.timeEnd('stack with queue');

const arr = [];
console.time('link with array');
for (let i = 0; i < 10 * 10000; i++) {
  arr.push(i);
}
for (let i = 0; i < 10 * 10000; i++) {
  arr.shift();
}
console.timeEnd('link with array');
