"use strict";

function buildAWall(array) {
  let concreteUsedPerDayPerTeam = 195;
  let maxHeightInFeet = 30;
  array = array.map(Number);
  let crews = array.length;
  let concretePerDay = [];

  while (crews > 0) {
    let sorted = array.sort((a, b) => a - b);
    let max = sorted[array.length - 1];

    for (let i = max + 1; i <= maxHeightInFeet; i++) {
      for (let j = 0; j < sorted.length; j++) {
        sorted[j]++;
      }
      concretePerDay.push(crews * concreteUsedPerDayPerTeam);
    }

    for (let k = 0; k < sorted.length; k++) {
      if (sorted[k] === 30) {
        let indexOf30 = sorted.indexOf(30);
        sorted.splice(indexOf30, 1);
        crews--;
      }
    }
  }

  let sum = 0;
  for (let money of concretePerDay) {
    sum += money;
  }

  console.log(concretePerDay.join(", "));
  console.log(`${sum * 1900} pesos`);

  // let crew1 = Number(array[0]);
  // let crew2 = Number(array[1]);
  // let crew3 = Number(array[2]);
  // let concreteUsedPerDayPerTeam = 195;
  // let maxHeightInFeet = 30;
  // let counter = 0;
  // let totalSum = 0;

  // for (let i = crew1; i <= maxHeightInFeet; i++) {
  //   counter = 0;
  //   if (crew1 < maxHeightInFeet) {
  //     counter++;
  //   }
  //   if (crew2 < maxHeightInFeet) {
  //     counter++;
  //   }

  //   if (crew3 < maxHeightInFeet) {
  //     counter++;
  //   }
  //   crew1++;
  //   crew2++;
  //   crew3++;
  //   let totalConcrete = counter * concreteUsedPerDayPerTeam;
  //   totalSum = totalConcrete + totalSum;
  //   if (totalConcrete > 0) {
  //     console.log(totalConcrete);
  //   }
  // }
  // console.log(totalSum);
  // let pesos = totalSum * 1900;
  // console.log(`${pesos} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
