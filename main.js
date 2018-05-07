'use strict'

// execute function on calculator.js in here

const Calculator = require("./calculator.js")

let getCalculation = new Calculator;

//Test Case
console.log(getCalculation.add(2).multiply(10).divide(2).subtract(1).squareRoot())
//Expected Outpt 3
