type Weight = {
  [key: number]: string
}

export function orderWeight(strng: string): string {
  const arr = strng.split(' ')

  const weighted: Weight[] = []
  const sortedWeights: number[] = []
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i].split('')
    console.log(`🚀 ~ orderWeight ~ n:`, n)

    const weight = n.map((s) => parseInt(s)).reduce((a, b) => a + b, 0)
    // console.log(`🚀 ~ orderWeight ~ weight:`, weight)

    weighted.push({ [weight]: n.join('') })
    // console.log(`🚀 ~ orderWeight ~ weighted:`, weighted)
  }

  console.log('\n\n')
  const sortedKeys = Object.values(weighted)
    .flatMap((o) => Object.keys(o))
    .sort((a, b) => parseInt(a) - parseInt(b))
  console.log(`🚀 ~ orderWeight ~ sortedKeys:`, sortedKeys)

  // sortedKeys.map((k) => {
  //   console.log(
  //     `🚀 ~ orderWeight ~ sortedWeights.push(parseInt(k)):`,
  //     sortedWeights.push(parseInt(k))
  //   )
  // })

  // const sortedValuesKeys = sortedKeys.flatMap((o) =>
  //   Object.keys(o).sort((a, b) => parseInt(a) - parseInt(b))
  // )
  // console.log(`🚀 ~ orderWeight ~ sortedValuesKeys:`, sortedValuesKeys)
  // console.log(`sortedValuesKeys = ${sortedValuesKeys}`)
  // console.log(Object.values(weighted).flatMap((o) => Object.values(o)))

  // const sortedValuesValues = Object.values(weighted).flatMap((o) => Object.values(o))
  // console.log(`🚀 ~ orderWeight ~ sortedValuesValues:`, sortedValuesValues)
  // console.log(`sortedValuesValues = ${sortedValuesValues}`)

  // console.log(sortedWeights)

  // const returnedVar = Object.values(weighted)
  //   .map((o) => Object.values(o))
  //   .join(' ')
  // console.log(`🚀 ~ orderWeight ~ returnedVar:`, returnedVar)

  const returnedVar = Object.values(weighted)
    .map((o) => Object.values(o))
    .join(' ')
  console.log(`🚀 ~ orderWeight ~ returnedVar:`, returnedVar)

  return returnedVar
  // .sort((a, b) => Object.values(a) - b)
  // .join(' ')
}
