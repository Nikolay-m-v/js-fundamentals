"use strict";

const array = [1, 2, [3, 4, [5]]];
let flatten = "";
let flattest = "";
flatten = array.reduce((acc, val) => acc.concat(val), []);
flattest = flatten.reduce((acc, val) => acc.concat(val), []);

console.log(flattest);
