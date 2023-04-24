"use strict";

function nonDecreasingSubset(array) {
  let highestNumber = Number.MIN_SAFE_INTEGER;
  let output = array.filter(filterMaximum);

  function filterMaximum(num) {
    if (num >= highestNumber) {
      highestNumber = num;
      return true;
    } else {
      return false;
    }
  }

  console.log(output.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
