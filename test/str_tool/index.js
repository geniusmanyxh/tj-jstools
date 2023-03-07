const { createRandomVerifyCode } = require("tj-jstools");

const code = createRandomVerifyCode(10, []);

console.log(code);

// console.log("0123456789".split("").concat("123".split("")))
