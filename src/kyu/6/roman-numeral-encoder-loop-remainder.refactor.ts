// type NumberToString = {
//   [key: number]: string;
// };

// const enum NumericPlaces {
//   Thousands = 1000,
//   Hundreds = 100,
//   Tens = 10,
//   Units = 1
// }

// type NumericPlacesToString = {
//   [key in NumericPlaces]: NumberToString; // { [key: number]: string }
// };

// type NumericPlacesToRomanNumerals = {
//   [key in NumericPlaces]: string;
// };

// const BASE_10_ROMAN_NUMERAL: NumberToString = {
//   1: "I",
//   5: "V",
//   10: "X",
//   50: "L",
//   100: "C",
//   500: "D",
//   1000: "M"
// };

// const INDIVIDUAL_DECIMAL_PLACES: Map<key in NumericPlaces, NumericPlacesToString> = {
//   Thousands: { 1: "M", 2: "MM", 3: "MMM" },

//   Hundreds: {
//     1: "C",
//     2: "CC",
//     3: "CCC",
//     4: "CD",
//     5: "D",
//     6: "DC",
//     7: "DCC",
//     8: "DCCC",
//     9: "CM"
//   },

//   Tens: {
//     1: "X",
//     2: "XX",
//     3: "XXX",
//     4: "XL",
//     5: "L",
//     6: "LX",
//     7: "LXX",
//     8: "LXXX",
//     9: "XC"
//   },

//   Units: {
//     1: "I",
//     2: "II",
//     3: "III",
//     4: "IV",
//     5: "V",
//     6: "VI",
//     7: "VII",
//     8: "VIII",
//     9: "IX"
//   }
// };

// export function solution(number: number): string | undefined {
//   console.log(`\n\n🚀 *** number: ${number} ***`);
//   let mutableInput = number;
//   let result = "";
//   let remainder = 0;
//   // const dividedNumbers = number.split("");

//   do {
//     const leadingNumber = getLeadingNumber(mutableInput);
//     console.log(`🚀 ~ solution ~ leadingNumber`, leadingNumber);

//     // const multiplier = getMultiplier(mutableInput);
//     // console.log(`🚀 ~ solution ~ multiplier`, multiplier);
//     const multiplier = leadingNumber;
//     console.log(`🚀 ~ solution ~ multiplier`, multiplier);

//     remainder = getRemainder(mutableInput, multiplier);
//     console.log(`🚀 ~ solution ~ remainder`, remainder);

//     const baseNumber = getBaseNumber(mutableInput, remainder);
//     console.log(`🚀 ~ solution ~ baseNumber`, baseNumber);

//     // if (remainder > 0) {

//     // result += getRomanNumeral(mutableInput, numericPlace);
//     result += getRomanNumeral(baseNumber, leadingNumber, multiplier);
//     console.log(`🚀 ~ result:`, result);
//     mutableInput = remainder;
//     console.log(`🚀 ~ mutableInput:`, mutableInput);
//   } while (remainder > 0);

//   return result;
// }

// function getBaseNumber(leadingNumber: number, remainder: number): number {
//   // console.log(`🚀 ~ getBaseNumber ~ leadingNumber - remainder;:`, leadingNumber - remainder)
//   return leadingNumber - remainder;
// }

// function getRemainder(wholeNumber: number, leadingNumber: number): number {
//   // console.log(`🚀 ~ getRemainder ~ wholeNumber % leadingNumber:`, wholeNumber % leadingNumber, )
//   // console.log(`🚀 ~ getRemainder ~ wholeNumber, leadingNumber, wholeNumber % leadingNumber:`, wholeNumber, leadingNumber, wholeNumber % leadingNumber)
//   return wholeNumber % leadingNumber;
// }

// function getLeadingNumber(numerator: number): number {
//   // console.log(`🚀 ~ getLeadingNumber ~ numerator:`, numerator)
//   const denominator = getDivisor(numerator);
//   // console.log(`🚀 ~ getLeadingNumber ~ denominator:`, denominator)

//   // console.log(`🚀 ~ getLeadingNumber ~ numerator / denominator:`, numerator / denominator)

//   return Math.floor(numerator / denominator);
// }

// function getMultiplier(number: number): number {
//   const multiplier = getBaseTenToNumber(number);
//   return multiplier;
// }

// function getBaseTenToNumber(number: number): number {
//   // console.log(`🚀 ~ getBaseTenToNumber ~ Math.pow(10, number.toString().length - 1):`, Math.pow(10, number.toString().length - 1))
//   return Math.pow(10, number.toString().length - 1);
// }

// function getDivisor(number: number): number {
//   // console.log(`🚀 ~ number:`, number)
//   return getBaseTenToNumber(number);
// }

// // function getDivisor(wholeNumber: number): number {
// //   console.log(`🚀 ~ getDivisor ~ wholeNumber`, wholeNumber);
// //   let divisor = 0;
// //   if (wholeNumber >= 1000) {
// //     divisor = 1_000;
// //     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
// //   } else if (wholeNumber >= 500) {
// //     divisor = 500;
// //     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
// //   } else if (wholeNumber >= 100) {
// //     divisor = 100;
// //     // console.log(`🚀 ~ getDivisor ~ 100`, 100)
// //   } else if (wholeNumber >= 50) {
// //     divisor = 50;
// //     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
// //   } else if (wholeNumber >= 10) {
// //     divisor = 10;
// //     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
// //   } else if (wholeNumber >= 5) {
// //     divisor = 5;
// //     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
// //   } else if (wholeNumber >= 1) {
// //     divisor = 1;
// //     // console.log(`🚀 ~ getDivisor ~ divisor`, divisor)
// //   }

