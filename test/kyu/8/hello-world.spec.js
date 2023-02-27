"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../../../src/kyu/8/hello-world");
const assert = require("chai").assert;
describe("hello-world tests", function () {
  it("Is it a function?", function () {
    assert.strictEqual(
      typeof hello_world_1.greet,
      "function",
      "greet should be a function"
    );
  });
  it("Correct return-value?", function () {
    assert.strictEqual((0, hello_world_1.greet)(), "hello world!");
  });
});
