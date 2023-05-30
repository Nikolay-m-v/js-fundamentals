"use strict";

function deserializeString(array) {
  let result = [];

  while (array[0] !== "end") {
    let [letter, indexes] = array.shift().split(":");
    indexes = indexes.split("/");

    indexes.forEach((index) => {
      index = Number(index);
      for (let a = 0; a <= index; a++) {
        if (a === index) {
          result.splice(index, 1, letter);
        } else {
          result.push("*");
        }
      }
    });
  }

  result = result.filter((el) => el !== "*");
  console.log(result.join(""));
}

deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
