import { interpreter } from '../../../src/kyu/4/esolang-pt3'
import { assert } from 'chai'

describe('esolang-pt3 tests', function () {
  // Prints representation of datagrid - 0's are black and 1's are white
  // Note: prettyPrint() only works properly if your interpreter returns a representation of the datagrid in the correct format
  function prettyPrint(datagrid: string): string {
    let consoleOutput = ''
    const copy = datagrid.split('\r\n')
    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy[i].length; j++) {
        consoleOutput += `${copy[i][j] === '0' ? '☐' : '◼︎'}`.repeat(2)
      }
      consoleOutput += '\n'
    }
    console.log(consoleOutput)
    return datagrid
  }
  // Displays the grid your interpreter returns
  function displayActual(actual: string) {
    console.log('You returned:')
    return prettyPrint(actual)
  }
  // Displays the expected final state of datagrid
  function displayExpected(expected: string) {
    console.log('Expected final state of data grid:')
    return prettyPrint(expected)
  }
  it('should work for some example test cases', function () {
    assert.equal(
      displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 0, 6, 9)),
      displayExpected(
        '000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000'
      ),
      'Your interpreter should initialize all cells in the datagrid to 0'
    )
    assert.equal(
      displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 7, 6, 9)),
      displayExpected(
        '111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000'
      ),
      'Your interpreter should adhere to the number of iterations specified'
    )
    assert.equal(
      displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 19, 6, 9)),
      displayExpected(
        '111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000'
      ),
      'Your interpreter should traverse the 2D datagrid correctly'
    )
    assert.equal(
      displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 42, 6, 9)),
      displayExpected(
        '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000'
      ),
      'Your interpreter should traverse the 2D datagrid correctly for all of the "n", "e", "s" and "w" commands'
    )
    assert.equal(
      displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 100, 6, 9)),
      displayExpected(
        '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000'
      ),
      'Your interpreter should terminate normally and return a representation of the final state of the 2D datagrid when all commands have been considered from left to right even if the number of iterations specified have not been fully performed'
    )
  })
  it('should ignore all non-command characters', function () {
    assert.equal(
      displayActual(
        interpreter(
          'o*e*eq*reqrqp*ppooqqeaqqsr*yqaooqqqfqarppppfffpppppygesfffffffffu*wrs*agwpffffst*w*uqrw*qyaprrrrrw*nuiiiid???ii*n*ynyy??ayd*r:rq????qq::tqaq:y???ss:rqsr?s*qs:q*?qs*tr??qst?q*r',
          7,
          6,
          9
        )
      ),
      displayExpected(
        '111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000'
      ),
      'Your interpreter should simply ignore all letters that are not one of "nesw" and all punctuation that are not asterisks'
    )
    assert.equal(
      displayActual(
        interpreter(
          `*e*e*e
      
      
      
      
  *es  *es  *ws*w      s*w*w*w*    
  n*n*      n*sss      
         
    s*s*               s    *s*`,
          19,
          6,
          9
        )
      ),
      displayExpected(
        '111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000'
      ),
      'Your interpreter should ignore all newlines, tabs and spaces'
    )
    assert.equal(
      displayActual(
        interpreter(
          '*e..*,;e+*e*e-s;<<<<<>>>*,,,e--+s*w+>>>>>>>><;;s*<><<>w.>><>>><<<<><<>><^^^^vvv^v^vv^vv^v^^><>><>.s--*w;;*w>><<>*+^^v^vvv^++w*-+-;;;;+---++-+n;..*n*n++--;;+++-;*ssss.*s*s*s.*',
          42,
          6,
          9
        )
      ),
      displayExpected(
        '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000'
      ),
      'Your interpreter should not recognise any of ",", ".", "<", ">", "+", "-" (valid Brainfuck commands), ";" (valid Boolfuck command), "^" and "v" (valid Befunge commands) as valid Paintfuck commands'
    )
    assert.equal(
      displayActual(
        interpreter(
          '*e*eNNESNENSNESNWWEWKSDLFJMCVXNIOWE*e*es*IOWEORUWKVDSVOIRUSKVKLVes*wsIWUENNSLNDKLNSIRIOEDSKKLNSV*ws*w*w*wIOWEURNLSVM,NXVC,MSIWOEU*n*n*n*ssSSEEWWss*s*s*s*EEWWEEWEWSSSNNSWWE',
          100,
          6,
          9
        )
      ),
      displayExpected(
        '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000'
      ),
      'Your interpreter should not treat uppercase "NESW" as valid commands'
    )
  })
  it('should initialize grids of the correct size provided a valid width and height', function () {
    assert.equal(
      displayActual(interpreter('', 0, 1, 1)),
      displayExpected('0'),
      'Your interpreter should work correctly for a grid of size 1x1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 6, 6)),
      displayExpected('000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000'),
      'Your interpreter should work correctly for other square grids of side length > 1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 10, 10)),
      displayExpected(
        '0000000000\r\n0000000000\r\n0000000000\r\n0000000000\r\n0000000000\r\n0000000000\r\n0000000000\r\n0000000000\r\n0000000000\r\n0000000000'
      ),
      'Your interpreter should work correctly for other square grids of side length > 1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 3, 1)),
      displayExpected('000'),
      'Your interpreter should properly initialize grids of height 1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 15, 1)),
      displayExpected('000000000000000'),
      'Your interpreter should properly initialize grids of height 1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 1, 8)),
      displayExpected('0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0'),
      'Your interpreter should properly initialize grids of width 1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 1, 11)),
      displayExpected('0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0\r\n0'),
      'Your interpreter should properly initialize grids of width 1'
    )
    assert.equal(
      displayActual(interpreter('', 0, 15, 20)),
      displayExpected(
        '000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000\r\n000000000000000'
      ),
      'Your interpreter should properly initialize grids of any valid dimensions'
    )
  })
  it('should exhibit toroidal (wrapping) behaviour', function () {
    assert.equal(
      displayActual(
        interpreter(
          'eee*s*s*s*w*w*w*w*w*w*w*n*n*n*n*n*n*n*n*n*e*e*e*e*e*e*e*s*s*s*s*s*',
          1000,
          8,
          10
        )
      ),
      displayExpected(
        '00011000\r\n00011000\r\n00011000\r\n11111111\r\n11111111\r\n00011000\r\n00011000\r\n00011000\r\n00011000\r\n00011000'
      ),
      'Your data grid should exhibit toroidal (wrapping) behaviour'
    )
    assert.equal(
      displayActual(
        interpreter('eee*s*s*s*w*w*w*w*w*w*w*n*n*n*n*n*n*n*n*n*e*e*e*e*e*e*e*s*s*s*s*s*', 40, 8, 10)
      ),
      displayExpected(
        '00011000\r\n00011000\r\n00011000\r\n11111111\r\n00000000\r\n00001000\r\n00001000\r\n00001000\r\n00001000\r\n00001000'
      )
    )
    assert.equal(
      displayActual(
        interpreter('eee*s*s*s*w*w*w*w*w*w*w*n*n*n*n*n*n*n*n*n*e*e*e*e*e*e*e*s*s*s*s*s*', 66, 8, 10)
      ),
      displayExpected(
        '00011000\r\n00011000\r\n00011000\r\n11111111\r\n11111111\r\n00011000\r\n00011000\r\n00011000\r\n00011000\r\n00011000'
      )
    )
    assert.equal(
      displayActual(interpreter('sssss*s*s*s*s*www*w*w*seee*ee*s*w*sw*sw*eee*n*es*e*', 1000, 6, 9)),
      displayExpected(
        '111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000'
      ),
      'Your data grid should exhibit toroidal (wrapping) behaviour, and not just for one example'
    )
  })
  it('should work for any combination of loops, be it simple or nested', function () {
    assert.equal(
      displayActual(interpreter('*[es*]', 1, 5, 6)),
      displayExpected('10000\r\n00000\r\n00000\r\n00000\r\n00000\r\n00000'),
      'Your interpreter should not enter the loop on the first iteration of this program'
    )
    assert.equal(
      displayActual(interpreter('*[es*]', 5, 5, 6)),
      displayExpected('10000\r\n01000\r\n00000\r\n00000\r\n00000\r\n00000'),
      'Your interpreter should just have executed the last command of the loop and about to approach the matching "]"'
    )
    assert.equal(
      displayActual(interpreter('*[es*]', 9, 5, 6)),
      displayExpected('10000\r\n01000\r\n00100\r\n00000\r\n00000\r\n00000'),
      'Your interpreter should jump to the command straight *after* the matching "[" on the iteration where it hits the "]" and *not* the matching "[" itself'
    )
    assert.equal(
      displayActual(interpreter('*[es*]', 37, 5, 6)),
      displayExpected('11000\r\n01100\r\n00110\r\n00011\r\n00001\r\n10000'),
      'Your interpreter should should exhibit toroidal behaviour ;)'
    )
    assert.equal(
      displayActual(interpreter('*[es*]', 1000, 5, 6)),
      displayExpected('01111\r\n11111\r\n11111\r\n11111\r\n11111\r\n11111'),
      'Your interpreter should exit the loop at the correct conditions'
    )
    assert.equal(
      displayActual(interpreter('*[es*]*', 3000, 5, 6)),
      displayExpected('11111\r\n11111\r\n11111\r\n11111\r\n11111\r\n11111'),
      'Your interpreter should exit the loop at the correct conditions'
    )
    assert.equal(
      displayActual(interpreter('*[s[e]*]', 5, 5, 5)),
      displayExpected('10000\r\n10000\r\n00000\r\n00000\r\n00000'),
      'Your interpreter should also work with nested loops'
    )
    assert.equal(
      displayActual(interpreter('*[s[e]*]', 9, 5, 5)),
      displayExpected('10000\r\n10000\r\n10000\r\n00000\r\n00000'),
      'Your interpreter should also work with nested loops'
    )
    assert.equal(
      displayActual(interpreter('*[s[e]*]', 23, 5, 5)),
      displayExpected('11000\r\n10000\r\n10000\r\n10000\r\n10000'),
      'Your interpreter should also work with nested loops'
    )
    assert.equal(
      displayActual(interpreter('*[s[e]*]', 39, 5, 5)),
      displayExpected('11000\r\n11000\r\n11000\r\n11000\r\n11000'),
      'Your interpreter should also work with nested loops'
    )
    assert.equal(
      displayActual(interpreter('*[s[e]*]', 49, 5, 5)),
      displayExpected('11100\r\n11100\r\n11000\r\n11000\r\n11000'),
      'Your interpreter should also work with nested loops'
    )
  })
  it('should work for a randomly generated Paintfuck program over a 10x10 grid', function () {
    function mySolution(code: string, iterations: number, width: number, height: number) {
      // Sanitize code of non-command characters to give executable program
      const program = code.replace(/[^nesw*[\]]/g, '')
      // Data Grid
      const datagrid: number[][] = []
      for (let j = 0; j < height; j++) datagrid[j] = arrayFill(width, 0)
      // Steps
      let steps = 0
      // Program Index
      let i = 0
      // Pointer (x, y)
      const pointer = { x: 0, y: 0 }
      while (steps < iterations) {
        // Return final state of datagrid if entire program evaluated
        if (program[i] === undefined) return datagrid.map((r) => r.join('')).join('\r\n')
        switch (program[i]) {
          case 'n':
            // Go up.  Should exhibit toroidal behaviour
            pointer.y = (pointer.y + height - 1) % height
            break
          case 'e':
            // Go right.  Should exhibit toroidal behaviour
            pointer.x = (pointer.x + 1) % width
            break
          case 's':
            // Go down.  Should exhibit toroidal behaviour
            pointer.y = (pointer.y + 1) % height
            break
          case 'w':
            // Go left.  Should exhibit toroidal behaviour
            pointer.x = (pointer.x + width - 1) % width
            break
          case '*':
            // Flips the current bit
            datagrid[pointer.y][pointer.x] = +!datagrid[pointer.y][pointer.x]
            break
          case '[':
            // If current bit under pointer is 0 then skip to corresponding "]"
            if (datagrid[pointer.y][pointer.x] === 0) {
              let unmatched = 1
              while (unmatched) {
                if (program[++i] === '[') unmatched++
                if (program[i] === ']') unmatched--
              }
            }
            break
          case ']':
            // If current bit under pointer is nonzero then jump to matching "["
            if (datagrid[pointer.y][pointer.x] === 1) {
              let unmatched = 1
              while (unmatched) {
                if (program[--i] === '[') unmatched--
                if (program[i] === ']') unmatched++
              }
            }
            break
        }
        i++
        steps++
      }
      // Return final state of data grid
      return datagrid.map((r) => r.join('')).join('\r\n')
    }

    let randomPaintfuckProgram = ''
    const length = 100 + ~~(901 * Math.random())
    for (let i = 0; i < length; i++) {
      randomPaintfuckProgram += 'nesw*'[~~(5 * Math.random())]
    }

    const iterations = ~~(1001 * Math.random())
    const expected = mySolution(randomPaintfuckProgram, iterations, 10, 10)
    const actual = interpreter(randomPaintfuckProgram, iterations, 10, 10)
    assert.equal(displayActual(actual), displayExpected(expected))
  })

  function arrayFill<T>(length: number, element: T) {
    const arr: T[] = []
    for (let i = 0; i < length; i++) {
      arr.push(element)
    }
    return arr
  }
})
// // Prints representation of datagrid - 0's are black and 1's are white
// // Note: prettyPrint() only works properly if your interpreter returns a representation of the datagrid in the correct format
// function prettyPrint(datagrid: string) {
//   let consoleOutput = '<pre>'
//   const copy = datagrid.split('\r\n')
//   for (let i = 0; i < copy.length; i++) {
//     for (let j = 0; j < copy[i].length; j++) {
//       consoleOutput += `<span style="color:${
//         copy[i][j] === '0' ? 'black' : 'white'
//       };background-color:${copy[i][j] === '0' ? 'black' : 'white'}">xx</span>`
//     }
//     consoleOutput += '<br />'
//   }
//   consoleOutput += '</pre>'
//   console.log(consoleOutput)
//   return datagrid
// }
// // Displays the grid your interpreter returns
// function displayActual(actual: string) {
//   console.log('You returned:')
//   return prettyPrint(actual)
// }
// // Displays the expected final state of datagrid
// function displayExpected(expected: string) {
//   console.log('Expected final state of data grid:')
//   return prettyPrint(expected)
// }
// it('should work for some example test cases', function () {
//   assert.equal(
//     displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 0, 6, 9)),
//     displayExpected(
//       '000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000'
//     ),
//     'Your interpreter should initialize all cells in the datagrid to 0'
//   )
//   assert.equal(
//     displayActual(interpreter('*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*', 7, 6, 9)),
//     displayExpected(
//       '111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000'
//     ),
//     'Your interpreter should adhere to the number of iterations specified'
//   )
//   //     assert.equal(displayActual(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9)), displayExpected("111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000"), "Your interpreter should traverse the 2D datagrid correctly");
//   //     assert.equal(displayActual(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9)), displayExpected("111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"), "Your interpreter should traverse the 2D datagrid correctly for all of the \"n\", \"e\", \"s\" and \"w\" commands");
//   //     assert.equal(displayActual(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9)), displayExpected("111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"), "Your interpreter should terminate normally and return a representation of the final state of the 2D datagrid when all commands have been considered from left to right even if the number of iterations specified have not been fully performed");
// })

// it('should work for any combination of loops, be it simple or nested', function () {
//   assert.equal(
//     displayActual(interpreter('*[es*]', 9, 5, 6)),
//     displayExpected('10000\r\n01000\r\n00100\r\n00000\r\n00000\r\n00000'),
//     'Your interpreter should jump to the command straight *after* the matching "[" on the iteration where it hits the "]" and *not* the matching "[" itself: '
//   )
// })

// it('should also work with nested loops #1', function () {
//   assert.equal(
//     displayActual(interpreter('*[s[e]*]', 9, 5, 5)),
//     displayExpected('10000\r\n10000\r\n10000\r\n00000\r\n00000'),
//     'Your interpreter should also work with nested loops'
//   )
// })

// it('should also work with nested loops #2', function () {
//   assert.equal(
//     displayActual(interpreter('*[s[e]*]', 39, 5, 5)),
//     displayExpected('11000\r\n11000\r\n11000\r\n11000\r\n11000'),
//     'Your interpreter should also work with nested loops'
//   )
// })
// })
