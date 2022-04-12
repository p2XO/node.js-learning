const _ = require("lodash")
const items = [3 ,[5,7,9,[6,10,[34,66]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)