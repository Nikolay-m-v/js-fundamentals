"use strict";

function towns(input) {
  let townObject = {};

  for (let element of input) {
    let tokens = element.split(" | ");
    townObject.town = tokens[0];
    townObject.latitude = Number(tokens[1]).toFixed(2);
    townObject.longitude = Number(tokens[2]).toFixed(2);
    console.log(
      `town: ${townObject.town}, latitude: ${townObject.latitude}, longitude: ${townObject.longitude}`
    );
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
