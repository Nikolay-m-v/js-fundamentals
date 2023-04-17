"use strict";

function carWash(input) {
  let percentageClean = 0;
  let index = 0;
  let command = input[index++];

  for (let i = 0; i < input.length; i++) {
    if (command === "soap") {
      percentageClean += 10;
    } else if (command === "water") {
      percentageClean += percentageClean * 0.2;
    } else if (command === "vacuum cleaner") {
      percentageClean += percentageClean * 0.25;
    } else if (command === "mud") {
      percentageClean -= percentageClean * 0.1;
    }
    command = input[index++];
  }
  console.log(`The car is ${percentageClean.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
