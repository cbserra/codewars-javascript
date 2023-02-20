type NumberToString = {
  [key: number]: string;
};

const BASE_10_ROMAN_NUMERAL: NumberToString = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

export function solution(number: number): string | undefined {
  console.log(`\n\n🚀 SOLUTION BEGIN ~ number:`, number);
  let mutableInput = number;
  let result = "";
  let remainder = 0;
  // const dividedNumbers = number.split("");

  do {
    let leadingNumber = getLeadingNumber(mutableInput);
    console.log(`🚀 ~ solution ~ leadingNumber`, leadingNumber);

    const numericPlace = getNumericPlace(mutableInput);
    console.log(`🚀 ~ solution ~ numericPlace`, numericPlace);

    remainder = getRemainder(mutableInput, numericPlace);
    console.log(`🚀 ~ solution ~ remainder`, remainder);

    const baseNumber = getBaseNumber(mutableInput, remainder);
    console.log(`🚀 ~ solution ~ baseNumber`, baseNumber);

    // if (remainder > 0) {

    // result += getRomanNumeral(mutableInput, numericPlace);
    result += getRomanNumeral(baseNumber, numericPlace);
    console.log(`🚀 ~ result:`, result);
    mutableInput = remainder;
    console.log(`🚀 ~ mutableInput:`, mutableInput);
  } while (remainder > 0);

  return result;
}

function getBaseNumber(leadingNumber: number, remainder: number): number {
  // console.log(`🚀 ~ getBaseNumber ~ leadingNumber - remainder;:`, leadingNumber - remainder)
  return leadingNumber - remainder;
}

function getRemainder(wholeNumber: number, leadingNumber: number): number {
  // console.log(`🚀 ~ getRemainder ~ wholeNumber % leadingNumber:`, wholeNumber % leadingNumber, )
  // console.log(`🚀 ~ getRemainder ~ wholeNumber, leadingNumber, wholeNumber % leadingNumber:`, wholeNumber, leadingNumber, wholeNumber % leadingNumber)
  return wholeNumber % leadingNumber;
}

function getLeadingNumber(numerator: number): number {
  // console.log(`🚀 ~ getLeadingNumber ~ numerator:`, numerator)
  const denominator = getDivisor(numerator);
  // console.log(`🚀 ~ getLeadingNumber ~ denominator:`, denominator)

  // console.log(`🚀 ~ getLeadingNumber ~ numerator / denominator:`, numerator / denominator)

  return Math.floor(numerator / denominator);
}

function getNumericPlace(number: number): number {
  const numericPlace = getBaseTenToNumber(number);
  return numericPlace;
}

function getBaseTenToNumber(number: number): number {
  // console.log(`🚀 ~ getBaseTenToNumber ~ Math.pow(10, number.toString().length - 1):`, Math.pow(10, number.toString().length - 1))
  return Math.pow(10, number.toString().length - 1);
}

function getDivisor(number: number): number {
  // console.log(`🚀 ~ number:`, number)
  return getBaseTenToNumber(number);
}

// function getDivisor(wholeNumber: number): number {
//   console.log(`🚀 ~ getDivisor ~ wholeNumber`, wholeNumber);
//   let divisor = 0;
//   if (wholeNumber >= 1000) {
//     divisor = 1_000;
//     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
//   } else if (wholeNumber >= 500) {
//     divisor = 500;
//     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
//   } else if (wholeNumber >= 100) {
//     divisor = 100;
//     // console.log(`🚀 ~ getDivisor ~ 100`, 100)
//   } else if (wholeNumber >= 50) {
//     divisor = 50;
//     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
//   } else if (wholeNumber >= 10) {
//     divisor = 10;
//     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
//   } else if (wholeNumber >= 5) {
//     divisor = 5;
//     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
//   } else if (wholeNumber >= 1) {
//     divisor = 1;
//     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
//   }

//   console.log(`🚀 ~ getDivisor ~ divisor`, divisor);
//   return divisor;
// }

function getRomanNumeral(
  originalNumber: number,
  leadingNumber: number
): string {
  console.log(`🚀 ~ getRomanNumeral ~ leadingNumber`, leadingNumber);
  console.log(`🚀 ~ getRomanNumeral ~ originalNumber`, originalNumber);

  let result = "";

  // for (let i = 0; i < leadingNumber; i++) {
  // result += BASE_10_ROMAN_NUMERAL[originalNumber]
  result = checkForLessThanPlace(originalNumber, leadingNumber);
  console.log(`🚀 ~ getRomanNumeral ~ result`, result);
  // }
  // result += BASE_10_ROMAN_NUMERAL[originalNumber / 1000]

  // console.log(`🚀 ~ getRomanNumeral ~ leadingNumber`, leadingNumber)
  // return BASE_10_ROMAN_NUMERAL[leadingNumber]
  return result;
}

function checkForLessThanPlace(number: number, place: number): string {
  // console.log(`🚀 ~ checkForLessThanPlace ~ place`, place)
  // console.log(`🚀 ~ checkForLessThanPlace ~ number`, number)
  // if (number === 4 || number === 9) {
  //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10]`, BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10])
  //   return BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10]
  // } else if (number >= 5) {
  //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)`, BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5))
  //   return BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
  // }

  // console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place].repeat(number)`, BASE_10_ROMAN_NUMERAL[place].repeat(number))
  // return BASE_10_ROMAN_NUMERAL[place].repeat(number)

  console.log(`🚀 ~ checkForLessThanPlace ~ place`, place);
  console.log(`🚀 ~ checkForLessThanPlace ~ number`, number);
  if (
    ((number === 4 || number === 9) && place === 1) ||
    ((number === 40 || number === 90) && place === 10) ||
    ((number === 400 || number === 900) && place === 100)
  ) {
    console.log(
      `🚀 ~ checkForLessThanPlace ~ if ~ BASE_10_ROMAN_NUMERAL[${place}] + BASE_10_ROMAN_NUMERAL[${
        place + number
      }]`,
      BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place + number]
    );
    return BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place + number];
    // } else if (number >= 5) {
    //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)`, BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5))
    //   return BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
  } else if (number >= 5 && number < 9 && place === 1) {
    console.log(
      `🚀 ~ checkForLessThanPlace ~ else if ~ BASE_10_ROMAN_NUMERAL[${
        place * 5
      }] + BASE_10_ROMAN_NUMERAL[${place}].repeat(${number} - 5)`,
      BASE_10_ROMAN_NUMERAL[place * 5] +
        BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
    );

    return (
      BASE_10_ROMAN_NUMERAL[place * 5] +
      BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
    );
    // } else if (place > 1) {
    //   console.log(
    //     `🚀 ~ checkForLessThanPlace ~ else if ~ BASE_10_ROMAN_NUMERAL[${place}].repeat(${number})`,
    //     BASE_10_ROMAN_NUMERAL[place].repeat(number)
    //   );

    //   return BASE_10_ROMAN_NUMERAL[place].repeat(number);
  }

  // console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place].repeat(number)`, BASE_10_ROMAN_NUMERAL[place].repeat(number))
  // return BASE_10_ROMAN_NUMERAL[number].repeat(number)
  console.log(
    `🚀 ~ checkForLessThanPlace ~ else ~ BASE_10_ROMAN_NUMERAL[${place}]`,
    BASE_10_ROMAN_NUMERAL[place]
  );

  return BASE_10_ROMAN_NUMERAL[place];
}
