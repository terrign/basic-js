const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (bool) {
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      this.isReverse = bool === false ? true : false
  }

  encrypt(message,key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase().split('')
    let keyString = key.toUpperCase().repeat(Math.ceil(message.length/key.length)).slice(0,message.length).split('')
    let result =  message.map((sym,index) => {
      if (this.alphabet.indexOf(sym) === -1) {
          keyString.splice(index, 0, sym)
          return sym
      }
      let encryptedLeterNumber = (this.alphabet.indexOf(sym) + this.alphabet.indexOf(keyString[index])) % 26
      return this.alphabet[encryptedLeterNumber]
    })
    return this.isReverse ? result.reverse().join('') : result.join('')
  }

  decrypt(message,key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase().split('')
    let keyString = key.toUpperCase().repeat(Math.ceil(message.length/key.length)).slice(0,message.length).split('')
    let result =  message.map((sym,index) => {
      if (this.alphabet.indexOf(sym) === -1) {
        keyString.splice(index, 0, sym)
        return sym
      }
      let decryptedLeterNumber = (this.alphabet.indexOf(sym) + 26 - this.alphabet.indexOf(keyString[index])) % 26
      return this.alphabet[decryptedLeterNumber]
    })
    return this.isReverse ? result.reverse().join('') : result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
