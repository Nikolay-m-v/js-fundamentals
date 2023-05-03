"use strict";

function train(array) {
  let passengersInWagon = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());
  let newArray = [];

  for (let command of array) {
    let currentCommand = command.split(" ");

    if (currentCommand[0] === "Add") {
      passengersInWagon.push(Number(currentCommand[1]));
    } else {
      for (let k = 0; k < passengersInWagon.length; k++) {
        if (passengersInWagon[k] + Number(currentCommand[0]) <= maxCapacity) {
          passengersInWagon[k] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInWagon.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
