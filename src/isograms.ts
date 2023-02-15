type IsogramCount = {
  [key: string]: number;
};

function hasDuplicates(array: string[]): boolean {
  return new Set(array).size !== array.length;
}

export function isIsogram(str: string): boolean {
  if (str === undefined || str.length == 0) {
    return true;
  }

  const count: IsogramCount = {};

  let foundIsogram = true;

  str
    .toLowerCase()
    .split("")
    .sort()
    .forEach((curr, idx, arr) => {
      count[curr] = count[curr] ? count[curr] + 1 : 1;
      console.log(
        `forEach, count[${curr}] = ${count[curr]}, curr = ${curr}, idx = ${idx}, arr = ${arr}`
      );

      if (count[curr] > 1) {
        foundIsogram = false;
      }
    });

  return foundIsogram;
}
