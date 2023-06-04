"use strict";

function city(input) {
  let props = Object.keys(input);

  for (let prop of props) {
    console.log(`${prop} -> ${input[prop]}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
