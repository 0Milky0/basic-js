const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp = []
  arr.forEach(el => {
    if(!(el == -1)) temp.push(el);
  })
  temp.sort((a,b) => a - b);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == -1) continue;
    arr.splice(i, 1, temp[0])
    temp.splice(0, 1);
  }
  return arr;
}

module.exports = {
  sortByHeight
};