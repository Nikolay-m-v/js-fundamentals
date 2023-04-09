"use strict";

function fromPairs(input) {
  let obj = Object.fromEntries(input);
  console.log(obj);
  // let index = 0;
  // let symbol = "";
  // let symbolTwo = "";
  // let number = 0;
  // let numberTwo = 0;
  // for (let i = 0; i < input.length; i++) {
  //   let subArray = input[i];
  //   for (let j = 0; j < subArray.length; j++) {
  //     symbol = index[j];
  //     j++;
  //     number = index[j];
  //     console.log(symbolTwo);
  //     console.log(number);
  //   }
  // }
}

fromPairs([
  ["a", 1],
  ["b", 2],
]);
