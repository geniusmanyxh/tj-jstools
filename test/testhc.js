import { newStorage } from "../static/esm/index.js";

const ses = newStorage("session", { expireTime: 3, unitTime: "s" });
ses.setFun("test", JSON.stringify({ a: 1 }));
ses.setFun("tjx.test", JSON.stringify({ a: 1 }));
console.log(ses.existFun("test"));
console.log(ses.allKey());
console.log(ses.getFun("tj.test"));
console.log(ses.getFun("IsThisFirstTime_Log_From_LiveServer"));
console.log(ses.delFun("tj.test"));

setTimeout(() => {
  console.log(ses.clearFun({ prefix: "tjx" }));
}, 2000);
// setTimeout(() => {
//   console.log(ses.getFun("test"));
// }, 4000);
