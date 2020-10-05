const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let calculatetSampleAge = 0;

  if (typeof parseInt(sampleActivity) === 'number' && parseInt(sampleActivity) === 'number' < 9000 && parseInt(sampleActivity) === 'number' > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
    
  }
  else {
    return false;
  }
};
