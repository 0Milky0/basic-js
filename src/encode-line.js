const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let res = '';
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(arr.includes(str[i])) {
      count++;
      arr.splice(arr.indexOf(str[i]), 1);
    } 
    if(str[i] !== str[i + 1]) {
			if (count == 1) {
				res += str[i];
			} else {
				res += count + str[i];
			}
			count = 0;
		}
  }
  return res;
}

module.exports = {
  encodeLine
};
