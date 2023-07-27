"use strict";

function city(input) {
  let keys = Object.keys(input);
  console.log(keys);
  for (const key of keys) {
    console.log(`${key} -> ${input[key]}`);
  }
}

city({ name: "Sofia", Population: 23000, country: "Bulgaria", postCode: 1000 });
city({ name: "Sofia", Population: 23000, country: "Bulgaria", postCode: 1000 });
city({ name: "Sofia", Population: 23000, country: "Bulgaria", postCode: 1000 });
