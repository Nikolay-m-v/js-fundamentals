"use strict";

function piccolo(array) {
  let record = {};

  for (let car of array) {
    let [command, carPlate] = car.split(", ");
    command === "IN" ? (record[carPlate] = null) : delete record[carPlate];
  }
  let sorted = Object.keys(record).sort((a, b) => a.localeCompare(b));
  sorted.length === 0
    ? console.log("Parking lot is empty")
    : sorted.map((car) => console.log(car));
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
