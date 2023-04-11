export function countBits(n: number): number {
  const binaryResult = n.toString(2)
  console.log(`\n\n🚀 ~ countBits ~ binaryResult:`, binaryResult)
  console.log(`🚀 ~ countBits ~ binaryResult.length:`, binaryResult.length)
  const onesLength = binaryResult.replace(/0/g, '').length
  console.log(`🚀 ~ countBits ~ onesLength:`, onesLength)
  return onesLength
}

// export function countBits(n: number): number {
//   const binaryResult = decimalToBinary(n)
//   console.log(`\n\n🚀 ~ countBits ~ binaryResult.join(''): `, binaryResult.join(''))
//   console.log(`🚀 ~ countBits ~ binaryResult.length: `, binaryResult.length)
//   const onesLength = binaryResult.filter((b) => b === 1).length
//   console.log(`🚀 ~ countBits ~ onesLength:`, onesLength)

//   return onesLength
// }

function decimalToBinary(dec: number, bin?: number[]): number[] {
  const binary = bin?.length ? [...bin] : []

  if (dec === 0) {
    return binary
  }

  const mutableDecimal = dec

  return decimalToBinary(Math.floor(mutableDecimal / 2), [
    Math.floor(mutableDecimal % 2),
    ...binary,
  ])
}
