"use strict";

function catalogue(input) {
  let catalogue = [];

  for (let element of input) {
    let info = element.split(" : ");
    let name = info[0];
    let price = Number(info[1]);
    let object = { product: name, price: price };
    catalogue.push(object);
  }

  catalogue.sort((a, b) => a.product.localeCompare(b.product));

  let firstLetter = "";
  for (let element of catalogue) {
    if (element.product.charAt(0) === firstLetter) {
      console.log(` ${element.product}: ${element.price}`);
    } else {
      firstLetter = element.product.charAt(0);
      console.log(firstLetter);
      console.log(` ${element.product}: ${element.price}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
