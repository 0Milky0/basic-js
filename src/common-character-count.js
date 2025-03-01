const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = [];
  let s1Arr = s1.split('');
  for(let i = 0; i < s2.length; i++) {
    if(s1Arr.indexOf(s2[i]) !== -1) {
      s1Arr.splice(s1Arr.indexOf(s2[i]), 1);
      arr.push(s2[i]);
    }
  }
  return arr.length;
}

module.exports = {
  getCommonCharacterCount
};