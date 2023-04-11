const NON_CMD_CHARS_REGEX = RegExp('[^+.]', 'g')

export function myFirstInterpreter(code: string): string {
  const cleanedCode = code.replace(NON_CMD_CHARS_REGEX, '')

  let memoryCell = 0
  const codePoints: number[] = []
  for (let i = 0; i < cleanedCode.length; i++) {
    if (cleanedCode[i] === '+') {
      memoryCell = ++memoryCell > 255 ? memoryCell % 256 : memoryCell
    } else if (cleanedCode[i] === '.') {
      codePoints.push(memoryCell)
    }
  }

  return String.fromCharCode(...codePoints)
}
