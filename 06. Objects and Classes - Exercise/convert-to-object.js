"use strict";

function convertToObject(input) {
  let object = JSON.parse(input);
  let keys = Object.keys(object);
  console.log(object);
  console.log(keys);

  for (let prop of keys) {
    console.log(`${prop}: ${object[prop]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
