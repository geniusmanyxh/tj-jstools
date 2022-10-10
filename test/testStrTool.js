const { charInCounts,DTMobile} = require('tj-jstools') 

const str = 'www.itbooks.work?name=jstool&p1=js&p2=tool#code'
console.log(charInCounts(str,'@'))

const phone = 157666695272

console.log(DTMobile(phone))