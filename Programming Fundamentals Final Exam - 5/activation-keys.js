"use strict";

function solution(arr) {
  let rawKey = arr.shift();

  while (arr[0] !== "Generate") {
    let line = arr.shift().split(">>>");
    let command = line[0];

    if (command === "Contains") {
      let substring = line[1];
      if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }
    } else if (command === "Flip") {
      let upOrLow = line[1];
      let startIndex = Number(line[2]);
      let endIndex = Number(line[3]);
      let start = rawKey.substring(0, startIndex);
      let end = rawKey.substring(endIndex);
      let middle = rawKey.substring(startIndex, endIndex);
      if (upOrLow === "Upper") {
        middle = middle.toLocaleUpperCase();
      } else {
        middle = middle.toLocaleLowerCase();
      }
      rawKey = start + middle + end;
      console.log(rawKey);
    } else if (command === "Slice") {
      let startIndex = Number(line[1]);
      let endIndex = Number(line[2]);
      let start = rawKey.substring(0, startIndex);
      let end = rawKey.substring(endIndex);
      rawKey = start + end;
      console.log(rawKey);
    }
  }

  console.log(`Your activation key is ${rawKey}`);
}

solution([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
solution([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
