"use strict";

function lastKSequence(n, k) {
  let sumArray = [1];

  for (let i = 1; i < n; i++) {
    let lastK = sumArray.slice(-k);
    let sum = 0;

    for (let j of lastK) {
      sum += Number(j);
    }
    sumArray.push(sum);
  }
  console.log(sumArray.join(" "));
}

lastKSequence(6, 3);
