const KEY_PAD = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', ''],
]

function mapOrigToNeighborKeys(
  observedArr: string[],
  origToNeighbors: Map<string, string[]>
): string[] {
  console.log('\n\n')
  console.log(`🚀 ~ mapOrigToNeighborKeys: observedArr = ${observedArr}`)
  console.log(
    `🚀 ~ mapOrigToNeighborKeys: origToNeighbors = ${Array.from(
      origToNeighbors.entries(),
      ([key, value]) => `\n${key}: ${value}`
    )}`
  )

  if (!observedArr || observedArr.length < 1) {
    throw new Error('observedArr must be an array with at least one element')
  }

  // const neighbors = getNeighborPins(observedArr[0]);
  const pins: string[] = []
  if (observedArr.length === 1) {
    console.log('\n\n')
    const keyPin = observedArr[0]
    console.log(`🚀 ~ mapOrigToNeighborKeys: observedArr.length === 1 : keyPin:`, keyPin)
    const neighbors = getNeighborPins(keyPin)
    console.log(`🚀 ~ mapOrigToNeighborKeys: neighbors:`, neighbors)
    origToNeighbors.set(keyPin, neighbors)
    console.log(
      `🚀 ~ mapOrigToNeighborKeys: origToNeighbors = ${Array.from(
        origToNeighbors.entries(),
        ([key, value]) => `\n${key}: ${value}`
      )}`
    )
    pins.push(...neighbors)
  } else if (observedArr.length > 1) {
    console.log('\n\n')
    observedArr.forEach((keyPin) => {
      console.log(`🚀 ~ mapOrigToNeighborKeys: observedArr.length > 1 : keyPin:`, keyPin)
      const neighbors = getNeighborPins(keyPin)
      console.log(`🚀 ~ mapOrigToNeighborKeys: observedArr.forEach ~ neighbors:`, neighbors)
      origToNeighbors.set(keyPin, neighbors)
      console.log(`🚀 ~ mapOrigToNeighborKeys: origToNeighbors = ${[...origToNeighbors.entries()]}`)
      console.log(
        `🚀 ~ mapOrigToNeighborKeys: origToNeighbors = ${Array.from(
          origToNeighbors.entries(),
          ([key, value]) => `\n${key}: ${value}`
        )}`
      )
      pins.push(...neighbors)
    })
  }

  return pins
}

function getNeighborPins(keyPin: string): string[] {
  let numPins: string[] = []

  let rowIndex, colIndex
  KEY_PAD.forEach((row, i) => {
    console.log('\n\n')
    console.log(`🚀 ~ getNeighborPins: KEY_PAD.forEach ~ i:`, i)
    console.log(`🚀 ~ getNeighborPins: KEY_PAD.forEach ~ row:`, row)
    colIndex = row.indexOf(keyPin)
    console.log(`🚀 ~ getNeighborPins: KEY_PAD.forEach ~ colIndex:`, colIndex)
    if (colIndex > -1) {
      rowIndex = i
      console.log(`🚀 ~ getNeighborPins: KEY_PAD.forEach ~ rowIndex:`, rowIndex)
      numPins = checkAbove(rowIndex, colIndex, numPins)
      numPins = checkSides(rowIndex, colIndex, numPins)
      numPins = checkBelow(rowIndex, colIndex, numPins)
    }
  })

  console.log(`🚀 ~ getNeighborPins: numPins:`, numPins)

  return numPins
}

