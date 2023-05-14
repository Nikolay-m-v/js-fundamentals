"use strict";

function airPollution(coordinates, conditions) {
  let matrixMap = coordinates.map((number) => number.split(" ").map(Number));
  console.log(matrixMap);
  let pollutedAreas = [];
}

airPollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
