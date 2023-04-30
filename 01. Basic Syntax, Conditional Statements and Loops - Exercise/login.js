// You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in."
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.

function login(params) {
  let userName = String(params[0]);
  let passwordAttemptOne = String(params[1]);
  let passwordAttemptTwo = String(params[2]);
  let passwordAttemptThree = String(params[3]);
  let passwordAttemptFour = String(params[4]);
  let correctPassword = "recA";

  if (passwordAttemptOne === correctPassword) {
    console.log("User " + userName + " logged in");
  } else {
    console.log("incorrect password, Try again.");
  }

  if (passwordAttemptTwo === correctPassword) {
    console.log("User " + userName + " logged in");
  } else {
    console.log("incorrect password, Try again.");
  }

  if (passwordAttemptThree === correctPassword) {
    console.log("User " + userName + " logged in");
  } else {
    console.log("incorrect password, Try again.");
  }

  if (passwordAttemptFour === correctPassword) {
    console.log("User " + userName + " logged in");
  } else {
    console.log("User " + userName + " blocked!");
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
