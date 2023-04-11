const KEY_PAD = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', ''],
]

function mapOrigToNeighborKeys(
  observedArr: string[],
  origToNeighbors: Map<string, string[]>
): void {
  console.log(`observedArr = ${observedArr}`)
  console.log(`origToNeighbors = ${origToNeighbors}`)

  if (!observedArr || observedArr.length < 1) {
    throw new Error('observedArr must be an array with at least one element')
  }

  const neighbors = getNeighborPins(observedArr[0])
  if (observedArr.length === 1) {
    const keyPin = observedArr[0]
    const neighbors = getNeighborPins(keyPin)
    origToNeighbors.set(keyPin, neighbors)
    // return origToNeighbors
    console.log(`origToNeighbors = ${origToNeighbors}`)
  }
}

function getNeighborPins(keyPin: string): string[] {
  const pins: string[] = []

  // observedArr.forEach((keyPin) => {
  for (let i = 0; i < KEY_PAD.length; i++) {
    console.log(`i = ${i}`)
    for (let j = 0; j < KEY_PAD[i].length; j++) {
      console.log(`j = ${j}`)

      let row = KEY_PAD[i]
      if (row.indexOf(keyPin) === -1) {
        console.log(
          `${keyPin} not found in this row [${row}], row.indexOf(keyPin) = ${row.indexOf(
            keyPin
          )} --= break loop`
        )
        break
      }

      let rowVal = row[j]
      console.log(`keyPin = ${keyPin}, rowVal = ${rowVal}, row = ${row}`)

      if (row.indexOf(keyPin) > -1) {
        let existingObservedIndex = row.indexOf(keyPin)

        // check for a neighbor value above
        const aboveIndex = i - 1
        if (aboveIndex >= 0) {
          let aboveVal = KEY_PAD[aboveIndex][existingObservedIndex]
          if (!pins.includes(aboveVal) && aboveVal !== '') {
            pins.push(aboveVal)
            console.log(`aboveIndex = ${aboveIndex}, aboveVal = ${aboveVal}, pins = ${pins}`)
          }
        }

        const observedValue = row[existingObservedIndex]
        // check if row with 'keyPin' value appears on left or right boundary
        if (existingObservedIndex === 0 || existingObservedIndex === row.length - 1) {
          pins.push(observedValue)
          console.log(`existingObservedIndex = ${existingObservedIndex}, pins = ${pins}`)
        } else if (existingObservedIndex > 0 && existingObservedIndex < row.length - 1) {
          let leftNeighbor = existingObservedIndex - 1
          if (leftNeighbor >= 0 && row[leftNeighbor] !== '') {
            const leftVal = row[leftNeighbor]
            pins.push(leftVal)
            console.log(`leftVal = ${leftVal}, pins = ${pins}`)
          }

          // now push the keyPin value
          pins.push(observedValue)

          // check if we have a value to the right to concatenate
          let rightNeighbor = existingObservedIndex + 1
          if (rightNeighbor < row.length && row[rightNeighbor] !== '') {
            const rightVal = row[rightNeighbor]
            pins.push(row[rightNeighbor])
            console.log(`rightVal = ${rightVal}, pins = ${pins}`)
          }
        }

        // check if we have a neighbor value below
        const belowIndex = i + 1
        if (belowIndex < KEY_PAD.length) {
          row = KEY_PAD[belowIndex]
          let belowVal = row[existingObservedIndex]
          if (!pins.includes(belowVal) && belowVal !== '') {
            pins.push(belowVal)
            console.log(`belowVal = ${belowVal}, belowIndex = ${belowIndex}, pins = ${pins}`)
          }
          break
        }
        console.log(`existingObservedIndex = ${existingObservedIndex}, pins = ${pins}`)
      }
    }
  }
  return pins
}

export function getPINs(observed: string): string[] {
  console.log(`observed = ${observed}`)

  //   const dualArr = []
  let origToNeighbors = new Map<string, string[]>()
  const observedSplitArr = observed.toString().split('')
  console.log(`🚀 ~ getPINs ~ observedSplitArr:`, observedSplitArr)
  mapOrigToNeighborKeys(observedSplitArr, origToNeighbors)

  const observedNeighbors: string[] = []

  origToNeighbors.set(observed, observedNeighbors)
  console.log(`observedSplitArr = ${observedSplitArr}, observedNeighbors = ${observedNeighbors}`)

  const isMultiDigit = observedSplitArr.length > 1
  console.log(`isMultiDigit = ${isMultiDigit}`)
  const pins: string[] = []
  const foundObserved = false

  observedSplitArr.forEach((keyPin) => {
    for (let i = 0; i < KEY_PAD.length; i++) {
      console.log(`i = ${i}`)
      for (let j = 0; j < KEY_PAD[i].length; j++) {
        console.log(`j = ${j}`)
        let row = KEY_PAD[i]
        if (row.indexOf(keyPin) === -1) {
          console.log(
            `${keyPin} not found in this row [${row}], row.indexOf(keyPin) = ${row.indexOf(
              keyPin
            )} --= break loop`
          )
          break
        }
        let rowVal = row[j]
        console.log(`keyPin = ${keyPin}, rowVal = ${rowVal}, row = ${row}`)

        if (row.indexOf(keyPin) > -1) {
          let existingObservedIndex = row.indexOf(keyPin)

          // check for a neighbor value above
          const aboveIndex = i - 1
          if (aboveIndex >= 0) {
            let aboveVal = KEY_PAD[aboveIndex][existingObservedIndex]
            if (!pins.includes(aboveVal) && aboveVal !== '') {
              pins.push(aboveVal)
              console.log(`aboveIndex = ${aboveIndex}, aboveVal = ${aboveVal}, pins = ${pins}`)
            }
          }

          const observedValue = row[existingObservedIndex]
          // check if row with 'keyPin' value appears on left or right boundary
          if (existingObservedIndex === 0 || existingObservedIndex === row.length - 1) {
            pins.push(observedValue)
            console.log(`existingObservedIndex = ${existingObservedIndex}, pins = ${pins}`)
          } else if (existingObservedIndex > 0 && existingObservedIndex < row.length - 1) {
            let leftNeighbor = existingObservedIndex - 1
            if (leftNeighbor >= 0 && row[leftNeighbor] !== '') {
              const leftVal = row[leftNeighbor]
              pins.push(leftVal)
              console.log(`leftVal = ${leftVal}, pins = ${pins}`)
            }

            // now push the keyPin value
            pins.push(observedValue)

            // check if we have a value to the right to concatenate
            let rightNeighbor = existingObservedIndex + 1
            if (rightNeighbor < row.length && row[rightNeighbor] !== '') {
              const rightVal = row[rightNeighbor]
              pins.push(row[rightNeighbor])
              console.log(`rightVal = ${rightVal}, pins = ${pins}`)
            }
          }

          // check if we have a neighbor value below
          const belowIndex = i + 1
          if (belowIndex < KEY_PAD.length) {
            row = KEY_PAD[belowIndex]
            let belowVal = row[existingObservedIndex]
            if (!pins.includes(belowVal) && belowVal !== '') {
              pins.push(belowVal)
              console.log(`belowVal = ${belowVal}, belowIndex = ${belowIndex}, pins = ${pins}`)
            }
            break
          }
          console.log(`existingObservedIndex = ${existingObservedIndex}, pins = ${pins}`)
        }
      }
    }
  })

  return pins
}
