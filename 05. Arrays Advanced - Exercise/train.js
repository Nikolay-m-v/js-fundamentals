"use strict";

function train(array) {
  let passengersInWagon = array[0].split(" ").map((number) => Number(number));
  let passengersInCurretnWagon = Number(passengersInWagon[0]);
  let maxCapacityPerWagon = Number(array[1]);
  let newArray = [];
  console.log(passengersInWagon);
  console.log(passengersInCurretnWagon);

  for (let i = 0; i < passengersInWagon.length; i++) {
    let currentWagon = passengersInWagon[0];
    for (let k = 2; k < array.length; k++) {
      let commands = array[k];
      let command = commands[0];
      let numberOfPassengers = Number(commands[1]);
      if (command === "add") {
        newArray.concat(numberOfPassengers);
      } else {
        if (currentWagon + numberOfPassengers < 76) {
          currentWagon += numberOfPassengers;
        } else {
          if (currentWagon[i + 1] )
        }
      }
    }
  }
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
