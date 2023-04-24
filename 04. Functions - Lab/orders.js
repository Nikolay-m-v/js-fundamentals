"use strict";

function order(beverage, amount) {
  let totalCost = 0;
  let costPerCoffee = 1.5;
  let costPerWater = 1;
  let costPerCoke = 1.4;
  let costPerSnack = 2;

  if (beverage === "water") {
    totalCost = amount * costPerWater;
  } else if (beverage === "coffee") {
    totalCost = amount * costPerCoffee;
  } else if (beverage === "coke") {
    totalCost = amount * costPerCoke;
  } else if (beverage === "snack") {
    totalCost = amount * costPerSnack;
  }

  console.log(totalCost);
}

order("water", 5);
order("coffee", 2);
