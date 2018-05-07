'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num || 1;
  }
  add (num) {
    this.num += num;
    return this;
  }
  substract (num) {
    this.num -= num;
    return this;
  }
  multiply (num) {
    this.num *= num;
    return this;
  }
  divide (num) {
    this.num /= num;
    return this;
  }
  square () {
    this.num *= this.num;
    return this;
  }
  toThePowerOf(n) {
    // const num = this.num;
    // let str = '';
    // for (let i = 1; i < n; i += 1) {
    //   this.num *= num;
    // }
    this.num = Math.pow(this.num, n);
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
    return this;
  }

  nthRootOf(root) {
    this.num = Math.pow(this.num, 1/root);
    return this;
  }

  pi() {
    this.num *= Math.PI;
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

module.exports = {
  Calculator
}