"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHtml = exports.sample = exports.randomize = exports.randomToken = exports.randomNumber = void 0;
const randomNumber = () => Math.floor(Math.random() * 101);
exports.randomNumber = randomNumber;
const randomToken = () => Math.random().toString(36).substr(8);
exports.randomToken = randomToken;
const randomize = (array) => {
  const arr = array.slice();
  let i = arr.length;
  let j, x;
  while (i) {
    j = (Math.random() * i) | 0;
    x = arr[--i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};
exports.randomize = randomize;
const sample = (array) => array[~~(array.length * Math.random())];
exports.sample = sample;
const escapeHtml = (html) =>
  String(html)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
exports.escapeHtml = escapeHtml;
