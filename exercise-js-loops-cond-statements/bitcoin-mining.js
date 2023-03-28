"use strict";

function bitcoinMining(input) {
  let oneGramOfGold = 67.51;
  let oneBitcoinPrice = 11949.16;
  let totalMoneyMade = 0;
  let moneyMade = 0;
  let bitcoinsBought = 0;
  let dayFirstPurchase = 0;
  let leftMoney = 0;
  let currentDay = 0;
  let goldGramsForCurrentDay = 0;
  let bitcoinCounter = 0;

  for (let i = 0; i < input.length; i++) {
    currentDay++;
    goldGramsForCurrentDay = input[i];
    if (currentDay % 3 === 0) {
      goldGramsForCurrentDay *= 0.7;
    }
    let moneyMadePerDay = goldGramsForCurrentDay * oneGramOfGold;
    totalMoneyMade += moneyMadePerDay;
    moneyMade += moneyMadePerDay;

    if (moneyMade >= oneBitcoinPrice) {
      bitcoinCounter++;
      let bitcoinsPerDay = Math.floor(moneyMade / oneBitcoinPrice);
      bitcoinsBought += bitcoinsPerDay;
      moneyMade -= bitcoinsPerDay * oneBitcoinPrice;
    }
    if (bitcoinCounter === 1) {
      dayFirstPurchase = currentDay;
      console.log("day of the first purchased bitcoin : " + dayFirstPurchase);
    }
    leftMoney = totalMoneyMade - bitcoinsBought * oneBitcoinPrice;
  }
  console.log("bitcoins bought " + bitcoinsBought);
  console.log("left money : " + leftMoney.toFixed(2));
}

bitcoinMining(["100", "200", "300"]);
bitcoinMining(["50", "100"]);
bitcoinMining(["3124.15", "504.212", "2511.124"]);
