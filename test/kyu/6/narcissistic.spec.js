"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const narcissistic_1 = require("../../../src/kyu/6/narcissistic");
describe("Narcissistic tests", () => {
  it("Basic Narcissistic test should work", () => {
    (0, chai_1.expect)((0, narcissistic_1.narcissistic)(7)).to.equal(
      true,
      "7 is narcissistic"
    );
    (0, chai_1.expect)((0, narcissistic_1.narcissistic)(153)).to.equal(
      true,
      "153 is narcissistic"
    );
    (0, chai_1.expect)((0, narcissistic_1.narcissistic)(1634)).to.equal(
      true,
      "1634 is narcissistic"
    );
  });
});
