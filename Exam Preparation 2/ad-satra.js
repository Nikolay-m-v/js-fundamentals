"use strict";

function adSatra(input) {
  let pattern =
    /([#|\|])(?<item>[\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<nutrition>\d+)\1/g;

  let match = pattern.exec(input);
  let totalCalories = 0;
  let output = [];

  while (match !== null) {
    output.push(
      `Item: ${match.groups.item}, Best before: ${
        match.groups.date
      }, Nutrition: ${Number(match.groups.nutrition)}`
    );
    totalCalories += Number(match.groups.nutrition);
    match = pattern.exec(input);
  }

  console.log(
    `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
  );

  console.log(output.join("\n"));
}

adSatra(
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"
);
