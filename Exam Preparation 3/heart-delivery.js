"use strict";

function heartDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);
  let currentPosition = 0;
  let housesCount = neighborhood.length;

  while (input[0] !== "Love!") {
    let currentCommand = input.shift().split(" ");
    let length = Number(currentCommand[1]);

    currentPosition += length;
    if (currentPosition >= neighborhood.length) {
      currentPosition = 0;
    }

    if (neighborhood[currentPosition] === 0) {
      console.log(`Place ${currentPosition} already had Valentine's day!`);
    } else {
      neighborhood[currentPosition] -= 2;
      if (neighborhood[currentPosition] === 0) {
        console.log(`Place ${currentPosition} has Valentine's day!`);
        housesCount--;
      }
    }
  }
  console.log(`Cupid's last position is ${currentPosition}`);

  if (housesCount === 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${housesCount} places.`);
  }
}

heartDelivery([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);



const cat = {
  name: 
}