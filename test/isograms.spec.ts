// const chai = require("chai");
// const assert = chai.assert;

import { assert, config } from "chai";
import { isIsogram } from "../src/isograms";

config.truncateThreshold = 0;

describe("isogram tests", () => {
  it("test", () => {
    assert.equal(isIsogram("Dermatoglyphics"), true);
    assert.equal(isIsogram("isogram"), true);
    assert.equal(isIsogram("aba"), false, "same chars may not be adjacent");
    assert.equal(isIsogram("moOse"), false, "same chars may not be same case");
    assert.equal(isIsogram("isIsogram"), false);
    assert.equal(isIsogram(""), true, "an empty string is a valid isogram");
  });
});
