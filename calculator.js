'use strict'

class Calculator {
  //write your code here
  constructor (numDef) {
    this.default = numDef;
    this.pi = 3.141596;
  }
  add (num) {
    this.default += num;
    return this;
  }
  substract (num) {
    this.default -= num;
    return this;
  }
  multiply (num) {
    this.default *= num;
    return this;
  }
  divide (num) {
    this.default /= num;
    return this;
  }
  square (num) {
    this.default = Math.pow(this.default, num);
    return this;
  }
  squareRoot (num) {
    this.default = Math.sqrt(this.default, num);
    return this;
  }
  getResult(){
    return this.default;
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
