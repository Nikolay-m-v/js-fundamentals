"use strict";

let cat = {
  name: "Ragnar",
  age: 6,
  breed: "TurkishAngorish",
};

for (const prop in cat) {
  console.log(cat[prop]);
}

let propName = "age";

// console.log(cat[propName]);
// console.log(Object.values(cat));

let arrayCat = Object.values(cat);
console.log(arrayCat);
