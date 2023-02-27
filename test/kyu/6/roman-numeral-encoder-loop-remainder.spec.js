"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roman_numeral_encoder_loop_remainder_1 = require("../../../src/kyu/6/roman-numeral-encoder-loop-remainder");
const chai_1 = require("chai");
describe("roman-numeral-encoder-loop-remainder.refactor", function () {
  it("basic", function () {
    chai_1.assert.strictEqual(
      (0, roman_numeral_encoder_loop_remainder_1.solution)(1000),
      "M"
    );
    chai_1.assert.strictEqual(
      (0, roman_numeral_encoder_loop_remainder_1.solution)(4),
      "IV"
    );
    chai_1.assert.strictEqual(
      (0, roman_numeral_encoder_loop_remainder_1.solution)(1),
      "I"
    );
    chai_1.assert.strictEqual(
      (0, roman_numeral_encoder_loop_remainder_1.solution)(1990),
      "MCMXC"
    );
    chai_1.assert.strictEqual(
      (0, roman_numeral_encoder_loop_remainder_1.solution)(2008),
      "MMVIII"
    );
    chai_1.assert.strictEqual(
      (0, roman_numeral_encoder_loop_remainder_1.solution)(1444),
      "MCDXLIV"
    );
  });
});
