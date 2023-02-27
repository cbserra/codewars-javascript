const KEY_PAD = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", ""],
];

export function getPINs(observed: string) {
  console.info(`observed = ${observed}`);

  const pins: string[] = [];

  determineNeighboringPins(observed, pins);

  // //   const dualArr = []
  // const arr = observed.toString().split(""); // > 9 ? observed.toString().split('') : [ `${observed}` ]
  // console.info(`arr = ${arr}`);

  // const foundObserved = false;

  // arr.forEach((strNum) => {
  //   for (let i = 0; i < KEY_PAD.length; i++) {
  //     console.info(`i = ${i}, KEY_PAD[i] = [${KEY_PAD[i]}]`);
  //     for (let j = 0; j < KEY_PAD[i].length; j++) {
  //       console.info(`j = ${j}, KEY_PAD[i] = [${KEY_PAD[i]}]`);
  //       let row = KEY_PAD[i];
  //       if (row.indexOf(strNum) === -1) {
  //         console.info(
  //           `${strNum} not found in this row [${row}], row.indexOf(strNum) = ${row.indexOf(
  //             strNum
  //           )}, = break loop`
  //         );
  //         break;
  //       }
  //       let rowVal = row[j];
  //       console.info(`strNum = ${strNum}, rowVal = ${rowVal}, row = ${row}`);

  //       if (row.indexOf(strNum) > -1) {
  //         let existingObservedIndex = row.indexOf(strNum);

  //         // check for a neighbor value above
  //         const aboveIndex = i - 1;
  //         if (aboveIndex >= 0) {
  //           let aboveVal = KEY_PAD[aboveIndex][existingObservedIndex];
  //           // if (!pins.includes(aboveVal) && aboveVal !== "") {
  //           if (aboveVal !== "") {
  //             pins.push(aboveVal);
  //             console.info(
  //               `aboveIndex = ${aboveIndex}, aboveVal = ${aboveVal}, pins = ${pins}`
  //             );
  //           }
  //         }

  //         const observedValue = row[existingObservedIndex];
  //         // check if row with 'strNum' value appears on left or right boundary
  //         if (
  //           existingObservedIndex === 0 ||
  //           existingObservedIndex === row.length - 1
  //         ) {
  //           pins.push(observedValue);
  //           console.info(
  //             `existingObservedIndex = ${existingObservedIndex}, pins = ${pins}`
  //           );
  //         } else if (
  //           existingObservedIndex > 0 &&
  //           existingObservedIndex < row.length - 1
  //         ) {
  //           let leftNeighbor = existingObservedIndex - 1;
  //           if (leftNeighbor >= 0 && row[leftNeighbor] !== "") {
  //             const leftVal = row[leftNeighbor];
  //             pins.push(leftVal);
  //             console.info(`leftVal = ${leftVal}, pins = ${pins}`);
  //           }

  //           // now push the strNum value
  //           pins.push(observedValue);

  //           // check if we have a value to the right to concatenate
  //           let rightNeighbor = existingObservedIndex + 1;
  //           if (rightNeighbor < row.length && row[rightNeighbor] !== "") {
  //             const rightVal = row[rightNeighbor];
  //             pins.push(row[rightNeighbor]);
  //             console.info(`rightVal = ${rightVal}, pins = ${pins}`);
  //           }
  //         }

  //         // check if we have a neighbor value below
  //         const belowIndex = i + 1;
  //         if (belowIndex < KEY_PAD.length) {
  //           row = KEY_PAD[belowIndex];
  //           let belowVal = row[existingObservedIndex];
  //           if (!pins.includes(belowVal) && belowVal !== "") {
  //             pins.push(belowVal);
  //             console.info(
  //               `belowVal = ${belowVal}, belowIndex = ${belowIndex}, pins = ${pins}`
  //             );
  //           }
  //           break;
  //         }
  //         console.info(
  //           `existingObservedIndex = ${existingObservedIndex}, pins = ${pins}`
  //         );
  //       }
  //     }
  //   }
  // });

  return pins;
}
function determineNeighboringPins(observed: string, pins: string[]) {
  const copyPins = [...pins];

  const arr = observed.toString().split(""); // > 9 ? observed.toString().split('') : [ `${observed}` ]
  console.info(`arr = ${arr}`);

  const isMultiDigit = arr.length > 1;
  console.info(`isMultiDigit = ${isMultiDigit}`);

  const foundObserved = false;

  arr.forEach((strNum) => {
    for (let i = 0; i < KEY_PAD.length; i++) {
      console.info(`i = ${i}`);
      for (let j = 0; j < KEY_PAD[i].length; j++) {
        console.info(`j = ${j}`);
        let row = KEY_PAD[i];
        if (row.indexOf(strNum) === -1) {
          console.info(
            `${strNum} not found in this row [${row}], row.indexOf(strNum) = ${row.indexOf(
              strNum
            )} --= break loop`
          );
          break;
        }
        let rowVal = row[j];
        console.info(`strNum = ${strNum}, rowVal = ${rowVal}, row = ${row}`);

        if (row.indexOf(strNum) > -1) {
          let existingObservedIndex = row.indexOf(strNum);

          // check for a neighbor value above
          const aboveIndex = i - 1;
          if (aboveIndex >= 0) {
            let aboveVal = KEY_PAD[aboveIndex][existingObservedIndex];
            if (!copyPins.includes(aboveVal) && aboveVal !== "") {
              copyPins.push(aboveVal);
              console.info(
                `aboveIndex = ${aboveIndex}, aboveVal = ${aboveVal}, copyPins = ${copyPins}`
              );
            }
          }

          const observedValue = row[existingObservedIndex];
          // check if row with 'strNum' value appears on left or right boundary
          if (
            existingObservedIndex === 0 ||
            existingObservedIndex === row.length - 1
          ) {
            copyPins.push(observedValue);
            console.info(
              `existingObservedIndex = ${existingObservedIndex}, copyPins = ${copyPins}`
            );
          } else if (
            existingObservedIndex > 0 &&
            existingObservedIndex < row.length - 1
          ) {
            let leftNeighbor = existingObservedIndex - 1;
            if (leftNeighbor >= 0 && row[leftNeighbor] !== "") {
              const leftVal = row[leftNeighbor];
              copyPins.push(leftVal);
              console.info(`leftVal = ${leftVal}, copyPins = ${copyPins}`);
            }

            // now push the strNum value
            copyPins.push(observedValue);

            // check if we have a value to the right to concatenate
            let rightNeighbor = existingObservedIndex + 1;
            if (rightNeighbor < row.length && row[rightNeighbor] !== "") {
              const rightVal = row[rightNeighbor];
              copyPins.push(row[rightNeighbor]);
              console.info(`rightVal = ${rightVal}, copyPins = ${copyPins}`);
            }
          }

          // check if we have a neighbor value below
          const belowIndex = i + 1;
          if (belowIndex < KEY_PAD.length) {
            row = KEY_PAD[belowIndex];
            let belowVal = row[existingObservedIndex];
            if (!copyPins.includes(belowVal) && belowVal !== "") {
              copyPins.push(belowVal);
              console.info(
                `belowVal = ${belowVal}, belowIndex = ${belowIndex}, copyPins = ${copyPins}`
              );
            }
            break;
          }
          console.info(
            `existingObservedIndex = ${existingObservedIndex}, copyPins = ${copyPins}`
          );
        }
      }
    }
  });

  return copyPins;
}
