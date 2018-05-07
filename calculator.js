'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this._num = num
  }
  add (numAdd) {
    this._num = this._num + numAdd
    return this
  }
  substract (numSubstract) {
    this._num = this._num - numSubstract
    return this
  }
  multiply (numMultiply) {
    this._num = this._num * numMultiply
    return this
  }
  divide (numDivide) {
    this._num = this ._num / numDivide
    return this
  }
  square (numExponen) {
    this._num = Math.pow(this._num,numExponen)
    return this
  }
  squareRoot () {
    this._num = Math.sqrt(this._num)
    return this
  }
}

let calculator = new Calculator(9)
console.log(calculator.substract(3).multiply(3).substract(10));
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
