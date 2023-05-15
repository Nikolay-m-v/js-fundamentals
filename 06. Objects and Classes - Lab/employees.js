"use strict";

function employees(array) {
  let listOfNames = {};

  for (let i = 0; i < array.length; i++) {
    let currentName = array[i];
    listOfNames[currentName] = currentName.length;
  }
  for (let name in listOfNames) {
    console.log(`Name: ${name} -- Personal Number: ${listOfNames[name]}`);
  }

  // for (let i = 0; i < array.length; i++) {
  //   console.log(`Name: ${array[i]} -- Personal Number: ${array[i].length}`);
  // }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
