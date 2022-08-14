const ps = require("prompt-sync");
const prompt = ps();

// Take user input
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

//Convert string to integer and display
var a = parseInt(num1)
var b = parseInt(num2)
console.log(`The first number is: ${num1} `);
console.log(`The first number is: ${num2} `);

// Add two numbers
var sum = a + b;
 
// Display output
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);