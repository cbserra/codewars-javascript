"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = void 0;
function narcissistic(value) {
  const numToStringArr = value.toString().split("");
  return (
    value ==
    numToStringArr.map(Number).reduce((prevVal, currVal) => {
      return prevVal + Math.pow(currVal, numToStringArr.length);
    }, 0)
  );
}
exports.narcissistic = narcissistic;
