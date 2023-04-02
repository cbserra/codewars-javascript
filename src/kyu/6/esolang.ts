const NON_CMD_CHARS_REGEX = /[^+.]/g
const INC_MEM_CELL_REGEX = /[+]*[^+]/g
// const INC_MEM_CELL_REGEX = /[+]*/g
const CODE_POINT_REGEX = /\.+/

export function myFirstInterpreter(code: string): string {
  console.log('\n\n[BEGIN EXECUTION 🏃🏼]')
  const foundNonCmdCharsResult = NON_CMD_CHARS_REGEX.exec(code)
  console.log(
    `\t\tt🚀 ~ myFirstInterpreter ~ non cmd chars to remove, if any ~ NON_CMD_CHARS_REGEX.exec(code):`,
    foundNonCmdCharsResult
  )

  let mutableCode = code.replace(NON_CMD_CHARS_REGEX, '')
  const movingMemoryCellRef = ''

  console.log(`\t\t🚀 ~ myFirstInterpreter ~ mutableCode.length:`, mutableCode.length)
  const codePoints: number[] = []

  let idx = 0
  const mutableCodeLength = mutableCode.length
  let tmpResult = ''

  console.log('\n\n[ENTER LOOP 🌀]')
  while (idx < mutableCodeLength) {
    const movingMemCellRegExResult = INC_MEM_CELL_REGEX.exec(mutableCode)
    console.log(`\t\t🚀 ~ myFirstInterpreter ~ movingMemCellRegExResult:`, movingMemCellRegExResult)
    const movingMemCellCount = movingMemCellRegExResult?.length || 0
    console.log(`\t\t🚀 ~ myFirstInterpreter ~ movingMemCellCount:`, movingMemCellCount)
    idx += movingMemCellCount

    const currentCharPointRegExResult = CODE_POINT_REGEX.exec(mutableCode.substring(idx))
    console.log(
      `\t\t🚀 ~ myFirstInterpreter ~ currentCharPointRegExResult:`,
      currentCharPointRegExResult
    )
    const currentCodePoint = String.fromCodePoint(idx)
    console.log(`\t\t🚀 ~ myFirstInterpreter ~ currentCodePoint:`, currentCodePoint)
    const currentCodePoints = currentCodePoint.repeat(currentCharPointRegExResult?.length || 0)
    console.log(`\t\t🚀 ~ myFirstInterpreter ~ currentCodePoints:`, currentCodePoints)
    tmpResult += currentCodePoints
    console.log(`\t\t🚀 ~ myFirstInterpreter ~ tmpResult:`, tmpResult)

    for (let i = 0; i < mutableCode.length; i++) {
      if (mutableCode[i] === '.') {
        const endSubStr = parseInt(mutableCode.substring(i, mutableCode.substring(i).indexOf('+')))
        const substr = mutableCode.substring(i, endSubStr)
        console.log(`\t\t🚀 ~ myFirstInterpreter ~ substr:`, substr)
        const regExMatch = CODE_POINT_REGEX.exec(substr)
        console.log(`\t\t🚀 ~ myFirstInterpreter ~ regExMatch:`, regExMatch)

        // const matchLength = regExMatch?.length || 0
        // for (let j = 0; j < matchLength; j++) {
        //   result += String.fromCodePoint(i)
        // }

        // regExMatch?.forEach((_codePoint) => codePoints.push(i))
        // console.log(`\t\t🚀 ~ myFirstInterpreter ~ result:`, result)
        // if (const codePointCount = mutableCode.substring(i).match(CODE_POINT_REGEX)) {
        // }
      }

      if (i > 255) {
        mutableCode = mutableCode.substring(256)
        i = 0
      }
    }
  }

  console.log('\n\n[FINISHED THE LOOP 🏁]')
  console.log(`\t\t🚀 ~ myFirstInterpreter ~ after for-loop: result = ${result}`)

  return result
  // console.log(
  //   `\t\t🚀 ~ myFirstInterpreter ~ after for-loop: codePoints.length = ${codePoints.length}`
  // )
  // const fromCodePointResult = String.fromCodePoint(...codePoints)
  // console.log(
  //   `\t\t🚀 ~ myFirstInterpreter ~ after for-loop: fromCodePointResult: `,
  //   fromCodePointResult
  // )
  // console.log(
  //   `\t\t🚀 ~ myFirstInterpreter ~ after for-loop: mutableCode.length = ${mutableCode.length}`
  // )

  // return fromCodePointResult
}
