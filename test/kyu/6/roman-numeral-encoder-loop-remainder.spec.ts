import { solution } from '../../../src/kyu/6/roman-numeral-encoder-loop-remainder'
import { assert } from 'chai'

describe.skip('roman-numeral-encoder-loop-remainder.refactor', function () {
  it('1000 equals M', function () {
    assert.strictEqual(solution(1000), 'M')
  })

  it('4 equals IV', function () {
    assert.strictEqual(solution(4), 'IV')
  })

  it('1 equals I', function () {
    assert.strictEqual(solution(1), 'I')
  })

  it('1990 equals MCMXC', function () {
    assert.strictEqual(solution(1990), 'MCMXC')
  })

  it('2008 equals MMVIII', function () {
    assert.strictEqual(solution(2008), 'MMVIII')
  })

  it('1444 equals MCDXLIV', function () {
    assert.strictEqual(solution(1444), 'MCDXLIV')
  })
})
