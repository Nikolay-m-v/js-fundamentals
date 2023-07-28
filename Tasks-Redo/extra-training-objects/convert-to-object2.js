"use strict";

"use strict";

function convertor(input) {
  let parsedToObject = JSON.parse(input);
  for (let key of Object.keys(parsedToObject)) {
    console.log(`${key}: ${parsedToObject[key]}`);
  }
}

convertor(`{"name": "Ivan", "age": 40, "town": "Sofia"}`);
