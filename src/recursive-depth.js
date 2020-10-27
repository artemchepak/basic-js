const CustomError = require("../extensions/custom-error");
const nestArr = (arr) => arr.some(element => Array.isArray(element));

module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let countDepth = 1;
        if (nestArr(arr)) {
            const newArr = arr.reduce((acc, cur) => acc.concat(cur), []);
            return countDepth + this.calculateDepth(newArr);
        }
        return countDepth;
    }
};