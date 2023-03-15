const ALPHA_LOWER: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const ALPHA_UPPER: string[] = ALPHA_LOWER.map((s: string) => s.toUpperCase());
const DIGITS: string[] = "0123456789".split("");
const SPECIAL_CHARS: string[] = ".,:;-?! '()$%&\"".split("");

const REGION_CHARS: string[] = ALPHA_UPPER.concat(ALPHA_LOWER)
  .concat(DIGITS)
  .concat(SPECIAL_CHARS);

// function validate(invalidChars: string[]): {error?: string} {
//   if (invalidChars.length > 0) return {error:'Invalid characters: ' + invalidChars.join(', ')};
//   return {};
// }

function isEmptyInput(input: string): boolean {
  return input === undefined || input === null || input.length === 0;
}
function filterInvalidCharacters(text: string): string[] {
  return text.split("").filter((s: string) => !REGION_CHARS.includes(s));
}
function containsInvalidCharacters(chars: string[]): boolean {
  return chars.length > 0;
}
function inverseEveryOtherCasing(text: string): string {
  return text
    .split("")
    .map((s: string, i: number) => {
      return i > 0 && i % 2 !== 0
        ? s === s.toUpperCase()
          ? s.toLowerCase()
          : s.toUpperCase()
        : s;
    })
    .join("");
}

function getConsecutiveCharDifference(
  modifiedCasing: string,
  firstIndex: number
) {
  const char1 = modifiedCasing.charAt(firstIndex);
  const unmodChar1Index = REGION_CHARS.indexOf(char1);
  const char2 = modifiedCasing.charAt(firstIndex + 1);
  const unmodChar2Index = REGION_CHARS.indexOf(char2);
  const difference = unmodChar1Index - unmodChar2Index;

  return difference;
}

export function encrypt(text: string): string | Error {
  // console.log(`🚀 ~ encrypt ~ text:`, text)
  if (isEmptyInput(text)) {
    return text;
  }

  const invalidChars = filterInvalidCharacters(text);
  console.log(`🚀 ~ encrypt ~ invalidChars:`, invalidChars);
  // validate(invalidChars);
  if (containsInvalidCharacters(invalidChars)) {
    // console.log(`🚀 ~ encrypt ~ invalidChars.length: should throw an error`, invalidChars.length)

    return new Error(
      "text contains invalid characters: " + invalidChars.join(", ")
    );
  }

  // STEP 1: Inverse the casing of every other character
  const modifiedCasing: string = inverseEveryOtherCasing(text);
  console.log(`🚀 ~ modifiedCasing ~ STEP 1: '${modifiedCasing}'`);
  // console.log(`🚀 ~ modifiedCasing:`, modifiedCasing)

  // STEP 2: Replace each character with the character 77 places after it in the region
  const encryptedText: string[] = [];
  for (let i = 0; i < modifiedCasing.length - 1; i++) {
    const difference = getConsecutiveCharDifference(modifiedCasing, i);

    // const replacementRegionIndex = difference + 77;
    // const replacementRegionChar = REGION_CHARS[replacementRegionIndex];
    const replacementRegionChar =
      REGION_CHARS[difference > 0 ? difference : difference + 77];
    encryptedText.push(replacementRegionChar);
  }
  console.log(
    `🚀 ~ encrypt ~ encryptedText ~ STEP 2:'${encryptedText
      .map((s: string) => s)
      .join("")}'`
  );

  // STEP 3: Replace first character with original first character's region index subtracted from end of Region Characters
  const firstCharIndexInRegion = REGION_CHARS.indexOf(modifiedCasing[0]);
  const firstCharRegionReplacement =
    REGION_CHARS[REGION_CHARS.length - 1 - firstCharIndexInRegion];
  encryptedText.unshift(firstCharRegionReplacement);
  console.log(
    `🚀 ~ encrypt ~ encryptedText ~ STEP 3:'${encryptedText
      .map((s: string) => s)
      .join("")}'`
  );

  return encryptedText.join("");
}

export function decrypt(encryptedText: string): string {
  const remainingEncryptedText = encryptedText.split("");
  const decryptedText: string[] = [];

  const firstChar = remainingEncryptedText.shift() || "";
  const regionIndex = REGION_CHARS.indexOf(firstChar);
  const originalFirstChar = REGION_CHARS[REGION_CHARS.length - 1 - regionIndex];

  decryptedText.push(originalFirstChar);

  console.log(
    `firstChar = '${firstChar}', regionIndex = '${regionIndex}', originalFirstChar = '${originalFirstChar}', remainingEncryptedText = '${remainingEncryptedText}'`
  );

  console.log(remainingEncryptedText.join(""));

  return decryptedText.join("");
}
