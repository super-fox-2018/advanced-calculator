'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.phi = 3.14
    this.awal = 0
    return this

  }
  add(num) {

    this.awal += num;
    return this

  }
  substract(num) {
    this.awal -= num
    return this
  }
  multiply(num) {
    this.awal *= num
    return this
  }
  divide(num) {

    this.awal /= num
    return this
  }
  square(num2) {
    this.awal = Math.pow(this.awal, num2);

    return this
  }
  squareRoot() {
    this.awal = Math.sqrt(this.awal);
    return this


  }

  circle(num) {

    this.awal = this.phi * (num * num)
    return this


  }


  show() {
    return this.awal
  }
}

var Hitung = new Calculator();

// console.log(Hitung.add(3).show())

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

module.exports = Calculator
