"use strict";

function booleans(input) {
  let counter = 0;

  // input.forEach((subArray) => {
  //   subArray.forEach((element) => {
  //     if (element === true) {
  //       counter++;
  //     }
  //   });
  // });
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === true) {
        counter++;
      }
    }
  }
  console.log(counter);
  return counter;
}

booleans([
  [false, true, true],
  [true, false, false],
]);
