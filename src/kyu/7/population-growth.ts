export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let currentResidents = p0;
  let numYears = 0;
  while (currentResidents < p) {
    currentResidents = Math.floor(
      currentResidents + currentResidents * (percent / 100) + aug
    );
    numYears++;
    console.debug(
      `p0 = ${p0}, currentResidents = ${currentResidents}, aug = ${aug}, p = ${p}, numYears = ${numYears}`
    );
  }

  return numYears;
};
