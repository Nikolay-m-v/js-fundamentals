"use strict";

function largestNums(input) {
  let array = [];
  let largestNumber = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let currentNumber = input[i][j];
      if (currentNumber > largestNumber) {
        largestNumber = currentNumber;
      }
    }
    array.push(largestNumber);
  }
  console.log(array);
  return array;
}

largestNums([
  [1, 3, 5],
  [10, 8, 33],
]);
