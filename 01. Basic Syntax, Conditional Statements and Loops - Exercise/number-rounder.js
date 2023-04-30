"use strict";

// Write a JS function that rounds numbers to a specific precision.
// The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant // decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.
// Remove trailing zeroes, if any (you can use parseFloat (number))
// The output should be printed to the console. Do not print insignificant decimals.

function numberRounder(number) {
  console.log(number.toPrecision(3));
}

numberRounder(3.1415926535897932384626433832795, 2);
numberRounder(10.5, 3);
