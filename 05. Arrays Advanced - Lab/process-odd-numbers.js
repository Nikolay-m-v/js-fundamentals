"use strict";

function processOddNumbers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      let number = array[i] * 2;
      newArray.push(number);
    }
  }

  newArray.reverse();
  console.log(newArray);
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
