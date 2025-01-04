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
  if (!(arr instanceof Array))
		throw new Error("'arr' parameter must be an instance of the Array!")
  let res = [];
  for(let i = 0; i < arr.length; i++) {
	if(arr[i] == '--discard-next' || arr[i] == '--double-next' &&
		i === arr.length - 1) continue;
	if(arr[i] == '--double-prev' && i == 0) continue;

	if(arr[i-1] == '--discard-next') {
		i++;
	} else if(arr[i] == '--discard-prev') {
		res.pop();
	} else if(arr[i] == '--double-next') {
		res.splice(arr.length - 1, 0, arr[i + 1])
	} else if (arr[i] == '--double-prev') {
		res.splice(arr.length - 1, 0, arr[i - 1])
	} else {
		res.push(arr[i])
	}
  }  
  return res;
}
// 	switch (arr[index]) {
// 	  case '--discard-next':
// 		if (arr[index + 1]) index++;
// 		break;
// 	  case '--discard-prev':
// 		res.splice(cont, 1)
// 		if (arr[index - 1] && arr[index - 1] == res[cont-1]) res.splice(cont - 1, 1)
// 		break;
// 	  case '--double-next':
// 		res.splice(cont, 1)
// 	  	//console.log(res[cont])		
// 		if (arr[index + 1] && arr[index + 1] == res[cont]) {
// 			console.log("+" + res[cont])
// 			res.splice(cont, 0, arr[index])
// 		}
// 		break;
// 	  case '--double-prev':
// 		res.splice(cont, 1)
// 		if (arr[index - 1] && arr[index - 1] == res[cont - 1]) res.splice(cont - 1, 0, arr[index - 1])
// 		break;
// 	}
// 	res.push(arr[index])
//   }

module.exports = {
  transform
};
transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])