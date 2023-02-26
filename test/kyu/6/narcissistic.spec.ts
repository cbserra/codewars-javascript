import { expect } from "chai";

import { narcissistic } from "../../../src/kyu/6/narcissistic";

describe("Narcissistic tests", () => {
  it("Basic Narcissistic test should work", () => {
    expect(narcissistic(7)).to.equal(true, "7 is narcissistic");
    expect(narcissistic(153)).to.equal(true, "153 is narcissistic");
    expect(narcissistic(1634)).to.equal(true, "1634 is narcissistic");
  });
});
