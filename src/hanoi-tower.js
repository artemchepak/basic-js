const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let result = {};

  let n = 1;
  let prevMinTurns = 1;
  let minTurns = 1;

  while (n <= diskNumber){
    if (n === 1) {
      n++;
    }
    else {
      prevMinTurns = minTurns;
      minTurns = 2 * prevMinTurns + 1;
      n++;
    }
  }

    result['turns'] = minTurns;
    result['seconds'] = Math.floor(60 / turnsSpeed * minTurns *60);

    return result;
};
