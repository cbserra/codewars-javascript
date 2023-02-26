import { solution } from "../../../src/kyu/6/roman-numeral-encoder-loop-remainder";
import { assert } from "chai";

describe("roman-numeral-encoder-loop-remainder.refactor", function () {
  it("basic", function () {
    assert.strictEqual(solution(1000), "M");
    assert.strictEqual(solution(4), "IV");
    assert.strictEqual(solution(1), "I");
    assert.strictEqual(solution(1990), "MCMXC");
    assert.strictEqual(solution(2008), "MMVIII");
    assert.strictEqual(solution(1444), "MCDXLIV");
  });
});
