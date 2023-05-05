"use strict";

function searchForANumber(array1, array2) {
  let numbersToBeTaken = array2.shift();
  let numbersToDelete = array2.shift();
  let specialNumber = array2.shift();
  let occuranceCounter = 0;
  let newArray = [];

  newArray = array1.splice(0, numbersToBeTaken);
  for (let i = 0; i < numbersToDelete; i++) {
    newArray.shift();
  }
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === specialNumber) {
      occuranceCounter++;
    }
  }
  console.log(`Number ${specialNumber} occurs ${occuranceCounter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
