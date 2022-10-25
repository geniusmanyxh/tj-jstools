const { formatChineseRMB,numberThousandsFormat} = require('tj-jstools') 

console.log( formatChineseRMB(555)) // 伍佰伍拾伍元整
console.log( formatChineseRMB(555.00)) // 伍佰伍拾伍元整
console.log( formatChineseRMB(555.25)) // 伍佰伍拾伍元贰角伍分
console.log( formatChineseRMB(+555.25)) // 伍佰伍拾伍元贰角伍分
console.log( formatChineseRMB(-555.2536)) // 伍佰伍拾伍元贰角伍分叁毫陆厘
console.log( formatChineseRMB(545555.2536665)) // 伍拾肆万伍仟伍佰伍拾伍元贰角伍分叁毫陆厘

const ntf = numberThousandsFormat

const ptf = console.log

ptf(ntf(1234565))
ptf(ntf(1234565.256))
ptf(ntf(1234565.256))
ptf(ntf('152225'))