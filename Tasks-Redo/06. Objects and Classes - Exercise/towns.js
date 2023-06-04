"use strict";

function towns(input) {
  let townObject = {};

  for (let element of input) {
    let tokens = element.split(" | ");
    townObject.town = tokens[0];
    townObject.latitude = tokens[1];
    townObject.longitude = tokens[2];
    console.log(
      `town: ${town}, latitude: ${latitude}, longitude: ${longitude}`
    );
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
