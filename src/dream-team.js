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
function createDreamTeam(members) {
  let team = '';
  if(!Array.isArray(members)) return false;
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] !== 'string') {
      delete members[i];
    }
    else {
      members[i] = members[i].trim();
    }
  }
  members.sort((a, b) => a.localeCompare(b));
  members.forEach((name) => {
    if(typeof name === 'string') {
      team += name.charAt(0).toUpperCase();
    }
  })
  return team;
}

module.exports = {
  createDreamTeam
};