// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:

function printAndSum(firstNumber, secondNumber) {
  let sum = 0;

  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
    console.log(i);
  }
  console.log(sum);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

////////////// same function using arrays
//  function printAndSum(params) {
//   let firstNumber = Number(params[0]);
//   let secondNumber = Number(params[1]);
//   let sum = 0;

//   for (let i = firstNumber; i <=secondNumber; i++) {
//     sum += i;
//     console.log(i);
//   }
//   console.log(sum);
// }

// printAndSum([5, 10]);
// printAndSum([0, 26]);
// printAndSum([50, 60]);
