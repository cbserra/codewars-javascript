const NON_CMD_CHARS_REGEX = RegExp('[^><*\\[\\]]', 'g')
const MOVE_POINTER_RIGHT = '>'
const MOVE_POINTER_LEFT = '<'
const FLIP_BIT = '*'
const JUMP_PAST_MATCHING_CLOSING_BRACE = '['
const JUMP_BACK_TO_MATCHING_OPENING_BRACE = ']'

const MATCHING_BRACES = {
  [JUMP_PAST_MATCHING_CLOSING_BRACE]: JUMP_BACK_TO_MATCHING_OPENING_BRACE,
  [JUMP_BACK_TO_MATCHING_OPENING_BRACE]: JUMP_PAST_MATCHING_CLOSING_BRACE,
}

const isWithinBounds = (leftOutOfBounds: boolean, rightOutOfBounds: boolean): boolean => {
  return !isOutOfBounds(leftOutOfBounds, rightOutOfBounds)
}

const isOutOfBounds = (leftOutOfBounds: boolean, rightOutOfBounds: boolean): boolean => {
  return leftOutOfBounds || rightOutOfBounds
}

const isProcessingCommands = (codeIndex: number, cleanedCodeLength: number): boolean => {
  return codeIndex < cleanedCodeLength
}

const finalResult = (tapeOutput: number[]): string => {
  return tapeOutput.map((n: number) => n.toString()).join('')
}

const isValidProcessing = (
  leftOutOfBounds: boolean,
  rightOutOfBounds: boolean,
  codeIndex: number,
  cleanedCodeLength: number
): boolean => {
  return (
    isWithinBounds(leftOutOfBounds, rightOutOfBounds) &&
    isProcessingCommands(codeIndex, cleanedCodeLength)
  )
}

export const interpreter = (code: string, tape: string) => {
  const cleanedCode = code.replace(NON_CMD_CHARS_REGEX, '')
  const cleanedCodeLength = cleanedCode.length
  const tapeOutput = tape.split('').map((s) => parseInt(s))

  let tapeCellPointer = 0
  let codeIndex = 0
  let leftOutOfBounds = false
  let rightOutOfBounds = false

  while (isValidProcessing(leftOutOfBounds, rightOutOfBounds, codeIndex, cleanedCodeLength)) {
    switch (cleanedCode[codeIndex]) {
      case MOVE_POINTER_RIGHT:
        // Move pointer to the right (by 1 cell)
        tapeCellPointer++
        rightOutOfBounds = tapeCellPointer >= tapeOutput.length
        if (rightOutOfBounds) {
          const outOfBoundsOutput = tapeOutput.slice(0, tapeCellPointer)
          return finalResult([...outOfBoundsOutput])
        }
        break

      case MOVE_POINTER_LEFT:
        // Move pointer to the left (by 1 cell)
        tapeCellPointer--
        leftOutOfBounds = tapeCellPointer < 0
        if (leftOutOfBounds) {
          const outOfBoundsOutput = tapeOutput.slice(0)
          return finalResult([...outOfBoundsOutput])
        }
        break

      case FLIP_BIT:
        // Flip the bit at the current cell
        tapeOutput[tapeCellPointer] = tapeOutput[tapeCellPointer] === 0 ? 1 : 0
        break

      case JUMP_PAST_MATCHING_CLOSING_BRACE:
        // Jump past matching ] if value at current cell is 0
        if (tapeOutput[tapeCellPointer] === 0) {
          const matchingClosingBraceIndex = cleanedCode.indexOf(
            MATCHING_BRACES[JUMP_PAST_MATCHING_CLOSING_BRACE],
            codeIndex
          )
          if (matchingClosingBraceIndex < codeIndex) {
            leftOutOfBounds = true
          } else if (matchingClosingBraceIndex >= cleanedCodeLength) {
            rightOutOfBounds = true
          } else {
            codeIndex = matchingClosingBraceIndex
          }
        }
        break

      case JUMP_BACK_TO_MATCHING_OPENING_BRACE:
        // Jump back to matching [ (if value at current cell is nonzero)
        if (tapeOutput[tapeCellPointer] !== 0) {
          const matchingOpeningBraceIndex = cleanedCode.lastIndexOf(
            MATCHING_BRACES[JUMP_BACK_TO_MATCHING_OPENING_BRACE],
            codeIndex
          )
          if (matchingOpeningBraceIndex < 0) {
            leftOutOfBounds = true
          } else if (matchingOpeningBraceIndex >= cleanedCodeLength) {
            rightOutOfBounds = true
          } else {
            codeIndex = matchingOpeningBraceIndex
          }
        }
        break
    }

    codeIndex++
  }

  return finalResult([...tapeOutput])
}
