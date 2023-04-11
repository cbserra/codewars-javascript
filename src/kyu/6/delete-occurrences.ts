function getCorrectOccurrences(arr: number[], moreThanN: number[], n: number): number[] {
  const updatedArr = arr
  for (let i = 0; i < moreThanN.length; i++) {
    while (arr.filter((j) => j === moreThanN[i]).length > n) {
      updatedArr.splice(updatedArr.lastIndexOf(moreThanN[i]), 1)
    }
  }

  return updatedArr
}

function getMoreThanN(arr: number[], n: number): number[] {
  const uniqueValues = new Set([...arr])
  const moreThanN: number[] = []

  uniqueValues.forEach((i) => {
    if (arr.filter((c) => c === i).length > n) {
      moreThanN.push(i)
    }
  })

  return moreThanN
}

export function deleteNth(arr: number[], n: number): number[] {
  const moreThanN = getMoreThanN([...arr], n)

  const correctOccurrences = getCorrectOccurrences([...arr], [...moreThanN], n)

  return correctOccurrences
}
