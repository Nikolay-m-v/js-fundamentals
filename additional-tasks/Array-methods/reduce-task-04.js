"use strict";

const items = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => {
    return item.toUpperCase();
  })
  .reduce((result, str) => {
    return result + str + " ";
  }, "");

// const caps = items.map((item) => {
//   return item.toUpperCase();
// });

// const concat = caps.reduce((result, capsItem) => {
//   return result + capsItem + " ";
// }, "");

console.log(items);
// console.log(caps);
// console.log(concat);