// //   console.log(`🚀 ~ getDivisor ~ divisor`, divisor);
// //   return divisor;
// // }

// function getRomanNumeral(
//   originalNumber: number,
//   leadingNumber: number,
//   multiplier: number
// ): string {
//   console.log(`🚀 ~ getRomanNumeral ~ originalNumber`, originalNumber);
//   console.log(`🚀 ~ getRomanNumeral ~ leadingNumber`, leadingNumber);
//   console.log(`🚀 ~ multiplier:`, multiplier);

//   let result = "";

//   // for (let i = 0; i < leadingNumber; i++) {
//   // result += BASE_10_ROMAN_NUMERAL[originalNumber]
//   result = checkForSubtractiveNotation(
//     originalNumber,
//     leadingNumber,
//     multiplier
//   );
//   console.log(`🚀 ~ getRomanNumeral ~ result`, result);
//   // }
//   // result += BASE_10_ROMAN_NUMERAL[originalNumber / 1000]

//   // console.log(`🚀 ~ getRomanNumeral ~ leadingNumber`, leadingNumber)
//   // return BASE_10_ROMAN_NUMERAL[leadingNumber]
//   return result;
// }

// function checkForSubtractiveNotation(
//   originalNumber: number,
//   leadingNumber: number,
//   multiplier: number
// ): string {
//   // console.log(`🚀 ~ checkForLessThanPlace ~ place`, place)
//   // console.log(`🚀 ~ checkForLessThanPlace ~ number`, number)
//   // if (number === 4 || number === 9) {
//   //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10]`, BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10])
//   //   return BASE_10_ROMAN_NUMERAL[place] + BASE_10_ROMAN_NUMERAL[place * 10]
//   // } else if (number >= 5) {
//   //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)`, BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5))
//   //   return BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
//   // }

//   // console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place].repeat(number)`, BASE_10_ROMAN_NUMERAL[place].repeat(number))
//   // return BASE_10_ROMAN_NUMERAL[place].repeat(number)

//   console.log(`🚀 ~ checkForLessThanPlace ~ leadingNumber`, leadingNumber);
//   console.log(`🚀 ~ checkForLessThanPlace ~ originalNumber`, originalNumber);
//   console.log(`🚀 ~ checkForSubtractiveNotation ~ multiplier:`, multiplier);

//   if (
//     ((originalNumber === 4 || originalNumber === 9) && leadingNumber === 1) ||
//     ((originalNumber === 40 || originalNumber === 90) &&
//       leadingNumber === 10) ||
//     ((originalNumber === 400 || originalNumber === 900) &&
//       leadingNumber === 100)
//   ) {
//     console.log(
//       `🚀 ~ checkForLessThanPlace ~ if ~ BASE_10_ROMAN_NUMERAL[${leadingNumber}] + BASE_10_ROMAN_NUMERAL[${
//         leadingNumber + originalNumber
//       }]`,
//       BASE_10_ROMAN_NUMERAL[leadingNumber] +
//         BASE_10_ROMAN_NUMERAL[leadingNumber + originalNumber]
//     );
//     return (
//       BASE_10_ROMAN_NUMERAL[leadingNumber] +
//       BASE_10_ROMAN_NUMERAL[leadingNumber + originalNumber]
//     );
//     // } else if (number >= 5) {
//     //   console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)`, BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5))
//     //   return BASE_10_ROMAN_NUMERAL[place * 5] + BASE_10_ROMAN_NUMERAL[place].repeat(number - 5)
//   } else if (originalNumber >= 5 && originalNumber < 9 && leadingNumber === 1) {
//     console.log(
//       `🚀 ~ checkForLessThanPlace ~ else if ~ BASE_10_ROMAN_NUMERAL[${
//         leadingNumber * 5
//       }] + BASE_10_ROMAN_NUMERAL[${leadingNumber}].repeat(${originalNumber} - 5)`,
//       BASE_10_ROMAN_NUMERAL[leadingNumber * 5] +
//         BASE_10_ROMAN_NUMERAL[leadingNumber].repeat(originalNumber - 5)
//     );

//     return (
//       BASE_10_ROMAN_NUMERAL[leadingNumber * 5] +
//       BASE_10_ROMAN_NUMERAL[leadingNumber].repeat(originalNumber - 5)
//     );
//     // } else if (place > 1) {
//     //   console.log(
//     //     `🚀 ~ checkForLessThanPlace ~ else if ~ BASE_10_ROMAN_NUMERAL[${place}].repeat(${number})`,
//     //     BASE_10_ROMAN_NUMERAL[place].repeat(number)
//     //   );

//     //   return BASE_10_ROMAN_NUMERAL[place].repeat(number);
//   } else if (multiplier > 1) {
//     console.log(
//       `🚀 ~ checkForLessThanPlace ~ else if ~ BASE_10_ROMAN_NUMERAL[${leadingNumber}].repeat(${multiplier})`,
//       BASE_10_ROMAN_NUMERAL[leadingNumber].repeat(multiplier)
//     );

//     return BASE_10_ROMAN_NUMERAL[leadingNumber].repeat(multiplier);
//   }

//   // console.log(`🚀 ~ checkForLessThanPlace ~ BASE_10_ROMAN_NUMERAL[place].repeat(number)`, BASE_10_ROMAN_NUMERAL[place].repeat(number))
//   // return BASE_10_ROMAN_NUMERAL[number].repeat(number)
//   console.log(
//     `🚀 ~ checkForLessThanPlace ~ else ~ BASE_10_ROMAN_NUMERAL[${leadingNumber}]`,
//     BASE_10_ROMAN_NUMERAL[leadingNumber]
//   );

//   return BASE_10_ROMAN_NUMERAL[leadingNumber];
// }

export {}
