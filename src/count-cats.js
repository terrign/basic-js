const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(m) {
  let counter = 0
  m.forEach(a=> a.forEach(e=> e == '^^' ? counter+=1 : counter=counter))
  return counter;
}

module.exports = {
  countCats
};
