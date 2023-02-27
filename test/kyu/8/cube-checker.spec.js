"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cube_checker_1 = require("../../../src/kyu/8/cube-checker");
describe("cube-checker", function () {
  it("Basic tests", function () {
    chai_1.assert.isTrue((0, cube_checker_1.cubeChecker)(1, 1));
    chai_1.assert.isTrue((0, cube_checker_1.cubeChecker)(8, 2));
    chai_1.assert.isTrue((0, cube_checker_1.cubeChecker)(27, 3));
    chai_1.assert.isFalse((0, cube_checker_1.cubeChecker)(0, 35));
    chai_1.assert.isFalse((0, cube_checker_1.cubeChecker)(452, 1));
    chai_1.assert.isFalse((0, cube_checker_1.cubeChecker)(785, 0));
  });
});
