// See https://www.chaijs.com for how to use Chai.
import { assert } from 'chai'

import { countBits } from '../../../src/kyu/6/bit-counting'

describe('bit-counting tests', function () {
  it('Fixed', function () {
    assert.equal(countBits(0), 0)
    assert.equal(countBits(4), 1)
    assert.equal(countBits(7), 3)
    assert.equal(countBits(9), 2)
    assert.equal(countBits(10), 2)
    assert.equal(countBits(26), 3)
    assert.equal(countBits(77231418), 14)
    assert.equal(countBits(12525589), 11)
    assert.equal(countBits(3811), 8)
    assert.equal(countBits(392902058), 17)
    assert.equal(countBits(1044), 3)
    assert.equal(countBits(10030245), 10)
    assert.equal(countBits(183337941), 16)
    assert.equal(countBits(20478766), 14)
    assert.equal(countBits(103021), 9)
    assert.equal(countBits(287), 6)
    assert.equal(countBits(115370965), 15)
    assert.equal(countBits(31), 5)
    assert.equal(countBits(417862), 7)
    assert.equal(countBits(626031), 12)
    assert.equal(countBits(89), 4)
    assert.equal(countBits(674259), 10)
  })
  it('Random', function () {
    const rnd = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    const cb = (n: number) => n.toString(2).split('0').join('').length
    for (let i = 100; i--; ) {
      const q = rnd()
      const a = cb(q)
      assert.equal(countBits(q), a, String(q))
    }
  })
})
