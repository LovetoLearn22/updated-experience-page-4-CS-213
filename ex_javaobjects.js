const prompt = require('prompt-sync')();

function filterGreaterThan25(arr) {
    return arr.filter(num => num > 25);
}

const originalNumbers = [50, 65, 100, 25, 10, 15, 65];
const filteredNumbers = filterGreaterThan25(originalNumbers);

console.log(`The original array is [${originalNumbers}]`);
console.log(`The array of numbers greater than 25 is [${filteredNumbers}]`);

console.log('----------------------------------------------------------------');


const originalArray = [4, 9, 7, 2, 1, 8];
const updatedArray = originalArray.map(num => (num % 2 !== 0 ? num * 2 : num));

console.log(`The original array is [${originalArray}]`);
console.log(`The updated array is [${updatedArray}]`);

console.log('----------------------------------------------------------------');


function formatNumber(number, decimalPlaces) {
    return number.toFixed(decimalPlaces);
}

let number = parseFloat(prompt("Enter a number: "));
let decimalPlaces = parseInt(prompt("Enter number of decimal places: "));
console.log(`The number ${number} with ${decimalPlaces} places is ${formatNumber(number, decimalPlaces)}`);

console.log('----------------------------------------------------------------');


const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = 0;

while (guess !== randomNumber) {
    let input = prompt("Guess a number between 1 and 100: ");
    guess = parseInt(input);
    if (isNaN(guess)) {
        console.log("Please enter a valid number!");
        continue;
    }
    if (guess < randomNumber) {
        console.log("Your guess is too low");
    } else if (guess > randomNumber) {
        console.log("Your guess is too high");
    } else {
        console.log("Your guess is correct");
    }
}

console.log('----------------------------------------------------------------');


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
console.log(`Today is ${daysOfWeek[today]}`);

console.log('----------------------------------------------------------------');


function reverseString(str) {
    return str.split('').reverse().join('');
}

let userInput = prompt("Enter a string: ");
console.log(`The string reversed is ${reverseString(userInput)}`);

console.log('----------------------------------------------------------------');
