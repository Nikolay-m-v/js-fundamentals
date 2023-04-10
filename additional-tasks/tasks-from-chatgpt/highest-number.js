"use strict";

function highestNumber(number) {
  let highest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < number.length; i++) {
    let subArray = number[i];
    for (let j = 0; j < subArray.length; j++) {
      let currentNumber = subArray[j];
      if (currentNumber > highest) {
        highest = currentNumber;
      }
    }
  }
  console.log(highest);
}

highestNumber([
  [3, 7, 5],
  [8, 2, 4],
]);
