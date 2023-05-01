"use strict";

function addAndSubtract(input) {
  let sumOriginal = 0;
  let sumNewArray = 0;
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    let currentNumber = input[i];
    sumOriginal += currentNumber;
    if (currentNumber % 2 === 0) {
      currentNumber += i;
      sumNewArray += currentNumber;
      newArray.push(currentNumber);
    } else {
      currentNumber -= i;
      sumNewArray += currentNumber;
      newArray.push(currentNumber);
    }
  }
  console.log(newArray);
  console.log(sumOriginal);
  console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
