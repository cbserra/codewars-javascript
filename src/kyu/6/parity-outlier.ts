const ODD_OUTLIER = 1;
const EVEN_OUTLIER = 0;

export function findOutlier(integers: number[]): number {
  const evenOutliers = integers.filter(isEvenOutlier);
  const outlier =
    evenOutliers.length === 1
      ? evenOutliers[0]
      : integers.filter(isOddOutlier)[0];

  return outlier;
}

function isEvenOutlier(integer: number): boolean {
  return doesModMatchResult(integer, EVEN_OUTLIER);
}

function isOddOutlier(integer: number): boolean {
  return doesModMatchResult(integer, ODD_OUTLIER);
}

function doesModMatchResult(mod: number, result: number): boolean {
  return Math.abs(mod % 2) === result;
}
