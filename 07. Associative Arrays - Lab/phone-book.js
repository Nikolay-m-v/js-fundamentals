"use strict";

function phoneBook(array) {
  let phoneRecord = {};

  for (let element of array) {
    let [name, number] = element.split(" ");
    phoneRecord[name] = number;
  }
  for (let person in phoneRecord) {
    console.log(`${person} -> ${phoneRecord[person]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
