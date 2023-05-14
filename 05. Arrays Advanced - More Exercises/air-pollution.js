"use strict";

function airPollution(coordinates, conditions) {
  let matrixMap = coordinates.map((number) => number.split(" ").map(Number));
  let breezePower = 15;
  let galePower = 20;
  let airQualityRow = 0;
  let airQualityCol = 0;

  let pollutedAreas = [];

  for (let i = 0; i < coordinates.length; i++) {
    let row = Number(coordinates[i]);
    for (let j = 0; j < conditions.length; j++) {
      let condition = conditions[0];
      let conditionType = condition[0];
      let conditionArea = Number(condition[1]);
      let rowAffect = false;
      let colAffect = false;

      if (conditionType === "breeze") {
        rowAffect = true;
      } else if (conditionType === "gale") {
        colAffect = true;
      }

      if (rowAffect) {
        if (row === conditionArea) {
          for (let k = 0; k < matrixMap.length; k++) {
            let currentElement = Number(row[k]);
            airQualityRow = currentElement - breezePower;
          }
        }
      } else if (colAffect) {
        for (let k = 0; k < matrixMap.length; k++) {
          let currentElement = Number(row[k]);
          airQualityCol = currentElement - galePower;
        }
      }
    }
  }
  console.log(airQualityRow);
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
