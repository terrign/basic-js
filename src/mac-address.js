const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  if(typeof(n) != 'string') return false
  let arr = n.split('-').map(a=> parseInt(a, 16))
  let isError = 0
  arr.forEach(a=> {
      if (isNaN(a) || a === null || a === undefined) isError++
      console.log(arr)
  })
  if (arr.length != 6) isError++
  return isError > 0 ? false : true
}
module.exports = {
  isMAC48Address
};
