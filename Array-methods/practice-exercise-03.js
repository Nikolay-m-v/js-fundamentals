"use strict";

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxedPrices = prices.map((price) => {
  if (price > 10) {
    return (price -= price * 0.2);
  } else {
    return price;
  }
});

console.log(prices);
console.log(taxedPrices);
