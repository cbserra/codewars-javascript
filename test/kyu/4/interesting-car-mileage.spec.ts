import { isInteresting } from '../../../src/kyu/4/interesting-car-mileage'
import { assert } from 'chai'

function test(n: number, awesome: number[], expected: number) {
  assert.strictEqual(isInteresting(n, awesome), expected)
}
describe('interesting-car-mileage tests', function () {
  describe('shown interesting-car-mileage tests', function () {
    it('should work, dangit!', function () {
      test(3, [1337, 256], 0)
      test(1336, [1337, 256], 1)
      test(1337, [1337, 256], 2)
      test(11208, [1337, 256], 0)
      test(11209, [1337, 256], 1)
      test(11211, [1337, 256], 2)
    })
  })

  describe('hidden interesting-car-mileage tests', function () {
    it('should handle boring numbers', function () {
      test(1, [], 0)
      test(30, [], 0)
      test(88, [], 0)
      test(97, [], 0)
      test(7382, [], 0)
      test(99919911, [], 0)
    })
    it('should handle ordered yet still boring numbers', function () {
      test(7540, [], 0)
      test(1590, [], 0)
    })
    it('should handle big numbers', function () {
      test(100, [], 2)
      test(7000, [], 2)
      test(800000, [], 2)
    })
    it('should handle monotone numbers', function () {
      test(111, [], 2)
      test(444, [], 2)
      test(9999999, [], 2)
    })
    it('should handle awesome phrases', function () {
      test(1337, [1337, 256], 2)
      test(80085, [80085], 2)
      test(256, [1337, 256, 376006], 2)
    })
    it('should handle palindromic numbers', function () {
      test(101, [], 2)
      test(11011, [], 2)
      test(7473747, [], 2)
    })
    it('should handle incrementing sequences', function () {
      test(123, [], 2)
      test(1234, [], 2)
      test(67890, [], 2)
      test(234567890, [], 2)
    })
    it('should handle decrementing sequences', function () {
      test(3210, [], 2)
      test(654, [], 2)
      test(8765, [], 2)
      test(987654321, [], 2)
    })
    it('should handle upcoming big numbers', function () {
      test(98, [], 1)
      test(99, [], 1)
      test(6998, [], 1)
      test(799999, [], 1)
    })
    it('should handle upcoming monotone numbers', function () {
      test(109, [], 1)
      test(110, [], 1)
      test(442, [], 1)
      test(9999997, [], 1)
    })
    it('should handle upcoming awesome phrases', function () {
      test(1335, [1337, 256], 1)
      test(255, [1337, 256], 1)
      test(80083, [80085], 1)
      test(254, [1337, 256, 376006], 1)
    })
    it('should handle upcoming palindromic numbers', function () {
      test(119, [], 1)
      test(120, [], 1)
      test(7473745, [], 1)
    })
    it('should handle upcoming incrementing sequences', function () {
      test(122, [], 1)
      test(1232, [], 1)
      test(67888, [], 1)
      test(234567889, [], 1)
    })
    it('should handle upcoming decrementing sequences', function () {
      test(3208, [], 1)
      test(3209, [], 1)
      test(987654319, [], 1)
      test(987654320, [], 1)
    })
  })
})
