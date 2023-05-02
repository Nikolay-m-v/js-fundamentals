"use strict";

function maxSequenceEqual(input) {
  let longestArray = [];

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    let currentArray = [];

    for (let k = i; k < input.length; k++) {
      let nextElement = input[k];
      if (currentElement === nextElement) {
        currentArray.push(currentElement);
      } else {
        break;
      }
      if (currentArray.length > longestArray.length) {
        longestArray = currentArray;
      }
    }
  }
  console.log(longestArray.join(" "));
}

maxSequenceEqual([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
