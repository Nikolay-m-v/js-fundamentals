"use strict";

function piccolo(array) {
  let record = {};

  for (let car of array) {
    let commands = car.split(", ");
    let action = commands[0];
    let carPlate = commands[1];

    switch (action) {
      case "IN":
        record[car].plate = carPlate;
      case "OUT":
        if (record.hasOwnProperty(carPlate)) {
          delete record.carPlate;
        }
    }
  }
  console.log(record);
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
