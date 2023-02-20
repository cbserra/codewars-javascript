// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { isIsogram } from "../../../src/kyu/7/isograms";

// TODO Add your tests here
describe("isogram tests", () => {
  it("test", function () {
    assert.equal(isIsogram("Dermatoglyphics"), true);
    assert.equal(isIsogram("isogram"), true);
    assert.equal(isIsogram("aba"), false, "same chars may not be adjacent");
    assert.equal(isIsogram("moOse"), false, "same chars may not be same case");
    assert.equal(isIsogram("isIsogram"), false);
    assert.equal(isIsogram(""), true, "an empty string is a valid isogram");
  });
});
