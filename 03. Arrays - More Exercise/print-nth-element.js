"use strict";

function nthElement(input) {
  let collection = [];
  let lastElement = Number(input.pop());
  for (let i = 0; i < input.length; i += lastElement) {
    collection.push(input[i]);
  }
  console.log(collection.join(" "));
}

nthElement(["5", "20", "31", "4", "20", "2"]);
nthElement(["dsa", "asd", "test", "test", "2"]);
nthElement(["1", "2", "3", "4", "5", "6"]);
