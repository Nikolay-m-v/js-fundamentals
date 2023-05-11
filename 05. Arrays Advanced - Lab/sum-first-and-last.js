"use strict";

function sumFirstLast(array) {
  let first = Number(array[0]);
  let last = Number(array.slice(-1));

  let sum = first + last;
  console.log(sum);
}

sumFirstLast(["20", "30", "40"]);
