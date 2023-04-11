const getFormattedTimeFromSeconds = (timesSecs: number): string => {
  const hours = padZeroes(Math.trunc(timesSecs / 3600))
  const minutes = padZeroes(Math.trunc((timesSecs % 3600) / 60))
  const seconds = padZeroes(Math.trunc(timesSecs % 60))

  return `${hours}|${minutes}|${seconds}`
}

const padZeroes = (n: number): string => (n >= 0 && n < 10 ? `0${n}` : `${n}`)

const isEven = (length: number): boolean => length % 2 === 0

const getRangeInSeconds = (sortedTeamTimesSecs: number[]): number =>
  sortedTeamTimesSecs[sortedTeamTimesSecs.length - 1] - sortedTeamTimesSecs[0]

const getAverageInSeconds = (sortedTeamTimesSecs: number[]): number =>
  Math.trunc(sortedTeamTimesSecs.reduce((a, b) => a + b, 0) / sortedTeamTimesSecs.length)

const getMedianInSeconds = (sortedTeamTimesSecs: number[]): number => {
  const length = sortedTeamTimesSecs.length
  const halfLength = length / 2

  return isEven(length)
    ? (sortedTeamTimesSecs[halfLength - 1] + sortedTeamTimesSecs[halfLength]) / 2
    : sortedTeamTimesSecs[Math.trunc(halfLength)]
}

const timeToSeconds = (h: string, m: string, s: string): number =>
  parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)

const getFormattedStats = (sortedTeamTimesSecs: number[]): string => {
  const range = getFormattedTimeFromSeconds(getRangeInSeconds(sortedTeamTimesSecs))
  const average = getFormattedTimeFromSeconds(getAverageInSeconds(sortedTeamTimesSecs))
  const median = getFormattedTimeFromSeconds(getMedianInSeconds(sortedTeamTimesSecs))

  return `Range: ${range} Average: ${average} Median: ${median}`
}

export const stat = (s: string): string => {
  if (s === '') {
    return s
  }

  const sortedTeamTimesSecs = s
    .split(/,\s?/)
    .flatMap((teamTime: string) =>
      teamTime.split('|').map((_v, _i, a) => timeToSeconds(a[0], a[1], a[2]))
    )
    .sort((a, b) => a - b)

  return getFormattedStats(sortedTeamTimesSecs)
}
