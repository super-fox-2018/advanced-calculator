'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0;
  }
  add (num) {
    this.number += num;
    return this;
  }
  subtract (num) {
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
  square (num) {
    this.number = Math.pow(this.number,num);
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

module.exports = Calculator
