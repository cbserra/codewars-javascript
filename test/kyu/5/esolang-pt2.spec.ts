import { interpreter } from '../../../src/kyu/5/esolang-pt2'
import { assert } from 'chai'

describe('esolang-pt2 tests', function () {
  it('should work for some example test cases', function () {
    // Flips the leftmost cell of the tape
    assert.equal(interpreter('*', '00101100'), '10101100')
    // Flips the second and third cell of the tape
    assert.equal(interpreter('>*>*', '00101100'), '01001100')
    // Flips all the bits in the tape
    assert.equal(interpreter('*>*>*>*>*>*>*>*', '00101100'), '11010011')
    // Flips all the bits that are initialized to 0
    assert.equal(interpreter('*>*>>*>>>*>*', '00101100'), '11111111')
    // Goes somewhere to the right of the tape and then flips all bits that are initialized to 1, progressing leftwards through the tape
    assert.equal(interpreter('>>>>>*<*<<*', '00101100'), '00000000')
  })
  it('should ignore all non-command characters', function () {
    assert.equal(
      interpreter('iwmlis *!BOSS 333 ^v$#@', '00101100'),
      '10101100',
      'Your interpreter should ignore all non-command characters'
    )
    assert.equal(
      interpreter('>*>*;;;.!.,+-++--!!-!!!-', '00101100'),
      '01001100',
      'Your interpreter should not treat any of "+", "-", ",", "." (valid brainfuck commands) and ";" as valid command characters'
    )
    assert.equal(
      interpreter(
        `    *  >
    *           >
    
*>*lskdfjsdklfj>*;;+--+--+++--+-+-  lskjfiom,x  
>*sdfsdf>sdfsfsdfsdfwervbnbvn*,.,.,,.,.  >


*`,
        '00101100'
      ),
      '11010011',
      'Your interpreter should ignore all tabs, newlines and spaces'
    )
    assert.equal(
      interpreter('*,,...,..,..++-->++++-*>--+>*>+++->>..,+-,*>*', '00101100'),
      '11111111'
    )
    assert.equal(
      interpreter('>>nssewww>>wwess>*<nnn*<<ee*', '00101100'),
      '00000000',
      'Your interpreter should not recognise any of "n", "e", "s", "w" (all valid Paintfuck commands) as valid commands'
    )
  })
  it('should return the final state of the tape immediately if the pointer ever goes out of bounds', function () {
    assert.equal(
      interpreter('*>>>*>*>>*>>>>>>>*>*>*>*>>>**>>**', '0000000000000000'),
      '1001101000000111',
      'Your interpreter should return the final state of the tape immediately when the pointer moves too far to the right'
    )
    assert.equal(
      interpreter('<<<*>*>*>*>*>>>*>>>>>*>*', '0000000000000000'),
      '0000000000000000',
      'Your interpreter should immediately return the final state of the tape at the first instance where the pointer goes out of bounds to the left even if it resumes to a valid position later in the program'
    )
    assert.equal(
      interpreter(
        '*>*>*>>>*>>>>>*<<<<<<<<<<<<<<<<<<<<<*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*>*>*',
        '11111111111111111111111111111111'
      ),
      '00011011110111111111111111111111'
    )
    assert.equal(
      interpreter('>>*>*>*<<*<*<<*>*', '1101'),
      '1110',
      'Your interpreter should not follow through any command after the pointer goes out of bounds for the first time'
    )
  })
  it('should work for some simple and nested loops', function () {
    assert.equal(
      interpreter('*[>*]', '0'.repeat(256)),
      '1'.repeat(256),
      'Your interpreter should evaluate a simple non-nested loop properly'
    )
    assert.equal(
      interpreter('[>*]', '0'.repeat(256)),
      '0'.repeat(256),
      'Your interpreter should jump to the matching "]" when it encounters a "[" and the bit under the pointer is 0'
    )
    assert.equal(
      interpreter('*>*>>>*>*>>>>>*>[>*]', '0'.repeat(256)),
      '11001100001' + '0'.repeat(245),
      'Your interpreter should jump to the matching "]" when it encounters a "[" and the bit under the pointer is 0'
    )
    assert.equal(
      interpreter('*>*>>>*>*>>>>>*[>*]', '0'.repeat(256)),
      '11001100001' + '1'.repeat(245),
      'Your interpreter should jump back to the matching "[" when it encounters a "]" and the bit under the pointer is nonzero'
    )
    assert.equal(
      interpreter('*[>[*]]', '0'.repeat(256)),
      '1' + '0'.repeat(255),
      'Your interpreter should also work properly with nested loops'
    )
    assert.equal(
      interpreter('*[>[*]]', '1'.repeat(256)),
      '0' + '1'.repeat(255),
      'Your interpreter should also work properly with nested loops'
    )
  })
  it('should work for randomly-generated programs', function () {
    function solution(code: string, tape: string) {
      const storage = tape.split('').map((b) => +b) // Actual Tape / Data Storage
      let pointer = 0 // Pointer
      for (let i = 0; i < code.length; i++) {
        switch (code[i]) {
          case '*':
            // Flip the bit at the current cell
            storage[pointer] = +!storage[pointer]
            break
          case '>':
            // Move the pointer to the right.  If pointer goes out-of-bounds then return final state of tape
            pointer++
            if (pointer >= storage.length) return storage.join('')
            break
          case '<':
            // Move the pointer to the left.  If pointer goes out-of-bounds then return final state of tape
            pointer--
            if (pointer < 0) return storage.join('')
            break
          case '[':
            // Jumps to matching "]" if current bit is 0
            if (storage[pointer] === 0) {
              let unmatched = 1
              while (unmatched) {
                if (code[++i] === ']') unmatched--
                if (code[i] === '[') unmatched++
              }
            }
            break
          case ']':
            // Jumps back to matching "[" if current bit is 1
            if (storage[pointer] === 1) {
              let unmatched = 1
              while (unmatched) {
                if (code[--i] === '[') unmatched--
                if (code[i] === ']') unmatched++
              }
            }
            break
        }
      }
      return storage.join('')
    }
    function randomProgram() {
      return Array(~~(101 + 900 * Math.random()))
        .fill(0)
        .map((_) => '<*>'[~~(Math.random() * 3)])
        .join('')
    }
    function randomTape() {
      return Array(1e3)
        .fill(0)
        .map((_) => ~~(2 * Math.random()))
        .join('')
    }
    for (let i = 0; i < 100; i++) {
      const code = '>'.repeat(500) + randomProgram()
      const tape = randomTape()
      const expected = solution(code, tape)
      const actual = interpreter(code, tape)
      assert.equal(actual, expected)
    }
  })
})
