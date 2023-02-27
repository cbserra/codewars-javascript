"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotApproxEquals = exports.assertApproxEquals = exports.expectNoError = exports.expectError = exports.assertNotSimilar = exports.assertSimilar = exports.assertNotDeepEquals = exports.assertDeepEquals = exports.assertNotContains = exports.assertContains = exports.assertNotEquals = exports.assertEquals = exports.expect = exports.fail = exports.pass = void 0;
// Assertions aliased to names from the custom test framework.
const chai_1 = require("chai");
// Disable truncating actual and expected in assertion errors.
chai.config.truncateThreshold = 0;
const pass = () => {};
exports.pass = pass;
exports.fail = chai_1.assert.fail;
exports.expect = chai_1.assert;
exports.assertEquals = chai_1.assert.strictEqual;
exports.assertNotEquals = chai_1.assert.notStrictEqual;
exports.assertContains = chai_1.assert.include;
exports.assertNotContains = chai_1.assert.notInclude;
exports.assertDeepEquals = chai_1.assert.deepEqual;
exports.assertNotDeepEquals = chai_1.assert.notDeepEqual;
const assertSimilar = (actual, expected, msg) => {
  console.error(`assertSimilar is deprecated, use assert.deepEqual`);
  chai_1.assert.deepEqual(actual, expected, msg);
};
exports.assertSimilar = assertSimilar;
const assertNotSimilar = (actual, expected, msg) => {
  console.error(`assertNotSimilar is deprecated, use assert.notDeepEqual`);
  chai_1.assert.notDeepEqual(actual, expected, msg);
};
exports.assertNotSimilar = assertNotSimilar;
// not using `assert.throws` because it can't test for fn to throw "anything"
const expectError = (msg, fn) => {
  let message;
  let fun;
  if (typeof msg === "function") {
    fun = msg;
    message = "Expected an error to be thrown";
  } else {
    fun = fn;
    message = msg;
  }
  let passed = false;
  try {
    fun();
  } catch (_a) {
    passed = true;
  }
  (0, chai_1.assert)(passed, message);
};
exports.expectError = expectError;
const expectNoError = (msg, fn) => {
  let message;
  let fun;
  if (typeof msg === "function") {
    fun = msg;
    message = "Unexpected error was thrown";
  } else {
    fun = fn;
    message = msg;
  }
  try {
    fun();
  } catch (ex) {
    if (ex instanceof Error) {
      chai_1.assert.fail(appendToMessage(message, ex.message));
    } else {
      chai_1.assert.fail(appendToMessage(message, "unknown error"));
    }
  }
};
exports.expectNoError = expectNoError;
// Compares two floating point values and checks whether they are approximately equal to each other
const assertApproxEquals = (actual, expected, msg) => {
  // uses absolute error when |expected| <= 1, compatible with old version
  if (Math.abs(expected) <= 1) {
    chai_1.assert.closeTo(actual, expected, 1e-9);
  } else {
    msg = appendToMessage(
      msg,
      "Expected actual value " +
        actual +
        " to approximately equal expected value " +
        expected +
        " (accepted relative error: 1e-9)"
    );
    (0, chai_1.assert)(Math.abs((expected - actual) / expected) <= 1e-9, msg);
  }
};
exports.assertApproxEquals = assertApproxEquals;
// Compares two floating point values and checks whether they are sufficiently different from each other
const assertNotApproxEquals = (actual, unexpected, msg) => {
  msg = appendToMessage(
    msg,
    "Actual value " +
      actual +
      " should not approximately equal unexpected value " +
      unexpected +
      " (rejected relative error: 1e-9)"
  );
  if (Math.abs(unexpected) <= 1) {
    (0, chai_1.assert)(Math.abs(unexpected - actual) > 1e-9, msg);
  } else {
    (0, chai_1.assert)(
      Math.abs((unexpected - actual) / unexpected) > 1e-9,
      msg
    );
  }
};
exports.assertNotApproxEquals = assertNotApproxEquals;
const appendToMessage = (msg, s) => (msg ? msg + " - " + s : s);
