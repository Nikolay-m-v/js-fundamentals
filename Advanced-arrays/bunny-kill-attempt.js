"use strict";

function bunnyKill(array) {
  let bombBunny = array
    .pop()
    .split(",")
    .map((number) => Number(number));
  let matrix = array.map((row) => row.split(" ").map((x) => Number(x)));
}

bunnyKill(["10 10 10", "10 10 10", "10 10 10", "0,0"]);
