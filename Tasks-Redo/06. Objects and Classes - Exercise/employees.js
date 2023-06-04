"use strict";

function employees(input) {
  let personInfo = {};

  for (let employee of input) {
    personInfo.name = employee;
    personInfo.personalNum = employee.length;
    console.log(
      `Name: ${personInfo.name} -- Personal Number: ${personInfo.personalNum}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
