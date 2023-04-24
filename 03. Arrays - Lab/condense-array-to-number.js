"use strict";

function condesnseArrayToNumber(array) {
  while (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i] + array[i + 1];
    }
    array.length--;
  }
  console.log(array[0]);
}

condesnseArrayToNumber([2, 10, 3]);
condesnseArrayToNumber([5, 0, 4, 1, 2]);
condesnseArrayToNumber([1]);
