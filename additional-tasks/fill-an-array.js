"use strict";

function fillArray(number, symbol) {
  let array = [];

  for (let i = 0; i < number; i++) {
    array.push(symbol);
  }
  console.log(array);
}

fillArray(3, "a");
