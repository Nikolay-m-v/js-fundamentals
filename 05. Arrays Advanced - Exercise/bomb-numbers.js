"use strict";

function bombNumbers(array1, array2) {
  let specialBombNumber = array2.shift();
  let bombPower = array2.shift();

  let indexOfBombNumber = array1.indexOf(specialBombNumber);

  while (indexOfBombNumber !== -1) {
    let start = Math.max(0, indexOfBombNumber - bombPower);
    let explosion = bombPower * 2 + 1;
    array1.splice(start, explosion);
    indexOfBombNumber = array1.indexOf(specialBombNumber);
  }
  let sumRemaining = array1.reduce((a, b) => a + b, 0);
  console.log(sumRemaining);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
