"use strict";

function chunk(array, size) {
  let newArray = [];
  let subArray = [];
  let subArrayTwo = [];
  let subArrayThree = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= size) {
      subArray.push(array[i]);
    } else if (array[i] > size && array[i] <= size * size) {
      subArrayTwo.push(array[i]);
    } else {
      subArrayThree.push(array[i]);
    }
  }
  newArray.push(subArray);
  newArray.push(subArrayTwo);
  newArray.push(subArrayThree);
  console.log(newArray);
}

chunk([1, 2, 3, 4, 5], 2);

/// [[1, 2], [3, 4], [5]]
