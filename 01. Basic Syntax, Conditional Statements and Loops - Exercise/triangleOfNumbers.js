// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

function triangleOfNumbers(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += i;
    }
    string += "\n";
  }
  console.log(string);
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);
