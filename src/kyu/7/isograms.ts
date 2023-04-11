export function isIsogram(str: string) {
  return !str
    .toLowerCase()
    .split('')
    .sort()
    .some((curr, idx, arr) => curr === arr[idx + 1])
}
