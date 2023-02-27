"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = void 0;
function hasDuplicates(value, index, array) {
  return new Set(array).size !== array.length;
}
function isIsogram(str) {
  console.log(`🚀 ~ isIsogram ~ str`, str);
  if (str === undefined || str.length == 0) {
    return true;
  }
  const count = {};
  const foundIsogram = str
    .toLowerCase()
    .split("")
    .sort()
    .map((curr, idx, arr) => {
      count[idx] = count[idx] !== 0 ? count[idx] + 1 : 1;
      return Object.values(count);
    })
    .some((curr, idx, arr) => {
      console.log(`🚀 ~ arr`, arr);
      console.log(`🚀 ~ idx`, idx);
      console.log(`🚀 ~ curr`, curr);
      console.log(`🚀 ~ arr[${idx - 1}]`, arr[idx - 1]);
      return !(curr === arr[idx + 1] && idx < arr.length - 1);
    });
  //   count[curr] = count[curr] ? count[curr] + 1 : 1;
  //   console.log(
  //     `find, count[${curr}] = ${count[curr]}, curr = ${curr}, idx = ${idx}, arr = ${arr}`
  //   );
  //   if (count[curr] > 1) {
  //     foundIsogram = false;
  //   }
  // })
  console.log(`🚀 ~ foundIsogram`, foundIsogram);
  // .
  // .map((curr, idx, arr) => {
  // .forEach((curr, idx, arr) => {
  //     count[curr] = count[curr] ? count[curr] + 1 : 1;
  //     console.log(
  //       `forEach, count[${curr}] = ${count[curr]}, curr = ${curr}, idx = ${idx}, arr = ${arr}`
  //     );
  //     if (count[curr] > 1) {
  //       foundIsogram = false;
  //     }
  //   });
  return foundIsogram;
}
exports.isIsogram = isIsogram;
