const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('').sort()
  let arr2 = s2.split('').sort()
  let checkArr = [...new Set(s1+s2)]
  let counter = 0
  checkArr.forEach(a=> {
      if ( arr1.includes(a) && arr2.includes(a)) {
          let c1 = arr1.lastIndexOf(a) - arr1.indexOf(a) + 1
          let c2 = arr2.lastIndexOf(a) - arr2.indexOf(a) + 1
          console.log( c1, c2, a,arr1 , arr2, )
          c1 - c2 <= 0 ? counter += c1 : counter +=c2
      }
  })
  return counter
}

module.exports = {
  getCommonCharacterCount
};
