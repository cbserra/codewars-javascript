"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = void 0;
function isIsogram(str) {
  return !str
    .toLowerCase()
    .split("")
    .sort()
    .some((curr, idx, arr) => curr === arr[idx + 1]);
}
exports.isIsogram = isIsogram;
