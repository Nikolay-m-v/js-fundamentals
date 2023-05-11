"use strict";

function firstAndLastKNumber(array) {
  let k = array.shift();
  let firstK = array.slice(0, k);
  let lastK = array.slice(-k);
  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}

firstAndLastKNumber([2, 7, 8, 9]);
