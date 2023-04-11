import { assert, expect } from 'chai'
import _ from 'lodash'

import { narcissistic } from '../../../src/kyu/6/narcissistic'

describe('narcissistic tests', () => {
  describe('Basic Narcissistic tests', () => {
    it('Basic Narcissistic test should work', () => {
      expect(narcissistic(7)).to.equal(true, '7 is narcissistic')
      expect(narcissistic(153)).to.equal(true, '153 is narcissistic')
      expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic')
    })
  })

  describe('Narcissistic Submission tests', function () {
    function dotest(input: number, expected: boolean) {
      const actual = narcissistic(input)
      assert.strictEqual(actual, expected, `Incorrect answer for value=${input}`)
    }

    it('Narcissistic numbers', function () {
      dotest(7, true)
      dotest(153, true)
    })

    it('Not narcissistic numbers', function () {
      dotest(122, false)
      dotest(487, false)
    })

    const ns = new Set([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748, 92727, 93084, 548834,
      1741725, 4210818, 9800817, 9926315, 24678050, 24678051, 88593477, 146511208, 472335975,
      534494836, 912985153, 4679307774, 32164049650, 32164049651, 40028394225, 42678290603,
      44708635679, 49388550606, 82693916578, 94204591914, 28116440335967, 4338281769391370,
      4338281769391371,
    ])

    it('Random tests', function () {
      const inputs = [...ns]
      for (let exp = 2; exp < 15; ++exp) {
        for (let i = 0; i < 5; ++i) {
          inputs.push(_.random(10 ** exp, 10 ** (exp + 1)))
        }
      }

      for (const input of _.shuffle(inputs)) {
        dotest(input, ns.has(input))
      }
    })
  })
})
