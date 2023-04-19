"use strict";

let notAstring = 321;
let stringified = notAstring.toString();
console.log(stringified);

let namesArray = ["William", "Kamen", "Georgi"];
console.log(namesArray.join(" "));

let arrayToConcat = ["John", "Doe", "Roberto"];
let arrayToAdd = ["Vinchenko", "George"];
let concatenated = arrayToConcat.concat(arrayToAdd);
console.log(concatenated);

let namesToSplice = ["William", "Kamen", "Georgi"];
namesToSplice.splice(1, 1);
console.log(namesToSplice);

let arrayToSlice = ["William", "Kamen", "Georgi", "Vision"];
let sliced = arrayToSlice.slice(1, 2);

let searchIndex = ["William", "Kamen", "Georgi", "Vision"];
let kamenIndex = searchIndex.indexOf("Kamen");
console.log(kamenIndex);

let lastIndex = ["William", "Kamen", "Georgi", "Vision", "Kamen"];
let kamenLastIndex = lastIndex.lastIndexOf("Kamen");
console.log(kamenLastIndex);

let count = 0;
let arrayForEach = ["William", "Kamen", "Georgi", "Vision"];
arrayForEach.forEach((n) => {
  count++;
});
console.log(count);

let numbers = [1, 2, 3, 4, 5, 6];
let doubled = numbers.map((n) => n * 2);
console.log(doubled);
