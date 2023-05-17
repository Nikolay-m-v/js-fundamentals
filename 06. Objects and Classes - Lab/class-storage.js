"use strict";

function classStorage() {
  class storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = 0;
    }

    addProduct(product) {
      this.capacity -= product.quantity;
    }
  }

  let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
  let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
  let productThree = { name: "Bread", price: 1.1, quantity: 8 };
}

classStorage();
