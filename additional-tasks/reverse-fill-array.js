"use strict";

function reverseArray(input) {
  let reversed = [];
  for (let i = input.length - 1; i >= 0; i--) {
    reversed.push(input[i]);
  }
  console.log(reversed);
}

reverseArray([1, 2, 3]);
