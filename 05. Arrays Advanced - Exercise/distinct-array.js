"use strict";

function distinctArray(array) {
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    for (let k = i + 1; k < array.length; k++) {
      let nextNumber = array[k];
      if (currentNumber === nextNumber) {
        array.splice(k, i);
        j -= 1;
      }
    }
  }
  console.log(array.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
