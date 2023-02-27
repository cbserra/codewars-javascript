"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
const isograms_1 = require("../../../src/kyu/7/isograms");
// TODO Add your tests here
describe("isogram tests", () => {
  it("test", function () {
    chai_1.assert.equal((0, isograms_1.isIsogram)("Dermatoglyphics"), true);
    chai_1.assert.equal((0, isograms_1.isIsogram)("isogram"), true);
    chai_1.assert.equal(
      (0, isograms_1.isIsogram)("aba"),
      false,
      "same chars may not be adjacent"
    );
    chai_1.assert.equal(
      (0, isograms_1.isIsogram)("moOse"),
      false,
      "same chars may not be same case"
    );
    chai_1.assert.equal((0, isograms_1.isIsogram)("isIsogram"), false);
    chai_1.assert.equal(
      (0, isograms_1.isIsogram)(""),
      true,
      "an empty string is a valid isogram"
    );
  });
});
