const ALPHA_LOWER: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
const ALPHA_UPPER: string[] = ALPHA_LOWER.map((s: string) => s.toUpperCase())
const DIGITS: string[] = '0123456789'.split('')
const SPECIAL_CHARS: string[] = '.,:;-?! \'()$%&"'.split('')

const REGION_CHARS: string[] = ALPHA_UPPER.concat(ALPHA_LOWER).concat(DIGITS).concat(SPECIAL_CHARS)

export function encrypt(text: string): string {
  // STEP 0: Validate input
  if (isEmptyInput(text)) {
    console.error(`🚀 ~ encrypt ~ empty input found -- returning '${text}'`)
    return text
  }
  validateCharacters(text)

  // STEP 1: Inverse the casing of every other character
  const modifiedCasing: string = inverseEveryOtherCasing(text)
  console.log(`🚀 ~ encrypt ~ STEP 1: '${modifiedCasing}'`)

  // STEP 2: Replace each character with the character 77 places after it in the region
  const encryptedText: string[] = encryptInverseCasedText(modifiedCasing)
  console.log(`🚀 ~ encrypt ~ STEP 2: '${encryptedText.join('')}'`)

  // STEP 3: Replace first character with original first character's region index subtracted from end of Region Characters
  const encryptedTextWithReplacedFirstChar = replaceFirstChar(encryptedText, modifiedCasing)
  console.log(`🚀 ~ encrypt ~ STEP 3: '${encryptedTextWithReplacedFirstChar}'`)

  return encryptedTextWithReplacedFirstChar
}

function isEmptyInput(input: string): boolean {
  return input === undefined || input === null || input.length === 0
}
function filterInvalidCharacters(text: string): string[] {
  return text.split('').filter((s: string) => !REGION_CHARS.includes(s))
}
function containsInvalidCharacters(chars: string[]): boolean {
  return chars.length > 0
}
function inverseEveryOtherCasing(text: string): string {
  return text
    .split('')
    .map((s: string, i: number) => {
      return i > 0 && i % 2 !== 0 ? (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()) : s
    })
    .join('')
}
function getConsecutiveCharDifference(modifiedCasing: string, firstIndex: number) {
  const char1 = modifiedCasing.charAt(firstIndex)
  const unmodChar1Index = REGION_CHARS.indexOf(char1)
  const char2 = modifiedCasing.charAt(firstIndex + 1)
  const unmodChar2Index = REGION_CHARS.indexOf(char2)
  const difference = unmodChar1Index - unmodChar2Index

  return difference
}
function encryptInverseCasedText(modifiedCasing: string): string[] {
  const encryptedText: string[] = []
  for (let i = 0; i < modifiedCasing.length - 1; i++) {
    const difference = getConsecutiveCharDifference(modifiedCasing, i)

    const replacementRegionCharIndex = difference >= 0 ? difference : difference + 77
    const replacementRegionChar = REGION_CHARS[replacementRegionCharIndex]

    encryptedText.push(replacementRegionChar)
  }

  return encryptedText
}
function replaceFirstChar(encryptedText: string[], modifiedCasing: string) {
  const firstCharIndexInRegion = REGION_CHARS.indexOf(modifiedCasing[0])
  const firstCharRegionReplacement = REGION_CHARS[REGION_CHARS.length - 1 - firstCharIndexInRegion]
  encryptedText.unshift(firstCharRegionReplacement)

  return encryptedText.join('')
}
function validateCharacters(text: string): void {
  const invalidChars = filterInvalidCharacters(text)
  if (containsInvalidCharacters(invalidChars)) {
    console.error(`🚀 ~ validateCharacters ~ invalidChars found -- throw new Error()`)
    throw new Error(`Invalid characters found: ${invalidChars.join(', ')}`)
  }
}

export function decrypt(encryptedText: string): string {
  // STEP 0: Validate input
  if (isEmptyInput(encryptedText)) {
    console.error(`🚀 ~ decrypt ~ empty input found -- returning '${encryptedText}'`)
    return encryptedText
  }
  validateCharacters(encryptedText)

  const remainingEncryptedText = encryptedText.split('')

  // STEP 1: Replace first character with original first character's region index subtracted from end of Region Characters
  const decryptedFirstChar: string = decryptFirstChar(remainingEncryptedText[0])
  console.log(`🚀 ~ decrypt ~ STEP 1: '${decryptedFirstChar}'`)

  // STEP 2: Replace each character with the character 77 places after it, if the difference is negative, or or use the difference if the difference is positive
  // This will return the "every other character" modified casing text
  const decryptedModifiedCasingText = decryptToModifiedCasing(
    remainingEncryptedText.slice(1),
    decryptedFirstChar
  )
  console.log(`🚀 ~ decrypt ~ STEP 2: '${decryptedModifiedCasingText}'`)

  // STEP 3: Inverse the casing of every other character
  const decryptedText = inverseEveryOtherCasing(decryptedModifiedCasingText.join(''))
  console.log(`🚀 ~ decrypt ~ STEP 3: '${decryptedText}'`)

  return decryptedText
}

function decryptToModifiedCasing(
  remainingEncryptedText: string[],
  decryptedFirstChar: string
): string[] {
  const decryptedModifiedCasingText: string[] = [decryptedFirstChar]
  for (let i = 0; i < remainingEncryptedText.length; i++) {
    const replacementRegionChar = remainingEncryptedText[i]
    const replacementRegionCharIndex = REGION_CHARS.indexOf(replacementRegionChar)
    const previouslyDecryptedCharIndex = REGION_CHARS.indexOf(decryptedModifiedCasingText[i])

    const diff = previouslyDecryptedCharIndex - replacementRegionCharIndex
    const updatedDiff = diff >= 0 ? diff : diff + 77

    const originalDecryptedModifiedCasingChar = REGION_CHARS[updatedDiff]
    decryptedModifiedCasingText.push(originalDecryptedModifiedCasingChar)
  }

  return decryptedModifiedCasingText
}
function decryptFirstChar(encryptedFirstChar: string): string {
  const regionIndex = REGION_CHARS.indexOf(encryptedFirstChar)
  const originalFirstChar = REGION_CHARS[REGION_CHARS.length - 1 - regionIndex]

  return originalFirstChar
}
