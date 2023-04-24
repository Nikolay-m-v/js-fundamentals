"use strict";

function reverseArrayNumbers(n, array) {
  let newArray = [];
  for (let i = n - 1; i >= 0; i--) {
    newArray.push(array[i]);
    console.log(newArray);
  }
}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayNumbers(4, [-1, 20, 99, 5]);
reverseArrayNumbers(2, [66, 43, 75, 89, 47]);
