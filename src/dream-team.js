const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array/* members */) {
  let result = [];
  let i = 0;
  if (Array.isArray(array)) {
    array.forEach(element => (typeof element === 'string') ? (result.push(element.trim().charAt(0).toUpperCase())) : false);
    return result.sort().join('');
  }
  else{
    return false;
  }
};
