"use strict";

function arrayManipulator(arrayNumbers, arrayStrings) {
  let index = 0;
  let command = arrayStrings[index++];

  while (command !== "print") {
    let currentCommand = command.split(" ");
    let toDo = currentCommand[0];
    let indexOfCommand = Number(currentCommand[1]);
    let element = Number(currentCommand[2]);

    switch (toDo) {
      case "add":
        arrayNumbers.splice(indexOfCommand, 0, element);
        break;
      case "addMany":
        for (let j = 2; j < currentCommand.length; j++) {
          let nextElement = Number(currentCommand[j]);
          arrayNumbers.splice(indexOfElement, 0, nextElement);
          indexOfCommand++;
        }
      case "contains":
        element = Number(currentCommand[1]);
        let indexOfElement = arrayNumbers.indexOf(element);
        console.log(indexOfCommand);
        break;
      case "remove":
        arrayNumbers.splice(indexOfCommand, 1);
        break;
      case "shift":
        for (let k = 0; k < indexOfCommand; k++) {
          let shiftedElement = arrayNumbers.shift();
          arrayNumbers.push(shiftedElement);
        }
        break;
      case "sumPairs":
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
