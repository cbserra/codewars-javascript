const NON_CMD_CHARS_REGEX = RegExp('[^nsew*\\[\\]]', 'g')
const MOVE_POINTER_NORTH = 'n'
const MOVE_POINTER_SOUTH = 's'
const MOVE_POINTER_EAST = 'e'
const MOVE_POINTER_WEST = 'w'
const FLIP_BIT = '*'
const OPENING_BRACE = '['
const JUMP_PAST_MATCHING_CLOSING_BRACE = OPENING_BRACE
const CLOSING_BRACE = ']'
const JUMP_BACK_TO_MATCHING_OPENING_BRACE = CLOSING_BRACE

export function interpreter(
  code: string,
  iterations: number,
  width: number,
  height: number
): string {
  const cleanedCode = code.replace(NON_CMD_CHARS_REGEX, '')
  const grid = initializeGrid(width, height)

  if (iterations === 0) {
    return gridToString(grid)
  }

  const iterationLength = Math.min(cleanedCode.length, iterations)

  let actualIterations = 0
  let codeIndex = 0
  for (let heightIndex = 0; heightIndex < height; ) {
    for (let widthIndex = 0; widthIndex < width; ) {
      switch (cleanedCode[codeIndex]) {
        case MOVE_POINTER_NORTH:
          // Move pointer to the 'north' (by 1 cell),
          heightIndex = heightIndex - 1 < 0 ? height - 1 : heightIndex - 1
          break

        case MOVE_POINTER_SOUTH:
          // Move pointer to the right (by 1 cell)
          heightIndex = heightIndex + 1 >= height ? 0 : heightIndex + 1
          break

        case MOVE_POINTER_EAST:
          // Move pointer to the left (by 1 cell)
          widthIndex = widthIndex + 1 >= width ? 0 : widthIndex + 1
          break

        case MOVE_POINTER_WEST:
          // Move pointer to the left (by 1 cell)
          widthIndex = widthIndex - 1 < 0 ? width - 1 : widthIndex - 1
          break

        case FLIP_BIT: {
          // Flip the bit at the current cell
          grid[heightIndex][widthIndex] = grid[heightIndex][widthIndex] === 0 ? 1 : 0
          break
        }

        case JUMP_PAST_MATCHING_CLOSING_BRACE: {
          // Jump past matching ] if value at current cell is 0
          if (grid[heightIndex][widthIndex] === 0) {
            const matchingClosingBraceIndex = cleanedCode.indexOf(CLOSING_BRACE, codeIndex)
            codeIndex = matchingClosingBraceIndex
          }
          break
        }

        case JUMP_BACK_TO_MATCHING_OPENING_BRACE:
          // Jump back to matching [ (if value at current cell is nonzero)
          if (grid[heightIndex][widthIndex] !== 0) {
            const matchingOpeningBraceIndex = cleanedCode.indexOf(OPENING_BRACE)
            codeIndex = matchingOpeningBraceIndex
          }
          break
      }

      if (++codeIndex === iterationLength || ++actualIterations === iterations) {
        return gridToString(grid)
      }
    }
  }

  return gridToString(grid)
}

function initializeGrid(width: number, height: number) {
  const grid = new Array(height)
  for (let i = 0; i < height; i++) {
    grid[i] = new Array(width)
    for (let j = 0; j < width; j++) {
      grid[i][j] = 0
    }
  }

  return grid
}

function gridToString(initGrid: number[][]): string {
  return initGrid.map((row) => row.join('')).join('\r\n')
}
