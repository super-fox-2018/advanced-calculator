'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.number = angka
    this.pi = Math.PI
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
  square (number) {
    this.number = Math.pow(this.number,number)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  getResult(){
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

module.exports = Calculator

var cal = new Calculator(9)
console.log(cal.add(3).multiply(3).substract(6))