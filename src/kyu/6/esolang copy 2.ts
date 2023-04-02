const NON_CMD_CHARS_REGEX = /[^+.]/g

export function myFirstInterpreter(code: string): string {
  console.log('\n\n[BEGIN EXECUTION 🏃🏼]')
  console.log(
    `\t\tt🚀 ~ myFirstInterpreter ~ ${NON_CMD_CHARS_REGEX}.exec(code):`,
    NON_CMD_CHARS_REGEX.exec(code)
  )

  const codeClone = code.replace(NON_CMD_CHARS_REGEX, '').split('')
  let mutableCode = codeClone

  console.log(`\t\t🚀 ~ myFirstInterpreter ~ mutableCode.length:`, mutableCode.length)
  const codePoints: number[] = []

  for (let i = 0; i < mutableCode.length; i++) {
    while (mutableCode[i] === '.') {
      codePoints.push(i)
      const codeToBeRemoved = mutableCode[i]
      const splicedCode = mutableCode.splice(i, 1)
    }

    if (i > 255) {
      mutableCode = mutableCode.splice(256)
      i = 0
    }
  }

  console.log('\n\n[FINISHED THE LOOP 🏁]')
  console.log(
    `\t\t🚀 ~ myFirstInterpreter ~ after for-loop: codePoints.length = ${codePoints.length}`
  )
  const fromCodePointResult = String.fromCodePoint(...codePoints)
  console.log(
    `\t\t🚀 ~ myFirstInterpreter ~ after for-loop: fromCodePointResult: `,
    fromCodePointResult
  )
  console.log(
    `\t\t🚀 ~ myFirstInterpreter ~ after for-loop: mutableCode.length = ${mutableCode.length}`
  )

  return fromCodePointResult
}
