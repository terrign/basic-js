const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(m) {
  if (Array.isArray(m)) {
    let arr = []
    m.forEach(a => typeof(a) == 'string' ? arr.push(a.replace(/ /g,'').toUpperCase().slice(0,1)) : undefined)
    return arr.sort().join('') 
  } else return false
}

module.exports = {
  createDreamTeam
};
