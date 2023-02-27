"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cubeChecker = void 0;
function cubeChecker(volume, side) {
  return Math.min(volume, side) > 0 && Math.pow(side, 3) == volume;
}
exports.cubeChecker = cubeChecker;
