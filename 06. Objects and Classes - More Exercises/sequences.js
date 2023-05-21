"use strict";

function sequences(array) {
  array = array.map((el) => JSON.parse(el));
  array.forEach((el) => el.sort((a, b) => b - a));
  let outputArray = [];

  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    let isUnique = true;

    for (let j = 0; j < outputArray.length; j++) {
      let nextArray = outputArray[j];
      if (nextArray.toString() === currentArray.toString()) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      outputArray.push(currentArray);
    }
  }

  outputArray.sort((a, b) => a.length - b.length);
  outputArray.forEach((el) => console.log(`[${el.join(", ")}]`));
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
