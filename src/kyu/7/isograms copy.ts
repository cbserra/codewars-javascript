type IsogramCount = {
  [key: string]: number
}

export function isIsogram(str: string) {
  if (str === undefined || str.length == 0) {
    return true
  }

  const count: IsogramCount = {}
  let foundIsogram = true

  str
    .toLowerCase()
    .split('')
    .sort()
    .forEach((curr, idx, arr) => {
      count[curr] = count[curr] ? count[curr] + 1 : 1

      if (count[curr] > 1) {
        foundIsogram = false
      }
    })

  return foundIsogram
}
