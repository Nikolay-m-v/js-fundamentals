"use strict";

function sumOfNumbers(numbers) {
  if (numbers.length === 0) {
    console.log(0);
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let subArray = numbers[i];
    for (let j = 0; j < subArray.length; j++) {
      sum += subArray[j];
    }
  }
  console.log(sum);
}

sumOfNumbers([
  [11, 24, 38],
  [25, 55],
]);
