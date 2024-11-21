let prompt = require('prompt-sync')();

console.log('Exercise 1');

let width, length, perimeter, area;

width = parseFloat(prompt("How wide is the rectangle?"));
length = parseFloat(prompt("How long is the rectangle?"));

perimeter = 2 * (length + width);
area = length * width;

console.log(`The perimeter is ${perimeter}`);
console.log(`The area is ${area}`);

console.log('--------------------------------')
console.log('exercise 2')

let pi = 3.14;

r = prompt('What is the radius?')

C = 2 * pi * r;
A = pi * r * r;

console.log(C);
console.log(A);


console.log('--------------------------------')
console.log('exercise 3')

function numbers(first_number, second_number) {
    let minus = first_number - second_number;
    console.log(`The first number ${first_number} minus the second number ${second_number} is ${minus}`);
}

let first_number = Number(prompt('Enter a first number: '));
let second_number = Number(prompt('Enter a second number: '));

numbers(first_number, second_number);



console.log('--------------------------------');
console.log('exercise 4');

function calculatePrice(num_of_items, price_per_item) {
    const taxrate = 0.06;
    let total = num_of_items * price_per_item;
    let tax = total * taxrate;
    return total + tax;
}

let num_of_items = Number(prompt("Enter the number of items: "));
let price_per_item = Number(prompt("Enter the price per item: "));

let totalPrice = calculatePrice(num_of_items, price_per_item);

console.log(`The total price including tax is: $${totalPrice.toFixed(2)}`);



