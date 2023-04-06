"use strict";

function steam(gamesAndCommands) {
  let games = gamesAndCommands[0].split(" ");
  let account = [];

  let index = 1;
  let commandAndParam = gamesAndCommands[index];

  while (commandAndParam !== "Play!") {
    let commandAndParamList = commandAndParam.split(" ");
    let command = commandAndParamList[0];
    let game = commandAndParamList[1];

    switch (command) {
      case "Install":
        if (!account.includes(game)) {
          account.push(game);
        }

        break;
      case "Update":
        // something
        break;
      case "Expansion":
        let gameAndExpansionList = game.split("-");
        let actualGame = gameAndExpansionList[0];
        let expansion = gameAndExpansionList[1];
        let gameIndex = account.indexOf(gameAndExpansionList[0]);

        account[gameIndex] = actualGame + ":" + expansion;
        break;
      case "Uninstall":
        // do
        break;
      default:
        console.log("Unrecognized command", command);
    }

    index++;
    commandAndParam = gamesAndCommands[index];
  }

  console.log(games);
}

steam([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
