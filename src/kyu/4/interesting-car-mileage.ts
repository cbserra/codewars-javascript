const DIGIT_FOLLOWED_BY_ZEROES_REG_EX = /^(\d){1}0{2,}$/
const EVERY_DIGIT_SAME_REG_EX = /^(\d)\1{2,}$/

export function isInteresting(n: number, awesomePhrases: number[]): number {
  return runAlgorithmsAndGetLargestResult(n, awesomePhrases, 0)
}

function runAlgorithmsAndGetLargestResult(
  n: number,
  awesomePhrases: number[],
  initLargestResult: number
): number {
  let largestResult = initLargestResult

  if (n < 100) {
    largestResult = getLargestResult(largestResult, isInterestingNumberApproachingLargeNumber(n))
  }

  largestResult = getLargestResult(largestResult, isInterestingDigitFollowedByZeroes(n))

  largestResult = getLargestResult(largestResult, isInterestingEveryDigitSame(n))

  largestResult = getLargestResult(largestResult, isInterestingEveryDigitIncrementSequential(n))

  largestResult = getLargestResult(largestResult, isInterestingEveryDigitDecrementSequential(n))

  largestResult = getLargestResult(largestResult, isInterestingPalindrome(n))

  largestResult = getLargestResult(largestResult, isInterestingAwesomePhrase(n, awesomePhrases))

  return largestResult
}

function getLargestResult(largestResult: number, currentResult: number) {
  return currentResult > largestResult ? currentResult : largestResult
}

function everyNumberIsValidLengthAlgo(nums: number[]): boolean {
  return nums.every((n) => n >= 100 && n <= 999999999)
}

function someNumbersAreValidLengthAlgo(nums: number[]): boolean {
  return nums.some((n) => n >= 100 && n <= 999999999)
}

function createValidTestingNumbers(n: number): number[] {
  return [n, n + 1, n + 2]
}

function isInterestingNumberApproachingLargeNumber(n: number): number {
  return someNumbersAreValidLengthAlgo(createValidTestingNumbers(n)) ? 1 : 0
}

function testAlgorithms(algorithm: (n: number) => boolean, n: number): number {
  if (!everyNumberIsValidLengthAlgo(createValidTestingNumbers(n))) {
    return 0
  }

  if (algorithm(n)) {
    return 2
  }

  if (algorithm(n + 1) || algorithm(n + 2)) {
    return 1
  }

  return 0
}

function isInterestingDigitFollowedByZeroes(n: number): number {
  const isInterestingDigitFollowedByZeroesAlgo = (n: number): boolean => {
    return DIGIT_FOLLOWED_BY_ZEROES_REG_EX.test(n.toString())
  }

  return testAlgorithms(isInterestingDigitFollowedByZeroesAlgo, n)
}

function isInterestingEveryDigitSame(n: number): number {
  const isInterestingEveryDigitSameAlgo = (n: number): boolean => {
    return EVERY_DIGIT_SAME_REG_EX.test(n.toString())
  }

  return testAlgorithms(isInterestingEveryDigitSameAlgo, n)
}

function isInterestingEveryDigitIncrementSequential(n: number): number {
  const isInterestingEveryDigitIncrementSequentialAlgo = (n: number): boolean => {
    let prevNumber = -1
    for (let i = 0; i < n.toString().length; i++) {
      const currentNumber = parseInt(n.toString().charAt(i))
      if (prevNumber !== -1) {
        if (prevNumber === 9 && currentNumber === 0) {
          continue
        } else if (currentNumber !== prevNumber + 1) {
          return false
        }
      }
      prevNumber = currentNumber
    }
    return true
  }

  return testAlgorithms(isInterestingEveryDigitIncrementSequentialAlgo, n)
}

function isInterestingEveryDigitDecrementSequential(n: number): number {
  const isInterestingEveryDigitDecrementSequentialAlgo = (n: number): boolean => {
    let prevNumber = -1
    for (let i = 0; i < n.toString().length; i++) {
      const currentNumber = parseInt(n.toString().charAt(i))
      if (prevNumber !== -1) {
        if (
          (prevNumber === 1 && currentNumber === 0) ||
          (prevNumber === 0 && currentNumber === 9)
        ) {
          continue
        } else if (currentNumber !== prevNumber - 1) {
          return false
        }
      }
      prevNumber = currentNumber
    }
    return true
  }

  return testAlgorithms(isInterestingEveryDigitDecrementSequentialAlgo, n)
}

function isInterestingPalindrome(n: number): number {
  const isInterestingPalindromeAlgo = (n: number): boolean => {
    return n === parseInt(n.toString().split('').reverse().join(''))
  }

  return testAlgorithms(isInterestingPalindromeAlgo, n)
}

function isInterestingAwesomePhrase(n: number, awesomePhrases: number[]): number {
  const isInterestingAwesomePhraseAlgo = (n: number): boolean => {
    return awesomePhrases.includes(n)
  }

  return testAlgorithms(isInterestingAwesomePhraseAlgo, n)
}
