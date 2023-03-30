"use strict";

function convertToKm(number) {
  let oneKm = 1000;
  let meters = number;
  let kmResult = meters / oneKm;
  console.log(kmResult.toFixed(2));
}

convertToKm(1852);
convertToKm(798);
