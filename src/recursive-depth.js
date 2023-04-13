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

  constructor () {
    this.maxDepth = 1;
    this.currentDepth = 1
  }

  calculateDepth(arr) {
    arr.forEach(a => {
      if (Array.isArray(a))  {
        this.currentDepth++
        this.calculateDepth(a)
      }
      this.maxDepth = Math.max(this.maxDepth, this.currentDepth)
      this.currentDepth = 1
    })
    return this.maxDepth
  }
}

module.exports = {
  DepthCalculator
};
