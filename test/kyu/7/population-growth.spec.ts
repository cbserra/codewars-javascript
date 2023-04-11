import { nbYear } from '../../../src/kyu/7/population-growth'
import { assert } from 'chai'

function testing(p0: number, percent: number, aug: number, p: number, expected: number) {
  assert.strictEqual(nbYear(p0, percent, aug, p), expected)
}

describe('population-growth Fixed Tests', function () {
  it('Basic tests nbYear', function () {
    testing(1500, 5, 100, 5000, 15)
    testing(1500000, 2.5, 10000, 2000000, 10)
    testing(1500000, 0.25, 1000, 2000000, 94)
    testing(1500000, 0.25, -1000, 2000000, 151)
  })
})
