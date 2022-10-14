const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let array = n.toString().split('')
  let replaceValue = array.find((v, index, arr) => v - arr[index + 1] < 0)
  if (replaceValue == undefined) {
      return +array.sort((a,b) => a-b).slice(1).join('')
  } else  return +n.toString().replace(replaceValue,'')
}


module.exports = {
  deleteDigit
};
