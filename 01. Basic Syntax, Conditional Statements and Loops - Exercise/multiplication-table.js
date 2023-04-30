// You will receive a number as a parameter. Print the 10 times table for this number.

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " = " + n * i);
  }
}

multiplicationTable(5);
