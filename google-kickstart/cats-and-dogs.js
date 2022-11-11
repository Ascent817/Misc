const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);

  if (input.length === parseInt(input[0]) * 2 + 1) {
    for (let i = 1; i < input.length; i += 2) {
      let caseNumber = (i + 1) / 2;
      console.log(Solve([input[i], input[i + 1]], caseNumber));
    }
  }
});

function Solve(input, caseNumber) {
  let parameters = input[0].split(" ");
  parameters = parameters.map((char) => parseInt(char));
  let animals = parameters[0];
  let dogFood = parameters[1];
  let catFood = parameters[2];
  // Number of cat food obtained from each dog that eats
  let M = parameters[3];
  let isPossible = true;
  Array.from(input[1]).forEach((animal, idx) => {
    if (animal === "D") {
      if (dogFood > 0) {
        dogFood--;
        catFood += M;
      } else {
        isPossible = false;
      }
    } else {
      if (catFood > 0) {
        catFood--;
      } else {
        for (let j = idx; j < Array.from(input[1]).length; j++) {
          if (Array.from(input[1])[j] === "D") {
            isPossible = false;
          }
        }
      }
    }
  });

  return `Case #${caseNumber}: ${isPossible ? "YES" : "NO"}`;
}