export function getPINs(observed: string): string[] {
  console.log('\n\n')
  console.log(`🚀 ~ getPINs ~ observed:`, observed)

  const origToNeighbors = new Map<string, string[]>()
  const observedSplitArr = observed.toString().split('')
  console.log(`🚀 ~ getPINs ~ observedSplitArr:`, observedSplitArr)
  const pins: string[] = mapOrigToNeighborKeys(observedSplitArr, origToNeighbors)
  // origToNeighbors.set(observed, observedNeighbors);
  console.log(`🚀 ~ getPINs: observedSplitArr = ${observedSplitArr}`)
  console.log(
    `🚀 ~ getPINs: origToNeighbors = ${Array.from(
      origToNeighbors.entries(),
      ([key, value]) => `\n${key}: ${value}`
    )}`
  )

  // const isMultiDigit = observedSplitArr.length > 1;
  // console.log(`🚀 ~ getPINs ~ isMultiDigit:`, isMultiDigit)
  // const foundObserved = false;

  // console.log(KEY_PAD.map((row, index) => `${index}. ${row.indexOf(observedSplitArr[0])}`));

  return pins
}
function checkAbove(rowIndex: number, colIndex: number, pins: string[]): string[] {
  console.log('\n\n')
  const aboveIndex = rowIndex - 1
  console.log(`🚀 ~ checkAbove ~ aboveIndex:`, aboveIndex)
  if (aboveIndex >= 0) {
    const aboveVal = KEY_PAD[aboveIndex][colIndex]
    console.log(`🚀 ~ checkAbove ~ aboveVal:`, aboveVal)
    if (!pins.includes(aboveVal) && aboveVal !== '') {
      pins.push(aboveVal)
      // console.log(
      //   `aboveIndex = ${aboveIndex}, aboveVal = ${aboveVal}, pins = ${pins}`
      // );
    }
  }

  console.log(`🚀 ~ checkAbove ~ pins:`, pins)
  return pins
}

function checkSides(rowIndex: number, colIndex: number, pins: string[]): string[] {
  console.log('\n\n')
  const row = KEY_PAD[rowIndex]
  console.log(`🚀 ~ checkSides ~ row:`, row)
  const observedValue = row[colIndex].toString()
  console.log(`🚀 ~ checkSides ~ observedValue:`, observedValue)
  const colLength = row.length - 1
  console.log(`🚀 ~ checkSides ~ colLength:`, colLength)
  // check if row with 'keyPin' value appears on left or right boundary

  const leftIndex = colIndex - 1
  const rightIndex = colIndex + 1
  let leftNeighbor, rightNeighbor
  if (leftIndex >= 0) {
    leftNeighbor = pins.push(row[leftIndex])
    // console.log(`colIndex = ${colIndex}, pins = ${pins}`);
  }

  // if (colIndex === 0) {

  // }

  if (rightIndex <= colLength) {
    rightNeighbor = pins.push(row[rightIndex])
  }

  // else if (colIndex > 0 && colIndex < colLength) {
  //   let leftNeighbor = colIndex - 1;
  //   console.log(`🚀 ~ checkSides ~ leftNeighbor:`, leftNeighbor)
  //   if (leftNeighbor >= 0 && row[leftNeighbor] !== "") {
  //     const leftVal = row[leftNeighbor];
  //     console.log(`🚀 ~ checkSides ~ leftVal:`, leftVal)
  //     pins.push(leftVal);
  //     // console.log(`leftVal = ${leftVal}, pins = ${pins}`);
  //   }
  //   // now push the keyPin value
  //   pins.push(observedValue);

  //   // check if we have a value to the right to concatenate
  //   let rightNeighbor = colIndex + 1;
  //   console.log(`🚀 ~ checkSides ~ rightNeighbor:`, rightNeighbor)
  //   if (rightNeighbor < row.length && row[rightNeighbor] !== "") {
  //     const rightVal = row[rightNeighbor];
  //     console.log(`🚀 ~ checkSides ~ rightVal:`, rightVal)
  //     pins.push(row[rightNeighbor]);
  //     // console.log(`rightVal = ${rightVal}, pins = ${pins}`);
  //   }
  // }

  console.log(`🚀 ~ checkSides ~ pins:`, pins)

  return pins
}

function checkBelow(rowIndex: number, colIndex: number, pins: string[]): string[] {
  console.log('\n\n')
  const belowIndex = rowIndex + 1
  console.log(`🚀 ~ checkBelow ~ belowIndex:`, belowIndex)
  if (belowIndex < KEY_PAD.length) {
    const row = KEY_PAD[belowIndex]
    console.log(`🚀 ~ checkBelow ~ row:`, row)
    const belowVal = row[colIndex].toString()
    console.log(`🚀 ~ checkBelow ~ belowVal:`, belowVal)
    if (!pins.includes(belowVal) && belowVal !== '') {
      pins.push(belowVal)
      // console.log(`belowVal = ${belowVal}, belowIndex = ${belowIndex}, pins = ${pins}`);
    }
  }

  console.log(`🚀 ~ checkBelow ~ pins:`, pins)

  return pins
}
