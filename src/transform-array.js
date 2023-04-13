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
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
    let arrCopy = Array.from(arr)
    let params = ['--discard-next','--discard-prev','--double-next','--double-prev']
    let res  = []
    for (let i = 0; i < arrCopy.length; i++) {
        if (params.indexOf(arrCopy[i]) !== -1) {
            switch (arrCopy[i]) {
                case (params[0]): {
                    if (arrCopy[i+1]) {
                        res.push(undefined,undefined)
                        i++
                    }
                    break;
                }
                case (params[1]): {
                    if(arrCopy[i-1]) {
                        res.splice(-1, 1, ...[undefined,undefined])
                    }
                    break;
                }
                case (params[2]): {
                    if(arrCopy[i+1]) {
                        res.push(arrCopy[i+1],arrCopy[i+1])
                        i++
                    }
                    break;
                }
                case (params[3]) : {
                    console.log(res, arrCopy, i)
                    if(res[i-1]) {
                        res.push(arrCopy[i-1])
                    }
                    break
                }
            }
            continue
        } res.push(arrCopy[i])
    }
    return res.filter(a => a)
}

module.exports = {
  transform
};
