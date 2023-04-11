// const TOP_OPERAND = 0
// const BTM_OPERAND = 1

// type SumColumn = {
//   top: string
//   btm: string
//   sum: string
// }

// export function add(a: string, b: string) {
//   console.log(`🚀 ~ add ~ a:`, a)
//   console.log(`🚀 ~ add ~ b:`, b)

//   if (a.length === 1 && b.length === 1) {
//     return (Number(a) + Number(b)).toString()
//   }

//   const totalSum = ''

//   const topOperand = a.length > b.length ? a : b
//   console.log(`🚀 ~ add ~ topOperand:`, topOperand)
//   const btmOperand = '0'.repeat(Math.abs(a.length - b.length)) + (a.length > b.length ? b : a)
//   console.log(`🚀 ~ add ~ btmOperand:`, btmOperand)

//   if (topOperand.length < btmOperand.length) {
//     topOperand = '0'.repeat(btmOperand.length - topOperand.length) + topOperand
//   } else if (btmOperand.length < topOperand.length) {
//     btmOperand = '0'.repeat(topOperand.length - btmOperand.length) + btmOperand
//   }

//   const maxOperandLength = Math.max(topOperand.length, btmOperand.length)
//   console.log(`🚀 ~ add ~ maxOperandLength:`, maxOperandLength)
//   const minOperandLength = Math.min(a.length, b.length)
//   console.log(`🚀 ~ add ~ minOperandLength:`, minOperandLength)
//   const sumObjects: SumColumn[] = []
//   for (let i = maxOperandLength; i >= 0; i--) {
//     const topOp = a.charAt(i - 1)
//     console.log(`🚀 ~ add ~ topOp:`, topOp)
//     const btmOp = b.charAt(i - 1)
//     console.log(`🚀 ~ add ~ btmOp:`, btmOp)
//     const charSum = parseInt(topOp) + parseInt(btmOp)
//     console.log(`🚀 ~ add ~ charSum:`, charSum)
//     const sumObj = { top: topOp, btm: btmOp, sum: charSum.toString() }
//     console.log(`🚀 ~ add ~ sumObj:`, sumObj)

//     const carryOne = sumObj.sum.length > 1
//     sumObjects.unshift(sumObj)
//   }

//   console.log(`🚀 ~ add ~ sumObjects:`, sumObjects)

//   return sumObjects
//     .map((sumObj) => `sumObj.top = ${sumObj.top} + ${sumObj.btm} = ${sumObj.sum}`)
//     .join('')
// }
