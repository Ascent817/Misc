/**
 * At the time of writing, this code passed both tests in Google Kickstart 2021 Round B.
 * Authors: @Ascent817 and @DabbingGuy
 * Code is licensed under MIT license.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);

    if (input.length === parseInt(input[0]) * 2 + 1) {
        input = input.filter((block) => !parseInt(block));
        Solve(input);
    }
});

function Solve(input) {
    // Loop throught each test case
    input.forEach((block, caseNumber) => {
        // An array in which each element is a char of the string we are testing for the case
        let strArr = Array.from(block);
        // The solutions. An array of ints 
        let solutionArr = [];
        // Add the first answer (always one)
        solutionArr.push(1);
        // Loop through each char in the test string, skipping first one
        for (let i = 1; i < strArr.length; i++) {
            // What will be put into solutionArray
            // Length of longest substring that goes in
            // alphabetical order that ends at the current
            // character
            let length = 1;

            // Iterate backwards through the string,
            // starting at our current character
            for (let j = i; j > 0; j--) {
                if (CompareGreatness(strArr[j], strArr[j - 1])) {
                    length++;
                } else {
                    // Only continue looping backwards if the pattern isn't broken
                    break;
                }
            }

            solutionArr.push(length);
        }

        console.log(`Case #${caseNumber + 1}: ${solutionArr.join(' ')}`);
    });
}

function CompareGreatness(a, b) {
    return a.charCodeAt(0) > b.charCodeAt(0)
}