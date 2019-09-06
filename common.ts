/**
 * 常用函数封装
 * Create by jessie
 * updated at 2019-09-03
 */

const util: Object = {
  /**
   * 生成指定随机数
   * @param min
   * @param max
   * @returns{number}
   */
  randomNum: (min: number, max: number): number => {
    if (min > max) [min, max] = [max, min]
    return ~~(Math.random() * (max - min + 1)) + min
  },
  /**
   * 判断 url 是否为 http[s]
   * @param {string} 待判断的 url
   * @returns {boolean}
   */
  isHttpUrl: (url: string): boolean => {
    if (!url) return false
    url = url && url.toLocaleLowerCase()
    return url.indexOf('https://') > -1 || url.indexOf('http://') > -1
  },

  /**
   * 获取链接中的指定参数
   * @param {url} 指定的链接
   * @param {key} 指定参数字段
   * @returns {string}
   */
  // TODO to be confimed...
  getValueFromUrl: (url: string, key: string): string => {
    if (!url) return ''
    let [queryIndex, hashIndex, search, value] = [url.indexOf('?'), url.indexOf('#'), '', '']
    if (queryIndex <= -1) return
    if (hashIndex > -1) {
      if (hashIndex > queryIndex) {
        search = url.substring(queryIndex + 1, hashIndex)
      }
    } else {
      search = url.substr(queryIndex + 1)
    }
    search.split('&').map((item) => {
      if (key === item.split('=')[0]) {
        value = item.split('=')[1]
      }
    })
    return value
  },

  /**
   * 判断变量是否为指定类型[函数,对象,数组,字符串...]
   * @param target 待判断的对象[函数,对象,数组,字符串...]
   * @param type 指定的类型 Function,Object,Array,String,Number,Null,Undefined,Symbol
   * @returns {boolean}
   */
  isTarget: (target: any, type: string): boolean => {
    if(!type) return false
    type = type.trim().split('').map((v, k) => {k === 0 ? v.toLocaleUpperCase() : v}).join('')
    return `[object ${type}]` === Object.prototype.toString.call(target)
  },

  /**
   * 判断对象是否为空
   * @param {Object} 待判断的对象
   * @returns {boolean}
   */
  isEmptyObject: (object: Object): boolean => {
    return Object.keys ? Object.keys(object).length === 0 : Object.getOwnPropertyNames(object).length === 0
  }
}

export default util
