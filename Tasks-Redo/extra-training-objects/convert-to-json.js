"use strict";

function convertor(firstName, lastName, color) {
  let obj = {
    name: firstName,
    lastName: lastName,
    eyeColor: color,
  };

  let objToJson = JSON.stringify(obj);
  console.log(objToJson);
}

convertor("Ivan", "Ivanov", "blue");
convertor("Petar", "Petrov", "blue");
