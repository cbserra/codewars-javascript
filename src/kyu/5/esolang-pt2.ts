const NON_CMD_CHARS_REGEX = RegExp('[^><*\\[\\]]', 'g')

export function interpreter(code: string, tape: string): string {
  console.info(`\n\n🏳️ ~ BEGIN interpreter:`, interpreter)
  // console.info(`🚀 ~ interpreter ~ code = ${code}`)
  console.info(`🚀 ~ interpreter ~ code =  ~ code.length = ${code.length}`)
  // console.info(`🚀 ~ interpreter ~ tape =  ${tape}`)
  console.info(`🚀 ~ interpreter ~ tape =  ~ code.length = ${tape.length}`)

  const isWithinBounds = (leftOutOfBounds: boolean, rightOutOfBounds: boolean): boolean => {
    const withinBounds = !isOutOfBounds(leftOutOfBounds, rightOutOfBounds)
    // console.debug(`\n🏳️‍🌈 ~ isWithinBounds? ~ `, withinBounds)
    return withinBounds
  }

  const isOutOfBounds = (leftOutOfBounds: boolean, rightOutOfBounds: boolean): boolean => {
    const outOfBounds = leftOutOfBounds || rightOutOfBounds
    // console.debug(`🏴‍☠️ ~ isOutOfBounds? ~ `, outOfBounds)
    return outOfBounds
  }

  const isProcessingCommands = (codeIndex: number, cleanedCodeLength: number): boolean => {
    const processingCommands = codeIndex < cleanedCodeLength
    // console.debug(`🚧 ~ isProcessingCommands? ~ `, processingCommands)
    return processingCommands
  }

  const finalResult = (tapeOutput: number[]): string => {
    console.info(`🚀 ~ interpreter ~ tapeOutput.length:`, tapeOutput.length)
    const result = tapeOutput.map((n: number) => n.toString()).join('')
    console.info(`🚀 ~ interpreter ~ result.length:`, result.length)
    console.info(`🔍  ~ interpreter ~ result:`, result)
    return result
  }

  const cleanedCode = code.replace(NON_CMD_CHARS_REGEX, '')
  // console.debug(`🚀 ~ interpreter ~ cleanedCode:`, cleanedCode)
  const tapeInput = tape.split('').map((s) => parseInt(s))
  // console.debug(`🚀 ~ interpreter ~ tapeInput:`, tapeInput)
  const tapeOutput: number[] = [...tapeInput]

  let tapeCellPointer = 0
  let codeIndex = 0
  const cleanedCodeLength = cleanedCode.length
  let leftOutOfBounds = false
  let rightOutOfBounds = false

  // const codePoints: number[] = []

  function isValidProcessing() {
    return (
      isWithinBounds(leftOutOfBounds, rightOutOfBounds) &&
      isProcessingCommands(codeIndex, cleanedCodeLength)
    )
  }
  while (isValidProcessing()) {
    //   for (let codeIndex = 0; codeIndex < cleanedCode.length; codeIndex++) {
    switch (cleanedCode[codeIndex]) {
      case '>':
        // Move pointer to the right (by 1 cell)
        tapeCellPointer++
        rightOutOfBounds = tapeCellPointer >= tapeInput.length
        // console.debug(
        //   `🚀 ~ interpreter ~ '>' ~ tapeCellPointer = ${tapeCellPointer} , tapeInput.length = ${tapeInput.length}, rightOutOfBounds = ${rightOutOfBounds}`
        // )
        // console.debug(`🚀 ~ interpreter ~ tapeCellPointer:`, tapeCellPointer)
        break

      case '<':
        // Move pointer to the left (by 1 cell)
        tapeCellPointer--
        leftOutOfBounds = tapeCellPointer < 0
        // console.debug(
        //   `🚀 ~ interpreter ~ '<' ~ tapeCellPointer = ${tapeCellPointer}, tapeInput.length = ${tapeInput.length}, leftOutOfBounds = ${leftOutOfBounds}`
        // )
        // console.debug(`🚀 ~ interpreter ~ tapeCellPointer:`, tapeCellPointer)
        break

      case '*':
        // Flip the bit at the current cell
        // console.debug(
        //   `🚀 ~ interpreter ~ '*' ~ BEFORE FLIP ~ tapeOutput[${tapeCellPointer}] = ${tapeOutput[tapeCellPointer]}`
        // )
        tapeOutput[tapeCellPointer] = tapeOutput[tapeCellPointer] === 0 ? 1 : 0
        // console.debug(
        //   `🚀 ~ interpreter ~ '*' ~ AFTER FLIP (if necessary) ~ tapeOutput[${tapeCellPointer}] = ${tapeOutput[tapeCellPointer]}`
        // )
        break

      case '[':
        // Jump past matching ] if value at current cell is 0
        if (tapeOutput[tapeCellPointer] === 0) {
          const matchingClosingBraceIndex = cleanedCode.indexOf(']', codeIndex)
          // console.debug(
          //   `🚀 ~ interpreter ~ '[' ~ tapeCellPointer = ${tapeCellPointer} , matchingClosingBraceIndex = ${matchingClosingBraceIndex}, cleanedCode.length = ${cleanedCode.length}`
          // )
          if (matchingClosingBraceIndex < codeIndex) {
            leftOutOfBounds = true
            // console.debug(
            //   `\t\t🚀 ~ interpreter ~ '[' ~ leftOutOfBounds = ${leftOutOfBounds}, cleanedCode.length = ${cleanedCode.length}`
            // )
          } else if (
            matchingClosingBraceIndex >= cleanedCode.length
            // || matchingClosingBraceIndex + 1 > cleanedCode.length
          ) {
            rightOutOfBounds = true
            // console.debug(
            //   `🚀 ~ interpreter ~ '[' ~ tapeCellPointer = ${tapeCellPointer}, matchingClosingBraceIndex = ${matchingClosingBraceIndex}, rightOutOfBounds = ${rightOutOfBounds} , cleanedCode.length = ${cleanedCode.length}`
            // )
            // break
          } else {
            // tapeCellPointer = matchingClosingBraceIndex + 1
            codeIndex = matchingClosingBraceIndex
            // console.debug(`🕹️ ~ codeIndex:`, codeIndex)
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
            // console.debug(
            //   `🚀 ~ interpreter ~ ']' ~ tapeCellPointer = ${tapeCellPointer}, matchingOpeningBraceIndex = ${matchingOpeningBraceIndex}, leftOutOfBounds = ${leftOutOfBounds}, cleanedCode.length = ${cleanedCode.length}`
            // )
          } else if (
            matchingOpeningBraceIndex >= cleanedCode.length
            // || matchingOpeningBraceIndex + 1 > cleanedCode.length
          ) {
            rightOutOfBounds = true
            // console.debug(
            //   `🚀 ~ interpreter ~ ']' ~ tapeCellPointer = ${tapeCellPointer}, matchingOpeningBraceIndex = ${matchingOpeningBraceIndex}, rightOutOfBounds = ${rightOutOfBounds}, cleanedCode.length = ${cleanedCode.length}`
            // )
            // break
          } else {
            // tapeCellPointer = matchingOpeningBraceIndex
            codeIndex = matchingOpeningBraceIndex
            // console.debug(`🚀 ~ codeIndex:`, codeIndex)
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
      // console.debug(
      //   `🚀 ~ interpreter ~ leftOutOfBounds = ${leftOutOfBounds}, rightOutOfBounds = ${rightOutOfBounds}, outOfBoundsOutput = ${outOfBoundsOutput}`
      // )
      return finalResult([...outOfBoundsOutput])
    }
    // console.debug(`🚀 ~ interpreter ~ tapeOutput:`, tapeOutput)

    codeIndex++
  }

  // const result =
  //   '100101100100111011101110101101000001011111000011110110110100111011000110001100011000111000110001100001111000000101111111000101000000001110000000000010111110110110001110100011100001001010100011101010001100110001111100010001100111011010011101011111110101111011001000111100010100000000101001110010001011111111000100101000000110000100000101101111110101110101100001010100000100011011111001000111100101000011100001100001000001000111000011000000000000101001011001111001011101000010001010011001100110101100001001101111010111001101000010011001010111010011100111000111110010110100101101010100100001000111011011100001010111001010000101010010010101100111110011010110111101000111011011100011100000001110000111101110100011010010011111001000001011111101101011010000101000000111111110111101110100011011000111010101101011011111110110110000110101001110011000010011110101101111001111110011100100001010111011011101001111100110011010010001010111000111001000101101101110101000001100110010000101011100111001001011011111'
  const result = finalResult([...tapeOutput])
  console.info(`🚀 ~ [END OF PROGRAM] ~ result:`, result)
  return result
}
