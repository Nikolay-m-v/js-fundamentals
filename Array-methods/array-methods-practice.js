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
