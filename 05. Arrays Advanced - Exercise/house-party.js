"use strict";

function houseParty(array) {
  let guestList = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    currentElement = currentElement.split(" ");
    let name = currentElement[0];
    if (currentElement[2] === "going!") {
      if (guestList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestList.push(name);
      }
    } else {
      if (guestList.includes(name)) {
        guestList.pop(name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(guestList.join(" "));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
