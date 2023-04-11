export function add(a: string, b: string): string {
  console.log('\n')
  console.log(`🚀 ~ add ~ a:`, a)
  console.log(`🚀 ~ add ~ b:`, b)
  console.log('')

  const reversedA = reverseString(a)
  const reversedB = reverseString(b)

  const topOperand = reversedA.length > reversedB.length ? reversedA : reversedB
  const btmOperand = reversedA.length > reversedB.length ? reversedB : reversedA

  let carryOne = false
  let reversedSum = ''
  for (let i = 0; i < topOperand.length; i++) {
    const topOp = topOperand[i]
    const btmOp = i <= btmOperand.length - 1 ? btmOperand[i] : '0'
    const sum: number = parseInt(topOp) + parseInt(btmOp) + (carryOne ? 1 : 0)
    console.log(`🚀 ~ add ~ ${topOp} + ${btmOp} = ${sum}`)

    const remainder = sum % 10
    console.log(`🚀 ~ add ~ remainder:`, remainder)

    const carryValue = Math.floor(sum / 10)
    console.log(`🚀 ~ add ~ carryValue:`, carryValue)

    carryOne = sum > 9 && i < topOperand.length - 1
    const sumStr = sum.toString()
    reversedSum += calculateCurrentSum(i, topOperand, sumStr)
    console.log(`🧨  ~ add ~ reversedSum:`, reversedSum)
  }
  const finalSum = reverseString(reversedSum)
  console.log(`🚀 ~ add ~ finalSum:`, finalSum)
  return finalSum
}

function reverseString(str: string): string {
  return str.split('').reverse().join('')
}

function calculateCurrentSum(currentIndex: number, topOperand: string, sumStr: string): string {
  return currentIndex < topOperand.length - 1
    ? sumStr[sumStr.length - 1]
    : sumStr.length > 1
    ? reverseString(sumStr)
    : sumStr
}

// function z(n: number): number {
//   return n === undefined ? 0 : n
// }

// export function add(a: string, b: string): string {
//   const as = Array.from(a)
//     .map((l) => Number(l))
//     .reverse()
//   console.log(`🚀 ~ add ~ as:`, as)

//   const bs = Array.from(b)
//     .map((l) => Number(l))
//     .reverse()
//   console.log(`🚀 ~ add ~ bs:`, bs)

//   const cs = Array(Math.max(as.length, bs.length))
//     .fill(0)
//     .map((n, i) => z(as[i]) + z(bs[i]))
//     .reverse()
//   console.log(`🚀 ~ add ~ cs:`, cs)

//   cs[-1] = 0
//   const digits = cs.reduceRight((acc, c, idx, arr) => {
//     arr[idx - 1] += Number(c > 9)
//     return (c % 10) + acc
//   }, '')
//   console.log(`🚀 ~ digits ~ digits:`, digits)

//   const firstDigit = cs[-1] ? '1' : ''
//   console.log(`🚀 ~ add ~ firstDigit:`, firstDigit)

//   return firstDigit + digits
// }
