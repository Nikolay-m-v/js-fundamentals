"use strict";

function partyTime(array) {
  let vipGuests = [];
  let regularGuests = [];

  while (array[0] !== "PARTY") {
    let reservation = array.shift();
    reservation[0].charCodeAt() >= 48 && reservation[0].charCodeAt() <= 57
      ? vipGuests.push(reservation)
      : regularGuests.push(reservation);
  }

  for (let guest of array) {
    if (vipGuests.indexOf(guest) >= 0) {
      vipGuests.splice(vipGuests.indexOf(guest), 1);
    }
    if (regularGuests.indexOf(guest) >= 0) {
      regularGuests.splice(regularGuests.indexOf(guest), 1);
    }
  }
  console.log(vipGuests.length + regularGuests.length);
  vipGuests.forEach((el) => console.log(el));
  regularGuests.forEach((el) => console.log(el));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
