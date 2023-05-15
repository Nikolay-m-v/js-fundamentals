"use strict";

function stoveProvision(stock, products) {
  let output = {};

  for (let i = 0; i < stock.length; i += 2) {
    let currentProduct = stock[i];
    let currentQuantity = Number(stock[i + 1]);
    output[currentProduct] = currentQuantity;
  }
  for (let j = 0; j < products.length; j += 2) {
    let currentProduct = products[j];
    let currentQuantity = Number(products[j + 1]);
    if (!output.hasOwnProperty(currentProduct)) {
      output[currentProduct] = 0;
    }
    output[currentProduct] += currentQuantity;
  }
  for (let property in output) {
    console.log(`${property} -> ${output[property]}`);
  }
}
console.log(output);

stoveProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
