const NON_CMD_CHARS_REGEX = RegExp('[^><*\\[\\]]', 'g')

function isOutOfBounds(leftOutOfBounds: boolean, rightOutOfBounds: boolean): boolean {
  return leftOutOfBounds || rightOutOfBounds
}

function getFinalResult(tapeOutput: number[]): string {
  const result = tapeOutput.map((n: number) => n.toString()).join('')
  console.log(`🚀 ~ interpreter ~ result:`, result)
  return result
}

export function interpreter(code: string, tape: string): string {
  console.log(`🚀 ~ interpreter ~ code = ${code}`)
  console.log(`🚀 ~ interpreter ~ code =  ~ code.length = ${code.length}`)
  console.log(`🚀 ~ interpreter ~ tape =  ${tape}`)
  console.log(`🚀 ~ interpreter ~ tape =  ~ code.length = ${tape.length}`)

  const cleanedCode = code.replace(NON_CMD_CHARS_REGEX, '')
  console.log(`🚀 ~ interpreter ~ cleanedCode:`, cleanedCode)
  const tapeInput = tape.split('').map((s) => parseInt(s))
  console.log(`🚀 ~ interpreter ~ tapeInput:`, tapeInput)
  const tapeOutput: number[] = [...tapeInput]

  let tapeCellPointer = 0
  // const codePoints: number[] = []

  let leftOutOfBounds = false
  let rightOutOfBounds = false
  for (let codeIndex = 0; codeIndex < cleanedCode.length; codeIndex++) {
    switch (cleanedCode[codeIndex]) {
      case '>':
        // Move pointer to the right (by 1 cell)
        tapeCellPointer++
        rightOutOfBounds = tapeCellPointer >= tapeInput.length
        console.log(
          `🚀 ~ interpreter ~ '>' ~ tapeCellPointer = ${tapeCellPointer} , tapeInput.length = ${tapeInput.length}, rightOutOfBounds = ${rightOutOfBounds}`
        )
        // console.log(`🚀 ~ interpreter ~ tapeCellPointer:`, tapeCellPointer)
        break

      case '<':
        // Move pointer to the left (by 1 cell)
        tapeCellPointer--
        leftOutOfBounds = tapeCellPointer < 0
        console.log(
          `🚀 ~ interpreter ~ '<' ~ tapeCellPointer = ${tapeCellPointer}, tapeInput.length = ${tapeInput.length}, leftOutOfBounds = ${leftOutOfBounds}`
        )
        // console.log(`🚀 ~ interpreter ~ tapeCellPointer:`, tapeCellPointer)
        break

      case '*':
        // Flip the bit at the current cell
        tapeOutput[tapeCellPointer] = tapeInput[tapeCellPointer] === 0 ? 1 : 0
        console.log(
          `🚀 ~ interpreter ~ '*' ~ tapeInput[${tapeCellPointer}] = ${tapeInput[tapeCellPointer]} ~ tapeOutput[${tapeCellPointer}] = ${tapeOutput[tapeCellPointer]}`
        )
        break

      case '[':
        // Jump past matching ] if value at current cell is 0
        if (tapeOutput[tapeCellPointer] === 0) {
          const matchingClosingBraceIndex = cleanedCode.indexOf(']', codeIndex)
          console.log(
            `🚀 ~ interpreter ~ '[' ~ tapeCellPointer = ${tapeCellPointer} , matchingClosingBraceIndex = ${matchingClosingBraceIndex}, cleanedCode.length = ${cleanedCode.length}`
          )
          if (matchingClosingBraceIndex < codeIndex) {
            leftOutOfBounds = true
            console.log(
              `\t\t🚀 ~ interpreter ~ '[' ~ leftOutOfBounds = ${leftOutOfBounds}, cleanedCode.length = ${cleanedCode.length}`
            )
          } else if (
            matchingClosingBraceIndex >= cleanedCode.length
            // || matchingClosingBraceIndex + 1 > cleanedCode.length
          ) {
            rightOutOfBounds = true
            console.log(
              `🚀 ~ interpreter ~ '[' ~ tapeCellPointer = ${tapeCellPointer}, matchingClosingBraceIndex = ${matchingClosingBraceIndex}, rightOutOfBounds = ${rightOutOfBounds} , cleanedCode.length = ${cleanedCode.length}`
            )
            // break
          } else {
            // tapeCellPointer = matchingClosingBraceIndex + 1
            codeIndex = matchingClosingBraceIndex
            // codeIndex = tapeCellPointer
          }
        }
        break

      case ']':
        // Jump back to matching [ (if value at current cell is nonzero)
        if (tapeOutput[tapeCellPointer] !== 0) {
          const matchingOpeningBraceIndex = cleanedCode.lastIndexOf('[', codeIndex)
          if (matchingOpeningBraceIndex < 0) {
            leftOutOfBounds = true
            console.log(
              `🚀 ~ interpreter ~ ']' ~ tapeCellPointer = ${tapeCellPointer}, matchingOpeningBraceIndex = ${matchingOpeningBraceIndex}, leftOutOfBounds = ${leftOutOfBounds}, cleanedCode.length = ${cleanedCode.length}`
            )
          } else if (
            matchingOpeningBraceIndex >= cleanedCode.length
            // || matchingOpeningBraceIndex + 1 > cleanedCode.length
          ) {
            rightOutOfBounds = true
            console.log(
              `🚀 ~ interpreter ~ ']' ~ tapeCellPointer = ${tapeCellPointer}, matchingOpeningBraceIndex = ${matchingOpeningBraceIndex}, rightOutOfBounds = ${rightOutOfBounds}, cleanedCode.length = ${cleanedCode.length}`
            )
            // break
          } else {
            // tapeCellPointer = matchingOpeningBraceIndex
            codeIndex = matchingOpeningBraceIndex
            // codeIndex = tapeCellPointer
          }
        }
        break
    }

    if (isOutOfBounds(leftOutOfBounds, rightOutOfBounds)) {
      const outOfBoundsOutput = tapeOutput.slice(
        0,
        leftOutOfBounds ? undefined : rightOutOfBounds ? tapeCellPointer : undefined
      )
      // const result = outOfBoundsOutput.map((n: number) => n.toString()).join('')
      console.log(
        `🚀 ~ interpreter ~ leftOutOfBounds = ${leftOutOfBounds}, rightOutOfBounds = ${rightOutOfBounds}, outOfBoundsOutput = ${outOfBoundsOutput}`
      )
      return getFinalResult([...outOfBoundsOutput])
    }
    // console.log(`🚀 ~ interpreter ~ tapeOutput:`, tapeOutput)
  }

  return getFinalResult([...tapeOutput])
}
