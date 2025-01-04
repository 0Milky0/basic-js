const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  domains.forEach((dom) => {
    arr = dom.split('.').reverse();
    let prop = '';
    for(let i = 0; i < arr.length; i++) {
      prop += `.${arr[i]}`
      if(Object.hasOwn(stats, prop)) {
        stats[prop] += 1;
      } else {
        stats[prop] = 1;
      }
    }
  })
  return stats;
}

module.exports = {
  getDNSStats
};

getDNSStats(['epam.com'])