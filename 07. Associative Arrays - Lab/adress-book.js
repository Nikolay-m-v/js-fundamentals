"use strict";

function addressBook(array) {
  let addressRecord = {};

  array = array.sort((a, b) => a.localeCompare(b));

  for (let element of array) {
    let [name, address] = element.split(":");
    addressRecord[name] = address;
  }

  for (let name in addressRecord) {
    console.log(`${name} -> ${addressRecord[name]}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
