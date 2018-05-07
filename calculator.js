'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = this.data;
    this.pi = 3.14; // constant pi
  }
  add (num) {
    this.number += num;
    return this;
  }
  substract (num) {
    this.number -= num;
    return this;
  }
  multiply (num) {
    this.number *= num;
    return this;
  }
  divide (num) {
    this.number /= num;
    return this;
  }
  power (num) {
    this.number = Math.pow(this.number, num);
    return this;
  }
  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const calculator = new Calculator(7);

console.log(calculator.power(2).multiply(calculator.pi).number);
console.log(calculator.data);

// module.exports = Calculator;
