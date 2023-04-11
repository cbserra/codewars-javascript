import { greet } from '../../../src/kyu/8/hello-world'

const assert = require('chai').assert

describe('hello-world tests', function () {
  it('Is it a function?', function () {
    assert.strictEqual(typeof greet, 'function', 'greet should be a function')
  })
  it('Correct return-value?', function () {
    assert.strictEqual(greet(), 'hello world!')
  })
})
