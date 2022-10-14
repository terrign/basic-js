const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, obj) {
  if (obj.repeatTimes === undefined) obj.repeatTimes = 1
  if (obj.separator === undefined) obj.separator = '+'
  if (obj.addition === undefined) obj.addition = ''
  if (obj.additionRepeatTimes === undefined) obj.additionRepeatTimes = 1
  if (obj.additionSeparator === undefined) obj.additionSeparator = '|'
  let addStr = (obj.addition + obj.additionSeparator).repeat(obj.additionRepeatTimes)
  addStr = addStr.slice(0, (addStr.length - obj.additionSeparator.length))
  let resStr = (str + addStr + obj.separator).repeat(obj.repeatTimes)
  resStr = resStr.slice(0, (resStr.length - obj.separator.length))
  return resStr
}

module.exports = {
  repeater
};
