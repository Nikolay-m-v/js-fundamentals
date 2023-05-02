"use strict";

function magicSum(array, number) {
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    for (let k = i + 1; k < array.length; k++) {
      let nextElement = array[k];
      if (currentElement + nextElement === number) {
        console.log(`${currentElement} ${nextElement}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([1, 2, 3, 4, 5, 6], 6);
