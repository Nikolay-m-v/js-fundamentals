"use strict";

function arrayModifier(input) {
  let initialValue = input.shift().split(" ").map(Number);

  while (input[0] !== "end") {
    let currentCommands = input.shift().split(" ");
    let command = currentCommands[0];
    let indexOne = Number(currentCommands[1]);
    let indexTwo = Number(currentCommands[2]);

    switch (command) {
      case "swap":
        let temp = initialValue[indexOne];
        initialValue[indexOne] = initialValue[indexTwo];
        initialValue[indexTwo] = temp;
        break;

      case "multiply":
        initialValue[indexOne] *= initialValue[indexTwo];
        break;

      case "decrease":
        for (let i = 0; i < initialValue.length; i++) {
          initialValue[i]--;
        }
        break;
    }
  }
  console.log(initialValue.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
