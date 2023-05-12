"use strict";

function processOddNumbers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      newArray.push(array[i] * 2);
    }
  }

  console.log(newArray.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
