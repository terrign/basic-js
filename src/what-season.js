const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (date.getMonth != Date.prototype.getMonth) throw new Error('Invalid date!')
  try {
      let month = date.getMonth()
      return month <= 1 || month == 11 ? 'winter' : month >= 2 && month <= 4 ? 'spring' : month >= 5 && month <=7 ? 'summer' : 'fall'
  } catch (error) {
      throw new Error('Invalid date!')
  }

}

module.exports = {
  getSeason
};
