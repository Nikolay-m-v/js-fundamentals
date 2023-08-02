"use strict";

function add(array, value) {
  array.push(value);
}

function remove(array, value) {
  let index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function removeAt(array, index) {
  array.splice(index, 1);
}

function insert(array, number, index) {
  array.splice(index, 0, number);
}

function contains(array, number) {
  let result = array.includes(number);
  console.log(result);
}

function arrayManipulation(array, input) {
  let instruction = input.shift();

  while (instruction !== "STOP") {
    let commands = instruction.split(" ");
    let command = commands[0];
    let firstArgument = Number(commands[1]);
    let secondArgument = Number(commands[2]);
    switch (command) {
      case "Add":
        add(array, firstArgument);
        break;
      case "Remove":
        remove(array, firstArgument);
        break;
      case "RemoveAt":
        removeAt(array, firstArgument);
        break;
      case "Insert":
        insert(array, firstArgument, secondArgument);
        break;
      case "Contains":
        contains(array, firstArgument);
        break;
    }
    instruction = input.shift();
  }
  console.log(array);
}

// arrayManipulation(
//   [10, 20, 30, 40, 50],
//   [
//     "Add 3",
//     "Remove 20",
//     "RemoveAt 1",
//     "Insert 8 2",
//     "Contains 20",
//     "Contains 40",
//     "STOP",
//   ]
// );
arrayManipulation(
  [2, 4, 15, 31],
  [
    "Add 1",
    "Remove 1",
    "Contains 1",
    "RemoveAt 2",
    "Remove 2",
    "Contains 2",
    "Contains 15",
    "STOP",
  ]
);
