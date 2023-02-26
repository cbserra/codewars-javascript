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

const ROMAN_NUMERALS: string[] = [];

/**
 *
 * @param number
 * @returns
 */
export function solution(number: number): string | undefined {
  console.log(`\n\n🚀 START LOOP ~ number:`, number);
  let mutableInput = number;
  // let result = "";
  // let remainder = 0;
  // const dividedNumbers = number.split("");

  // do {
  const leadingNumber = getLeadingNumber(mutableInput);
  console.log(`🚀 ~ solution ~ leadingNumber`, leadingNumber);

  const numericPlace = getNumericPlace(mutableInput);
  console.log(`🚀 ~ solution ~ numericPlace`, numericPlace);

  const remainder = getRemainder(mutableInput, numericPlace);
  console.log(`🚀 ~ solution ~ remainder`, remainder);

  const baseNumber = getBaseNumber(mutableInput, remainder);
  console.log(`🚀 ~ solution ~ baseNumber`, baseNumber);

  // ROMAN_NUMERALS += getRomanNumeral(baseNumber, numericPlace);
  // console.log(`🚀 ~ ROMAN_NUMERALS:`, ROMAN_NUMERALS);

  mutableInput = remainder;
  console.log(`🚀 ~ mutableInput:`, mutableInput);
  // } while (mutableInput > 0);
  if (mutableInput > 0) {
    console.log(`🚀 ~ mutableInput > 0`);
    ROMAN_NUMERALS.push(getRomanNumeral(baseNumber, numericPlace));
  }

  // console.log(`🚀 ~ mutableInput <= 0`);
  // return result;

  console.log(`\n\n🚀 END LOOP ~ ROMAN_NUMERALS:`, ROMAN_NUMERALS);

  return ROMAN_NUMERALS.join("");
}

/**
 *
 * @param leadingNumber
 * @param remainder
 * @returns
 */
function getBaseNumber(leadingNumber: number, remainder: number): number {
  return leadingNumber - remainder;
}

/**
 *
 * @param wholeNumber
 * @param leadingNumber
 * @returns
 */
function getRemainder(wholeNumber: number, leadingNumber: number): number {
  return wholeNumber % leadingNumber;
}

function getLeadingNumber(numerator: number): number {
  const denominator = getDivisor(numerator);
  return Math.floor(numerator / denominator);
}

/**
 *
 * @param number
 * @returns
 */
function getNumericPlace(number: number): number {
  const numericPlace = getBaseTenToNumber(number);
  return numericPlace;
}

/**
 *
 * @param number
 * @returns
 */
function getBaseTenToNumber(number: number): number {
  return Math.pow(10, number.toString().length - 1);
}

/**
 *
 * @param number
 * @returns
 */
function getDivisor(number: number): number {
  return getBaseTenToNumber(number);
}

/**
 *
 * @param originalNumber
 * @param numericPlace
 * @returns
 */
function getRomanNumeral(originalNumber: number, numericPlace: number): string {
  console.log(`🚀 ~ getRomanNumeral ~ numericPlace`, numericPlace);
  console.log(`🚀 ~ getRomanNumeral ~ originalNumber`, originalNumber);

  const romanNumeral = checkForLessThanPlace(originalNumber, numericPlace);
  console.log(`🚀 ~ getRomanNumeral ~ result`, romanNumeral);

  return romanNumeral;
}

/**
 *
 * @param number
 * @param numericPlace
 * @returns
 */
function checkForLessThanPlace(number: number, numericPlace: number): string {
  console.log(`🚀 ~ checkForLessThanPlace ~ numericPlace`, numericPlace);
  console.log(`🚀 ~ checkForLessThanPlace ~ number`, number);
  if (
    ((number === 4 || number === 9) && numericPlace === 1) ||
    ((number === 40 || number === 90) && numericPlace === 10) ||
    ((number === 400 || number === 900) && numericPlace === 100)
  ) {
    console.log(
      `🚀 ~ checkForLessThanPlace ~ if 4's and 9's ~ (BASE_10_ROMAN_NUMERAL[${numericPlace}] + BASE_10_ROMAN_NUMERAL[${
        numericPlace + number
      }]) = `,
      BASE_10_ROMAN_NUMERAL[numericPlace] +
        BASE_10_ROMAN_NUMERAL[numericPlace + number]
    );
    return (
      BASE_10_ROMAN_NUMERAL[numericPlace] +
      BASE_10_ROMAN_NUMERAL[numericPlace + number]
    );
    // } else if (number >= 5) {
    //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)`, BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5))
    //   return BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
  } else if (number >= 5 && number < 9 && numericPlace === 1) {
    console.log(
      `🚀 ~ checkForLessThanPlace ~ else if 5 > 9 ~ BASE_10_ROMAN_NUMERAL[${
        numericPlace * 5
      }] + BASE_10_ROMAN_NUMERAL[${numericPlace}].repeat(${number} - 5)`,
      BASE_10_ROMAN_NUMERAL[numericPlace * 5] +
        multiplyRomanNumerals(BASE_10_ROMAN_NUMERAL[numericPlace], number - 5)
    );

    const placeTimesFiveNumeral = BASE_10_ROMAN_NUMERAL[numericPlace * 5];
    console.log(
      `🚀 ~ checkForLessThanPlace ~ placeTimesFiveNumeral:`,
      placeTimesFiveNumeral
    );
    const numberMinusFive = multiplyRomanNumerals(
      BASE_10_ROMAN_NUMERAL[numericPlace],
      number - 5
    );
    console.log(
      `🚀 ~ checkForLessThanPlace ~ numberMinusFive:`,
      numberMinusFive
    );

    return placeTimesFiveNumeral + numberMinusFive;
  }
  console.log(
    `🚀 ~ checkForLessThanPlace ~ else ~ BASE_10_ROMAN_NUMERAL[${numericPlace}]`,
    BASE_10_ROMAN_NUMERAL[numericPlace]
  );

  return BASE_10_ROMAN_NUMERAL[numericPlace];
}

function multiplyRomanNumerals(romanNumeral: string, multiplier: number) {
  return romanNumeral.repeat(multiplier);
}
