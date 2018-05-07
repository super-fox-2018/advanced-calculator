'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.number = angka
    // this.phi = Math.PI
  }
  add (number) {
    this.number += number
    return this
  }
  substract (number) {
    this.number -= number
    return this
  }
  multiply (number) {

    this.number *= number
    return this
  }
  divide (number) {
    this.number /= number
    return this
  }
  square () {
    this.number = Math.pow(this.number, number)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this.number
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

let sum = new Calculator(8);
// console.log(result.substract(10));
console.log(sum.add(9).substract(4).multiply(7));
