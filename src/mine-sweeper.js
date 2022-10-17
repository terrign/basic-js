const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper( matrix ) {
  let setup = matrix.map(a=> a.map(v => v == true ? 'mine' : v))
  for (let r = 0; r < setup.length; r++) {
      for (let c = 0; c < setup[0].length; c++) {
          if (setup[r][c] !== 'mine') {
              let counter = 0
              if(setup[r][c-1] == 'mine') counter += 1
              if(setup[r][c+1] == 'mine') counter += 1
              if ( r !== 0) {
                  if(setup[r-1][c] == 'mine') counter += 1
                  if(setup[r-1][c-1] == 'mine') counter += 1
                  if(setup[r-1][c+1] == 'mine') counter += 1
              }
              if ( r !== setup.length-1) {
                  if(setup[r+1][c+1] == 'mine') counter += 1
                  if(setup[r+1][c] == 'mine') counter += 1
                  if(setup[r+1][c-1] == 'mine') counter += 1
              }
              setup[r][c] = counter
          }
      }
  }
  setup = setup.map(a=> a.map(v => v == 'mine' ?  1 : v))
  return setup
}

module.exports = {
  minesweeper
};
