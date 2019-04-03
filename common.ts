/**
 * 判断 url 是否为 http[s]
 * @param {string} 待判断的 url
 * @returns {boolean}
 */
export const isHttpUrl = (url: string) => {
  if (!url) return false
  url = url && url.toLocaleLowerCase()
  return url.indexOf('https://') > -1 || url.indexOf('http://') > -1
}

/**
 * 判断对象是否为空
 * 自身不可枚举的属性不支持
 * @param {Object} 待判断的对象
 * @returns {boolean}
 */
export const isEmptyObject = (object: Object) => {
  if (Object.keys(object).length === 0) return false
  return true
}

/**
 * 获取链接中的指定参数
 * @param {url} 指定的链接
 * @param {key} 指定参数字段
 * @returns {string} 
 */
export const getValueFromUrl = (url: string, key: string) => {
  if (!url) return ''
  let [queryIndex, hashIndex, search, value] = [url.indexOf('?'), url.indexOf('#'), '', '']
  if (queryIndex > -1) {
    if (hashIndex > -1) {
      if (hashIndex > queryIndex) {
        search = url.substring(queryIndex + 1, hashIndex)
      } else {
        console.log('链接错误')
      }
    } else {
      search = url.substr(queryIndex + 1)
    }
  }
  search.split('&').map(item => {
    if (key === item.split('=')[0]) {
      value = item.split('=')[1]
    }
  })
  return value
}