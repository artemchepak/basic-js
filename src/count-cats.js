const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array/* matrix */) {
  let result = 0;
  array.forEach(secondArray =>
    secondArray.forEach(element => (element === '^^') ? (result++) : result = result));
  return result;
};
