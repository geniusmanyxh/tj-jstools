const { createRandomVerifyCode } = require("tj-jstools");

const code = createRandomVerifyCode(6, ["S", "s", "n"]);

console.log(code);

// console.log("0123456789".split("").concat("123".split("")))
