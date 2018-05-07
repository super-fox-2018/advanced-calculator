'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
var number = new Calculator();
var number2 = new Calculator();
number.add(9).substract(3).divide(2).square();
number2.add(5).power(3).pi();
console.log(number, number2);