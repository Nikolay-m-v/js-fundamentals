"use strict";

function equalSums(input) {
  for (let i = 0; i < input.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i - 1; j > -1; j--) {
      leftSum += input[j];
    }

    for (let k = i + 1; k < input.length; k++) {
      rightSum += input[k];
    }

    if (leftSum === rightSum) {
      console.log(i);
    }
  }
}

equalSums([1, 2, 3, 3]);
