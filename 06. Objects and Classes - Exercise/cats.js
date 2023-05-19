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

  let catArray = [];

  for (let singleCat of array) {
    let catInfo = singleCat.split(" ");
    let cats = new cat(catInfo[0], Number(catInfo[1]));
    catArray.push(cats);
  }

  for (let cat of catArray) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
