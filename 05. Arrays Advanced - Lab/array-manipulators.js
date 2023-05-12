"use strict";

function arrayManipulators(commands) {
  let newArray = commands.shift().split(" ").map(Number);
  console.log(newArray);

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    let currentCommand = command[0];
    let firstNum = Number(command[1]);
    let secondNum = Number(command[2]);
    switch (currentCommand) {
      case "Add":
        newArray.push(firstNum);
        break;
      case "Remove":
        newArray = newArray.filter((num) => num !== firstNum);
        break;
      case "RemoveAt":
        newArray.splice(firstNum, 1);
        break;
      case "Insert":
        newArray.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(newArray);
}

arrayManipulators([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
