"use strict";

function storeProvision(store, order) {
  let stock = {};

  for (let i = 0; i < store.length; i += 2) {
    let currentProduct = store[i];
    let currentQuantity = Number(store[i + 1]);
    stock[currentProduct] = currentQuantity;
  }
  for (let j = 0; j < order.length; j += 2) {
    let currentProduct = order[i];
    let currentQuantity = Number(order[j + 1]);
    if (!stock.hasOwnProperty(currentProduct)) {
      stock[currentProduct] = 0;
    }
    stock[currentProduct] += currentQuantity;
  }

  for (let element in stock) {
    console.log(`${element} -> ${stock[element]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
