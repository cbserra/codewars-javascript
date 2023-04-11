type NumberToString = {
  [key: number]: string
}

const BASE_10_ROMAN_NUMERAL: NumberToString = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
}

export function solution(number: number): string | undefined {
  console.log(`🚀 ~ solution ~ number`, number)
  const originalNumber = number
  // const numberAsString = number.toString()
  // const stringAsArray = numberAsString.split('')

  let mutableInput = number
  let result = ''
  // let remainder = 0
  const leadingNumber = getLeadingNumber(originalNumber)
  console.log(`🚀 ~ leadingNumber`, leadingNumber)
  const remainder = getRemainder(originalNumber, leadingNumber)
  console.log(`🚀 ~ remainder`, remainder)

  // if ( mutableInput >= 1000) {
  //   const leadingNum = mutableInput / 1_000
  //   console.log(`🚀 ~ solution ~ leadingNum`, leadingNum)

  //   if (leadingNum === 4 || leadingNum === 9) {

  // remainder = originalNumber % 1_000
  // console.log(`🚀 ~ solution ~ remainder`, remainder)

  // for (let i = 0; i < leadingNum; i++) {
  //   result += BASE_10_ROMAN_NUMERAL[1000]
  //   console.log(`🚀 ~ solution ~ result`, result)
  // }
  // result += BASE_10_ROMAN_NUMERAL[number / 1000]
  //     remainder = number / 1000
  // console.log(`result = ${result}, remainder = ${remainder}`)
  //   return result + solution(remainder)
  // } else if (mutableInput >= 500) {
  //   const numFiveHundreds = mutableInput / 500
  //   console.log(`🚀 ~ solution ~ leadingNum`, numFiveHundreds)
  //   remainder = originalNumber % 500
  //   console.log(`🚀 ~ solution ~ remainder`, remainder)

  //   for (let i = 0; i < numFiveHundreds; i++) {
  //     result += BASE_10_ROMAN_NUMERAL[500]
  //     console.log(`🚀 ~ solution ~ result`, result)
  //   }

  //   return result + solution(remainder)
  // } else if (mutableInput >= 100) {
  //   const numHundreds = mutableInput / 100
  //   console.log(`🚀 ~ solution ~ leadingNum`, numHundreds)
  //   remainder = originalNumber % 100
  //   console.log(`🚀 ~ solution ~ remainder`, remainder)

  //   for (let i = 0; i < numHundreds; i++) {
  //     result += BASE_10_ROMAN_NUMERAL[100]
  //     console.log(`🚀 ~ solution ~ result`, result)
  //   }

  //   return result + solution(remainder)
  // } else if (mutableInput >= 50) {
  //   const numFifties = mutableInput / 50
  //   console.log(`🚀 ~ solution ~ leadingNum`, numFifties)
  //   remainder = originalNumber % 50
  //   console.log(`🚀 ~ solution ~ remainder`, remainder)

  //   for (let i = 0; i < numFifties; i++) {
  //     result += BASE_10_ROMAN_NUMERAL[50]
  //     console.log(`🚀 ~ solution ~ result`, result)
  //   }

  //   return result + solution(remainder)
  // } else if (mutableInput >= 10) {
  //   const numTens = mutableInput / 10
  //   console.log(`🚀 ~ solution ~ leadingNum`, numTens)
  //   remainder = originalNumber % 10
  //   console.log(`🚀 ~ solution ~ remainder`, remainder)

  //   for (let i = 0; i < numTens; i++) {
  //     result += BASE_10_ROMAN_NUMERAL[10]
  //     console.log(`🚀 ~ solution ~ result`, result)
  //   }

  //   return result + solution(remainder)
  // } else if (mutableInput >= 5) {
  //   const numFives = mutableInput / 5
  //   console.log(`🚀 ~ solution ~ leadingNum`, numFives)
  //   remainder = originalNumber % 5
  //   console.log(`🚀 ~ solution ~ remainder`, remainder)

  //   for (let i = 0; i < numFives; i++) {
  //     result += BASE_10_ROMAN_NUMERAL[5]
  //     console.log(`🚀 ~ solution ~ result`, result)
  //   }

  //   return result + solution(remainder)
  // } else if (mutableInput >= 1) {
  //   const numOnes = mutableInput / 1
  //   console.log(`🚀 ~ solution ~ leadingNum`, numOnes)
  //   remainder = originalNumber % 1
  //   console.log(`🚀 ~ solution ~ remainder`, remainder)

  //   for (let i = 0; i < numOnes; i++) {
  //     result += BASE_10_ROMAN_NUMERAL[1]
  //     console.log(`🚀 ~ solution ~ result`, result)
  //   }

  //   return result + solution(remainder)
  // }

  return result
}

function getRemainder(wholeNumber: number, leadingNumber: number): number {
  return wholeNumber % leadingNumber
}

function getLeadingNumber(wholeNumber: number): number {
  const leadingNumber = getDivisor(wholeNumber)
  console.log(`🚀 ~ getLeadingNumber ~ leadingNumber`, leadingNumber)
  return leadingNumber
}

function getDivisor(wholeNumber: number): number {
  let divisor = 0
  if (wholeNumber >= 1000) {
    divisor = 1_000
    console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
  } else if (wholeNumber >= 500) {
    divisor = 500
    console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
  } else if (wholeNumber >= 100) {
    divisor = 100
    console.log(`🚀 ~ getDivisor ~ 100`, 100)
  } else if (wholeNumber >= 50) {
    divisor = 50
    console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
  } else if (wholeNumber >= 10) {
    divisor = 10
    console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
  } else if (wholeNumber >= 5) {
    divisor = 5
    console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
  } else if (wholeNumber >= 1) {
    divisor = 1
    console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
  }

  return divisor
}

function checkForLessThanPlace(number: number, place: number): string {
  if (number === 4 || number === 9) {
    return BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10]
  } else if (number >= 5) {
    return BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
  }
  return BASE_10_ROMAN_NUMERAL[place].repeat(number)
}
