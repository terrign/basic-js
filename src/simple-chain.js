const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length
  },
  addLink(v) {
      this.chain = this.chain.concat(v)
      return this
  },
  removeLink(n) {
      if( typeof n != 'number' || n < 1 || n > this.chain.length ) {
          this.chain = []
          throw new Error (`You can't remove incorrect link!`)
      }
      this.chain.splice(n-1,1)
      return this
  },
  reverseChain() {
      this.chain.reverse();
      return this
  },
  finishChain() {
      let result = this.chain
      this.chain = []
      return result.map(a => `( ${a} )`).join('~~')
  }
};

module.exports = {
  chainMaker
};
