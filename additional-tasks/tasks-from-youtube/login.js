"use strict";

function login(username, password) {
  if (username === "admin") {
    return true;
  }
  if (username === "monkey" && password === "123") {
    return true;
  }
  if (username === "moomoo" && password === "farm") {
    return true;
  }
  return false;
}

const test = login("hello", "meow");
const test2 = login("admin", "lol");
const test3 = login("monkey", "123");
const test4 = login("moomoo", "farm");
const test5 = login("moomoo", "moo");

console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
