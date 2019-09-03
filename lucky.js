// 数组扁平化
const faltten = array => [].concat(...array.map(item => Array.isArray(item) ? faltten(item) : item))