"use strict";

function averageAge(input) {
  let sumAge = 0;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j].age !== undefined) {
        let age = Number(input[i][j].age);
        sumAge += age;
        count++;
      }
    }
  }
  let averageAge = sumAge / count;
  console.log(averageAge);
  return averageAge;
}

averageAge([
  [
    { name: "Rupert", age: "34" },
    { name: "Martha", age: "27" },
  ],
  [
    { name: "John", age: "40" },
    { name: "Jane", age: "25" },
  ],
]);
