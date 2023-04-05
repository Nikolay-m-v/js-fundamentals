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
