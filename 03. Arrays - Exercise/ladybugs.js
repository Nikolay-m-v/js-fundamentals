"use strict";

function ladybugs(input) {
  let fieldSize = Number(input[0]);
  let ladyBugs = [];

  for (let i = 0; i < fieldSize; i++) {
    ladyBugs[i] = 0;
  }
  let startingIndexes = input[1].split(" ").map((index) => Number(index));
  for (let i = 0; i < ladyBugs.length; i++) {
    if (startingIndexes.includes(i)) {
      ladyBugs[i] = 1;
    }
  }

  for (let i = 2; i < input.length; i++) {
    let command = input[i].split(" ");
    let index = Number(command[0]);

    if (index < 0 || index >= ladyBugs.length) {
      continue;
    }

    if (ladyBugs[index] === 0) {
      continue;
    }

    let direction = command[1];
    let moves = Number(command[2]);

    if (moves < 0) {
      moves = Math.abs(moves);
      switch (direction) {
        case "right":
          direction = "left";
          break;
        case "left":
          direction = "right";
          break;
      }
    }

    ladyBugs[index] = 0;
    let bugFlying = true;

    while (bugFlying) {
      switch (direction) {
        case "right":
          if (index + moves >= ladyBugs.length) {
            bugFlying = false;
          } else {
            if (ladyBugs[index + moves] === 0) {
              ladyBugs[index + moves] = 1;
              bugFlying = false;
            } else {
              bugFlying = true;
              index += moves;
            }
          }
          break;
      }
    }
  }
  console.log(ladyBugs.join(" "));
}

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
