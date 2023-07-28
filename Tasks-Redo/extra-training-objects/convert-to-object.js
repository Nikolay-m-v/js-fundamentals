"use strict";

function convertor(input) {
  let parsedToObject = JSON.parse(input);
  let keys = Object.keys(parsedToObject);
  for (let key of keys) {
    console.log(`${key}: ${parsedToObject[key]}`);
  }
}

convertor(`{"name": "Ivan", "age": 40, "town": "Sofia"}`);
