"use strict";

function binaryToDecimal(input) {
  let stringToNumber = Number(input);
  let decimal = parseInt(stringToNumber, 2);
  console.log(decimal);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");
