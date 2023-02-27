"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const observed_pin_1 = require("../../../src/kyu/4/observed-pin");
const SINGLE_DIGIT_PIN_DATA = {
  "8": ["5", "7", "8", "9", "0"],
};
const DOUBLE_DIGIT_PIN_DATA = {
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
};
const TRIPLE_DIGIT_PIN_DATA = {
  "369": [
    "339",
    "366",
    "399",
    "658",
    "636",
    "258",
    "268",
    "669",
    "668",
    "266",
    "369",
    "398",
    "256",
    "296",
    "259",
    "368",
    "638",
    "396",
    "238",
    "356",
    "659",
    "639",
    "666",
    "359",
    "336",
    "299",
    "338",
    "696",
    "269",
    "358",
    "656",
    "698",
    "699",
    "298",
    "236",
    "239",
  ],
};
describe("observed-pin tests - single-digit", function () {
  assertSamePins("tests an observed single-digit pin", SINGLE_DIGIT_PIN_DATA);
});
describe("observed-pin tests - double-digit", function () {
  assertSamePins("tests a double-digit pin test", DOUBLE_DIGIT_PIN_DATA);
});
describe("observed-pin tests - triple-digit", function () {
  assertSamePins("tests a triple-digit pin test", TRIPLE_DIGIT_PIN_DATA);
});
// config.truncateThreshold = 0;
function assertSamePins(testSubject, observedToPins) {
  const observedPin = Object.keys(observedToPins)[0];
  const actualPins = (0, observed_pin_1.getPINs)(observedPin);
  const expectedPins = Object.values(observedToPins)[0];
  it(`${testSubject}: '${observedPin}'`, () => {
    chai_1.assert.sameMembers(actualPins, expectedPins);
  });
}
