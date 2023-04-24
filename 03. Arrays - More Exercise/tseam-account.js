"use strict";

function tseamAccount(input) {
  let peterAccountGames = [];
  let shifted = input.shift();
  peterAccountGames.push(shifted);
  peterAccountGames = peterAccountGames[0].split(" ");
  let index = 0;
  let command = input[index++];

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
    command = input[index++];
  }
  console.log(peterAccountGames.join(" "));
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
