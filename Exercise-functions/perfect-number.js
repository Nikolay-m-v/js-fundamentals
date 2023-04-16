"use strict";

function perfectOrNot(n) {
  let perfectSoFar = false;
  let sumOfPositiveDivisors = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sumOfPositiveDivisors += i;
    }
    if (sumOfPositiveDivisors === n) {
      perfectSoFar = true;
    } else {
      perfectSoFar = false;
    }
  }

  if (perfectSoFar) {
    console.log("perfect number!");
  } else {
    console.log("not so perfect");
  }
}

perfectOrNot(6);
perfectOrNot(28);
perfectOrNot(1236498);
perfectOrNot(11);
