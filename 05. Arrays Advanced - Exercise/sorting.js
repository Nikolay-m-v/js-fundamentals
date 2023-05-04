"use strict";

function sorting(array) {
  let sorted = array.sort((a, b) => b - a);
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentNumber = sorted[i];
    result.push(currentNumber);
    let popped = sorted.pop();
    result.push(popped);
  }
  console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
