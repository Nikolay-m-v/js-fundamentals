"use strict";

const items = ["light", "banana", "phone", "book", "mouse"];
const items2 = ["light", "banana", "scorpion", "book", "mouse"];

const plurals = items.map((item) => {
  if (item === "mouse") {
    return "mice";
  }
  return item + "s";
});

console.log(items);
console.log(plurals);
