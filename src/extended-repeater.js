const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = 0;
    let separator = '+';
    let addition = '';
    let additionRepeatTimes = 0;
    let additionSeparator = '';

    if (options['repeatTimes'] !== undefined) {
        repeatTimes = options['repeatTimes'];
    }

    if (options['separator'] !== undefined) {
        separator = options['separator'];
    }

    if (options['addition'] !== undefined) {
        addition = options['addition'];
    }

    if (options['additionRepeatTimes'] !== undefined) {
        additionRepeatTimes = options['additionRepeatTimes'];
    }

    if (options['additionSeparator'] !== undefined) {
        additionSeparator = options['additionSeparator'];
    }

    let newAddition = addition + additionSeparator;
    let finalAddition = newAddition.repeat(additionRepeatTimes).slice(0, newAddition.repeat(additionRepeatTimes).length - additionSeparator.length);

    let newStr = str + finalAddition + separator;
    let finalStr = newStr.repeat(repeatTimes).slice(0, newStr.repeat(repeatTimes).length - separator.length);

    if (repeatTimes === 0 && additionRepeatTimes === 0) {
        return str + addition;
    } else {
        return finalStr;
    }
};