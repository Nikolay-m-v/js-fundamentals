"use strict";

function convertToObject(input) {
  let person = JSON.parse(input);

  let props = Object.keys(person);

  for (let prop of props) {
    console.log(`${prop}: ${person[prop]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
