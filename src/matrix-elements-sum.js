const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(m) {
  let sum = m[0].reduce((acc,a) => acc + a, 0)
  for (let r = 1; r < m.length; r++) {
      for (let c = 0; c < m[0].length; c++) {
          if(m[r-1][c] != 0) sum +=m[r][c]
          
          console.log( r, c)
      }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
