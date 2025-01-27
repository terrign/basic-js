const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    if (arr) {
    let current = 1
    let max = 1
    const f = (arr) => {
      arr.forEach(a =>  {
        if (Array.isArray(a)) {
          current++
          f(a)
        }
      })
      max = Math.max(max, current)
      current = 1
    }
    f(arr)
    this.calculateDepth(false)
    this.calculateDepth(false)
    return max
    }
   }

}

module.exports = {
  DepthCalculator
};
