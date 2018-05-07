'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.number = 0;
    this.phi = 3.14;
  }
  add(number) {
    this.number = this.number + number;
    return this;
  }
  substract(number) {
    this.number = this.number + number;
    return this;
  }
  multiply(number) {
    this.number = this.number * number;
    return this;
  }
  divide(number) {
    this.number = this.number / number;
    return this;
  }
  square() {
    this.number *= this.number;
    return this;
  }
  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }

  power(num) {
    let number = this.number
    for (let i = 1; i < num; i++) {
      this.number *= number;
    }
    return this;
  }

  getResult() {
    return this.number;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let myCalculator = new Calculator();

console.log(myCalculator.add(2).substract(1).multiply(2).square().squareRoot().power(2).multiply(myCalculator.phi));
console.log(`result: ${myCalculator.getResult()}`);

module.exports = Calculator
