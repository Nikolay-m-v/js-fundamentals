// Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:
// If the year is a leap, print: "yes"
// Otherwise, print: "no"

function leapYear(year) {
  if (year % 4 === 0) {
    console.log("yes");
  } else if (year % 400 === 0) {
    console.log("yes");
  } else if (year % 100 === 0) {
    console.log("No");
  } else {
    console.log("no");
  }
}

leapYear(1984);
leapYear(2000);
leapYear(2003);
