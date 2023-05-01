"use strict";

function maxNumber(input) {
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    let isTopInteger = true;
    for (let j = i + 1; j < input.length; j++) {
      let nextElement = input[j];
      if (currentElement <= nextElement) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      newArray.push(currentElement);
    }
  }
  console.log(newArray.join(" "));
}

maxNumber([1, 4, 3, 2]);
