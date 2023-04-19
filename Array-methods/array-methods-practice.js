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
