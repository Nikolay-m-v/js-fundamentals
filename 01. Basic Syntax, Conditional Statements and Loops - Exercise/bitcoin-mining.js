// Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine.
// Your shift consists of a certain number of days where you mine an amount of gold in grams.
// Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array.
// Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day.
// You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:
// 1 bitcoin = 11949.16lv
// 1 g of gold = 67.51lv

function bitcoinMining(params) {
  let firstDay = Number(params[0]);
  let secondDay = Number(params[1]);
  let thirdDay = Number(params[2]);
  let thirdDayAfterStolen = thirdDay - thirdDay * 0.3;
  let priceForOneBitcoin = 11949.16;
  let priceForOneGramOfGold = 67.51;

  let moneyMadeForDayOne = firstDay * priceForOneGramOfGold;
  let moneyMadeForDayTwo = secondDay * priceForOneGramOfGold;
  let totalMoneyMadeAfterDayTwo = moneyMadeForDayOne + moneyMadeForDayTwo;
  let moneyMadeForDayThree = thirdDayAfterStolen * priceForOneGramOfGold;
  let totalMoneyMadeAfterDayThree =
    moneyMadeForDayThree + totalMoneyMadeAfterDayTwo;

  let amountOfBitcoinsBought = totalMoneyMadeAfterDayThree / priceForOneBitcoin;
  let amountOfBitcoinsBoughtFormatted = Math.floor(amountOfBitcoinsBought);
  let moneyLeftAfterBuyingBitcoins =
    totalMoneyMadeAfterDayThree % priceForOneBitcoin;
  let moneyLeftAfterBuyingBitcoinsFormatted =
    (moneyLeftAfterBuyingBitcoins * 100) / 100;

  if (amountOfBitcoinsBought >= 1) {
    console.log(
      "You have bought " + amountOfBitcoinsBoughtFormatted + " bitcoins"
    );
    console.log(
      "Money left: " + moneyLeftAfterBuyingBitcoinsFormatted + " lv."
    );
  } else {
    console.log("Money left: " + totalMoneyMadeAfterDayTwo);
  }

  if (moneyMadeForDayOne >= priceForOneBitcoin) {
    console.log("you bought your first bitcoin after first day of work");
  } else if (totalMoneyMadeAfterDayTwo >= priceForOneBitcoin) {
    console.log("you bought your first bitcoin after second day of work");
  } else if (totalMoneyMadeAfterDayThree >= priceForOneBitcoin) {
    console.log("you bought your first bitcoin after third day of work");
  } else {
    console.log("You have not bought any bitcoins");
  }
}

bitcoinMining([50, 100, 300]);
