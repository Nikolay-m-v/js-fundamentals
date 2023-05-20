"use strict";

function flightSchedule(array) {
  let flights = array.shift();
  let changeStatus = array.shift();
  let statusToCheck = array.shift().toString();
  let flightList = {};

  for (let flight of flights) {
    let [number, Destination] = flight.split(" ");
    flightList[number] = { Destination, Status: "Ready to fly" };
  }

  for (let flight of changeStatus) {
    let [number, currentStatus] = flight.split(" ");

    if (flightList.hasOwnProperty(number)) {
      flightList[number].Status = currentStatus;
    }
  }

  for (let flight in flightList) {
    if (flightList[flight].Status === statusToCheck) {
      console.log(flightList[flight]);
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
