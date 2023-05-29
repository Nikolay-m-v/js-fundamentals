"use strict";

function cutAndReverse(string) {
  let middle = string.length / 2;

  let firstHalf = string.substring(0, middle);
  let secondHalf = string.substring(middle);

  console.log(firstHalf.split("").reverse().join(""));
  console.log(secondHalf.split("").reverse().join(""));
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
