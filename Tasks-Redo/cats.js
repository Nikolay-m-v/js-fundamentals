"use strict";

function cats(array) {
  class cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let catsArray = [];

  for (let element of array) {
    let token = element.split(" ");
    let cats = new cat(token[0], Number(token[1]));
    catsArray.push(cats);
  }

  for (let cat of catsArray) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
