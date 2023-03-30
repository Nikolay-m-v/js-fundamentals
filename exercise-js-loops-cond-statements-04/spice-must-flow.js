"use strict";

function spiceMustFlow(startingYield) {
  let currentDay = 0;
  let totalSpice = 0;
  let crewConsumption = 26;
  let yieldDropPerDay = 10;
  while (startingYield >= 100) {
    currentDay++;
    totalSpice += startingYield;
    totalSpice -= crewConsumption;
    startingYield -= yieldDropPerDay;
  }

  if (totalSpice >= 26) {
    totalSpice -= 26;
  }

  console.log(currentDay);
  console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
