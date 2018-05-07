'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
var myCalc = new Calculator(5);
console.log(myCalc.add(2).multiply(2).getResult());

console.log(myCalc.square(3).squareRoot(2).getResult());
