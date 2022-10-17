const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray) throw new Error("'arr' parameter must be an instance of the Array!")
  let arrayClone = []; arr.forEach(a => arrayClone.push(a))
  let params = ['--discard-next','--discard-prev','--double-next','--double-prev']
  const findArrayParam = () => {
      let paramID = -1
      let paramArrayIndex = -1
      params.forEach((a,i) => {
          if (arrayClone.includes(a)) {
              paramID = i
              paramArrayIndex = arrayClone.indexOf(a)
          }
      })
      return paramArrayIndex == -1 || paramID == -1? false : [paramID,paramArrayIndex]
  }
  while (findArrayParam()) {

      let ids = findArrayParam()
      switch (ids[0]) {
          case 0: arrayClone.splice(ids[1], 2); break;
          case 1: ids[1] == 0 ? arrayClone.splice(0,1) : arrayClone.splice(ids[1] - 1, 2); break;
          case 2: ids[1] == arrayClone.length -1 ? arrayClone.splice(ids[1],1) : arrayClone.splice(ids[1],1, arrayClone[ids[1] + 1]); break;
          case 3: ids[1] == 0 ? arrayClone.splice(0,1) : arrayClone.splice(ids[1],1, arrayClone[ids[1] - 1]); break;
      }
  }
  return arrayClone
}

module.exports = {
  transform
};
