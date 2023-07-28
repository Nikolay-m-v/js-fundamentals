"use strict";

// let jsonData = {
//   "name": "Maria",
//   "age": 20,
//   "grades": {
//     "Math": [6.00, 5.50],
//     "Biology": [6.00]
//   }
// }

let jsData = {
  name: "Maria",
  age: 20,
  grades: {
    Math: [6.0, 5.5],
    Biology: [6.0],
  },
};

let jsoned = JSON.stringify(jsData);
let objected = JSON.parse(jsoned);

console.log(jsoned);
console.log(objected.age);
