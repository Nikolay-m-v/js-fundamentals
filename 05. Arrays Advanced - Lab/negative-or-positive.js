"use strict";

function negativeOrPositive(array) {
  // let output = array.map((number) => Number(number)).sort((a, b) => a - b);
  // console.log(output);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      result.unshift(array[i]);
    } else {
      result.push(array[i]);
    }
  }
  console.log(result.join(`\n`));
}

negativeOrPositive(["7", "-2", "8", "9"]);
