"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = void 0;
function isIsogram(str) {
  if (str === undefined || str.length == 0) {
    return true;
  }
  const count = {};
  let foundIsogram = true;
  str
    .toLowerCase()
    .split("")
    .sort()
    .forEach((curr, idx, arr) => {
      count[curr] = count[curr] ? count[curr] + 1 : 1;
      if (count[curr] > 1) {
        foundIsogram = false;
      }
    });
  return foundIsogram;
}
exports.isIsogram = isIsogram;
