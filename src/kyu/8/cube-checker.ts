export function cubeChecker(volume: number, side: number): boolean {
  return Math.min(volume, side) > 0 && Math.pow(side, 3) == volume
}
