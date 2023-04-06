"use strict";

function printNth(input) {
  let collection = [];
  let lastElement = Number(input.pop());
  for (let i = 0; i < input.length; i += lastElement) {
    let currentNum = input[i];
    collection.push(currentNum);
  }
  console.log(collection);
}

printNth(["5", "20", "31", "4", "20", "2"]);

function addAndRemove(input) {
  let startNumber = [];
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    counter++;
    let command = input[i];
    if (command === "add") {
      startNumber.push(counter);
    } else {
      startNumber.pop();
    }
  }
  if (startNumber.length < 1) {
    console.log("Empty");
  } else {
    console.log(startNumber);
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
