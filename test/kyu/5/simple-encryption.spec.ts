import { encrypt, decrypt } from "../../../src/kyu/5/simple-encryption";
import { assert } from "chai";

describe("simple-encryption encrypt tests", function () {
  it("Basic Tests", function () {
    // Basic Encrypt Tests
    assert.equal(
      encrypt(
        'Do the kata "Kobayashi-Maru-Test!" Endless fun and excitement when finding a solution!'
      ),
      "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"
    );
    assert.equal(encrypt("This is a test!"), "5MyQa9p0riYplZc");
    assert.equal(
      encrypt("This kata is very interesting!"),
      "5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p"
    );
  });
});

describe("simple-encryption decrypt tests", function () {
  it("Basic Tests", function () {
    // Basic Decrypt Tests
    assert.equal(
      decrypt(
        "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"
      ),
      'Do the kata "Kobayashi-Maru-Test!" Endless fun and excitement when finding a solution!'
    );
    assert.equal(decrypt("5MyQa9p0riYplZc"), "This is a test!");
    assert.equal(
      decrypt("5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p"),
      "This kata is very interesting!"
    );
  });
});

describe("simple-encryption Empty string tests", function () {
  it("Basic Tests", function () {
    // Empty string
    assert.equal(encrypt(""), "");
    assert.equal(decrypt(""), "");
  });
});
