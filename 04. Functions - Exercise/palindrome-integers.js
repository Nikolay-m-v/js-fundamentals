"use strict";

function palindromeOrNot(input) {
  for (let num of input) {
    const str = num.toString();
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      console.log(`${num} is palindrome --- TRUE`);
    } else {
      console.log(`${num} is not a palindrome --- FALSE`);
    }
  }
}

palindromeOrNot([123, 323, 421, 121]);
palindromeOrNot([32, 2, 232, 1010]);
