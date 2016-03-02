"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    }

    return false;
}

exports["default"] = isLeapYear;
module.exports = exports["default"];