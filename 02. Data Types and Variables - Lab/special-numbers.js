"use strict";

function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let iToString = String(i);
    let sum = 0;
    for (let j = 0; j < iToString.length; j++) {
      sum += Number(iToString[j]);
    }
    let isSpecial = false;
    if (sum === 5 || sum === 7 || sum === 11) {
      isSpecial = true;
    }
    if (isSpecial) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
