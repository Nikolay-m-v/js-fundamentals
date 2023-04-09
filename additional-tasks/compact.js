"use strict";

function compact(input) {
  let array = [];
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "number") {
      array.push(input[i]);
    }
    if (input[i] === 0) {
      array.pop();
    }
  }
  console.log(array);
}

compact([0, 1, false, 2, undefined, "", 3, null]);
