import { deleteNth } from '../../../src/kyu/6/delete-occurrences'

const { assert } = require('chai')

describe('delete-occurrences Tests', () => {
  it('test', () => {
    assert.sameOrderedMembers(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
    assert.sameOrderedMembers(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  })
})
1
