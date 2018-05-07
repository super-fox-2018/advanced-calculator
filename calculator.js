'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0;
    //this.answer = 0
  }
  add (num) {
    let value = this.number + num;
    this.number = value;
    return this;
  }
  substract (num) {
    let value = this.number - num;
    this.number = value;
    return this;
  }
  multiply (num) {
    let value = this.number * num;
    this.number = value;
    return this;
  }
  divide (num) {
    let value = this.number / num;
    this.number = value;
    return this;
  }
  power (num) {
    let value = Math.pow(this.number, num);
    this.number = value;
    return this
  }
  square () {
    let value = this.number * this.number;
    this.number = value;
    return this;
  }
  squareRoot () {
    let value = Math.sqrt(this.number);
    this.number = value;
    return this;
  }
  pi () {
    let value = this.number * 3.14;
    this.number = value;
    return this;
  }

  //count() {}
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
