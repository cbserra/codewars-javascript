import { assert } from "chai";
import { createPhoneNumber } from "../../../src/kyu/6/create-phone-number";

describe("Tests", () => {
  it('Should pass "fixed" tests', () => {
    assert.equal(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
    assert.equal(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      "(111) 111-1111"
    );
    assert.equal(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
  });

  it("Should pass random tests", () => {
    const sol = (a: number[]): string =>
      `(${a.slice(0, 3).join("")}) ${a.slice(3, 6).join("")}-${a
        .slice(6)
        .join("")}`;
    for (let i = 0; i < 100; i++) {
      const a: number[] = Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * 10)
        ),
        exp: string = sol(a);
      assert.equal(
        createPhoneNumber(a),
        exp,
        `createPhoneNumber(${JSON.stringify(a)})`
      );
    }
  });
});
