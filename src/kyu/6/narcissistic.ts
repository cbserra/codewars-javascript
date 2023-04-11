export function narcissistic(value: number): boolean {
  const numToStringArr = value.toString().split('')

  return (
    value ==
    numToStringArr.map(Number).reduce((prevVal, currVal) => {
      return prevVal + Math.pow(currVal, numToStringArr.length)
    }, 0)
  )
}
