const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str){
  let result = []
  for (let i = 0; i < str.length; i++) {
    let l = str[i]
    let n = 1
    while (str[i+1] == l) {
      n+=1
      i+=1
    }
    n == 1 ? n = '' : n
    result.push([n,l])
  }
  return result.map(a => a.join('')).join('')
}

module.exports = {
  encodeLine
};
