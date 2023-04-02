// String.fromCodePoint(72,101,108,108,111,44,30,87,111,114,108,100,33));

const NON_CMD_CHARS_REGEX = /[^+.]/g
// console.log(`🚀 ~ myFirstInterpreter ~ NON_CMD_CHARS_REGEX:`, NON_CMD_CHARS_REGEX)

export function myFirstInterpreter(code: string): string {
  // console.log('\n\n🔫 ~ myFirstInterpreter ~ code:', code)
  console.log(
    `🔫 ~ myFirstInterpreter ~ ${NON_CMD_CHARS_REGEX}.exec(code):`,
    NON_CMD_CHARS_REGEX.exec(code)
  )

  // const cleanedCode = code.replace(/[^+.]/, '')
  // console.log(`🚀 ~ myFirstInterpreter ~ cleanedCode:`, cleanedCode)
  // const nonCmdChars = code.replace(/[+.]/g, '').split('')
  // console.log(`🚀 ~ myFirstInterpreter ~ nonCmdChars:`, nonCmdChars.join(''))
  const codeClone = code.replace(NON_CMD_CHARS_REGEX, '').split('')
  let mutableCode = codeClone

  // console.log(`🚀 ~ myFirstInterpreter ~ mutableCode:`, mutableCode)
  console.log(`🚀 ~ myFirstInterpreter ~ mutableCode.length:`, mutableCode.length)
  const codePoints: number[] = []

  for (let i = 0; i < mutableCode.length; i++) {
    // const regex = /`[${nonCmdChars.join('')}]`/g
    // console.log(`🚀 ~ myFirstInterpreter ~ regex:`, regex)

    // while (NON_CMD_CHARS_REGEX.test(mutableCode[i])) {
    //   console.log('\n\n[' + i + ']')
    //   console.log(`🚀 ~ myFirstInterpreter ~ mutableCode[${i}]: '${mutableCode[i]}'`)
    //   //       codePoints.push(i)
    //   console.log(`🚀 ~ myFirstInterpreter ~ codePoints:`, String.fromCodePoint(...codePoints))
    //   const codeToBeRemoved = mutableCode[i]
    //   console.log(`🚀 ~ myFirstInterpreter ~ codeToBeRemoved: '${codeToBeRemoved}'`)
    //   const splicedCode = mutableCode.splice(i, 1)
    //   // console.log(`🚀 ~ myFirstInterpreter ~ splicedCode:`, splicedCode)
    //   // console.log(`🚀 ~ myFirstInterpreter ~ splicedCode.length:`, splicedCode.length)
    // }

    while (mutableCode[i] === '.') {
      //       console.log('\n\n[' + i + ']')
      //       console.log(`🚀 ~ myFirstInterpreter ~ mutableCode[${i}]: '${mutableCode[i]}'`)
      codePoints.push(i)
      //       console.log(`🚀 ~ myFirstInterpreter ~ codePoints:`, String.fromCodePoint(...codePoints))
      const codeToBeRemoved = mutableCode[i]
      // console.log(`🚀 ~ myFirstInterpreter ~ codeToBeRemoved: '${codeToBeRemoved}'`)
      const splicedCode = mutableCode.splice(i, 1)
      // console.log(`🚀 ~ myFirstInterpreter ~ splicedCode:`, splicedCode)
      // console.log(`🚀 ~ myFirstInterpreter ~ splicedCode.length:`, splicedCode.length)
    }

    if (i > 255) {
      //       console.log('\n\n[' + i + ']')
      //       console.log(`🚀 ~ myFirstInterpreter ~ i > 255, i = `, i)
      //       console.log(
      //         `🚀 ~ myFirstInterpreter ~ i > 255 ~ mutableCode.length ~ BEFORE SPLICE:`,
      //         mutableCode.length
      //       )
      mutableCode = mutableCode.splice(256)
      //       console.log(
      //         `🚀 ~ myFirstInterpreter ~ i > 255 ~ mutableCode.length ~ AFTER SPLICE:`,
      //         mutableCode.length
      //       )
      i = 0
      // console.log(`inside i >= 256 if-statement`)
    }
  }

  console.log('\n\n[DONE]')
  console.log(`🚀 ~ myFirstInterpreter ~ after for-loop: codePoints = ${codePoints}`)
  const fromCodePointResult = String.fromCodePoint(...codePoints)
  console.log(
    `🚀 ~ myFirstInterpreter ~ after for-loop: fromCodePointResult: `,
    fromCodePointResult
  )
  console.log(
    `🚀 ~ myFirstInterpreter ~ after for-loop: mutableCode.length = ${mutableCode.length}`
  )

  return String.fromCodePoint(...codePoints)
  // return codePoints.map((n) => String.fromCodePoint(n)).join('')
}
