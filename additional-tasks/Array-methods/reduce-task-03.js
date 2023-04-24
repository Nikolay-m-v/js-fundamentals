"use strict";

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((result, price) => {
  if (price > 6) {
    return result + price;
  } else {
    return result + price * 1.2;
  }
}, 0);

console.log(prices);
console.log(afterTax);
