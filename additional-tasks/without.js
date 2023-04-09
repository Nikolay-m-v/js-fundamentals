"use strict";

function without(input) {
  let array = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 1 && input[i] !== 2) {
      array.push(input[i]);
    }
  }
  console.log(array);
}

without([1, 2, 3, 1, 2]);
