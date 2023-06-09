"use strict";

function printNth(input) {
  let collection = [];
  let lastElement = Number(input.pop());
  for (let i = 0; i < input.length; i += lastElement) {
    let currentNum = input[i];
    collection.push(currentNum);
  }
  console.log(collection);
}

printNth(["5", "20", "31", "4", "20", "2"]);

function addAndRemove(input) {
  let startNumber = [];
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    counter++;
    let command = input[i];
    if (command === "add") {
      startNumber.push(counter);
    } else {
      startNumber.pop();
    }
  }
  if (startNumber.length < 1) {
    console.log("Empty");
  } else {
    console.log(startNumber);
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);

function rotateArray(array) {
  let lastElement = Number(array.pop());

  for (let i = 0; i < lastElement; i++) {
    let popped = array.pop();
    array.unshift(popped);
  }
  console.log(array.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);

function nonDecreasingSubset(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let arr = array.filter(checkHighest);

  function checkHighest(currentNum) {
    if (currentNum >= max) {
      max = currentNum;
      return true;
    } else {
      return false;
    }
  }

  console.log(arr.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);

function steamAccount(array) {
  let peterAccountGames = [];
  let shifted = array.shift();
  peterAccountGames.push(shifted);
  peterAccountGames = peterAccountGames[0].split(" ");
  let index = 0;
  let command = array[index++];

  while (command !== "Play!") {
    let firstElement = command.split(" ");
    let commandGame = firstElement[0];
    let game = firstElement[1];

    switch (commandGame) {
      case "Install":
        if (peterAccountGames.includes(game)) {
          break;
        } else {
          peterAccountGames.push(game);
        }
        break;

      case "Uninstall":
        let indexUninstall = peterAccountGames.indexOf(game);
        if (peterAccountGames.includes(game)) {
          peterAccountGames.splice(indexUninstall, 1);
        }
        break;

      case "Update":
        let indexUpdate = peterAccountGames.indexOf(game);
        if (peterAccountGames.includes(game)) {
          peterAccountGames.splice(indexUpdate, 1);
          peterAccountGames.push(game);
        }
        break;
      case "Expansion":
        let expansionGame = game.split("-");
        game = expansionGame[0];
        let expansion = expansionGame[1];
        let indexExpansion = peterAccountGames.indexOf(game);
        if (peterAccountGames.includes(game)) {
          peterAccountGames.splice(
            indexExpansion + 1,
            0,
            `${game}:${expansion}`
          );
        }
    }
    command = array[index++];
  }
  console.log(peterAccountGames.join(" "));
}

steamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
