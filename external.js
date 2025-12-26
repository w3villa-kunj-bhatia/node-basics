const { log } = require("console");
const factorial = require("./factorial");
const greet = require("./greet");

//this adds colors to the console output
const chalk = require("chalk");

console.log(chalk.blue(greet("Kunj")));
console.log(chalk.greenBright(factorial(5)));

console.log(factorial(12));
console.log(greet("Crow"));
