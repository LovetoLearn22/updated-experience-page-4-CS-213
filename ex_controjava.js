const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));
if (number % 2 === 0) {
    console.log(`The number ${number} is even`);
} else {
    console.log(`The number ${number} is odd`);
}


const taxRate = 0.06;
let numItems = parseInt(prompt("Enter the number of items: "));
let pricePerItem = parseFloat(prompt("Enter the price of the items: "));
let isTaxable = prompt("Is it taxable [Y]es or [N]o? ").toLowerCase();
let subtotal = numItems * pricePerItem;
let total = isTaxable === 'y' ? subtotal + (subtotal * taxRate) : subtotal;
console.log(`Your total is: $${total.toFixed(2)}`);

console.log("First 10 Odd Numbers:");
for (let i = 1, count = 0; count < 10; i += 2) {
    console.log(`Number: ${i}`);
    count++;
}

console.log("FizzBuzz from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    let output = i;
    if (i % 3 === 0 && i % 5 === 0) {
        output += " FizzBuzz";
    } else if (i % 3 === 0) {
        output += " Fizz";
    } else if (i % 5 === 0) {
        output += " Buzz";
    }
    console.log(output);
}

let n = parseInt(prompt("Enter the last number to add: "));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
let formulaSum = (n * (n + 1)) / 2;
console.log(`The total of the numbers from 1 to ${n} is: ${sum}`);
console.log(`The total of the numbers from 1 to ${n} using the formula is: ${formulaSum}`);
if (sum === formulaSum) {
    console.log("The totals are the same");
} else {
    console.log("The totals are different");
}
