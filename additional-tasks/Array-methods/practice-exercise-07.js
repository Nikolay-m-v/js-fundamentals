"use strict";

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

let lowPrices = prices.filter((price) => {
  if (price + price * 0.15 < 10) {
    return true;
  }
  return false;
});

console.log(prices);
console.log(lowPrices);
