'use strict'

const { Calculator } = require("./calculator.js")
// execute function on calculator.js in here
const calc = new Calculator();
const data = Object.keys(calc);
const circle = new Calculator(7);
circle.square().pi();
console.log(circle[data]);
