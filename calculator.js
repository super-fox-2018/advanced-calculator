'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (addition) {
    this.number = this.number += addition;
    return this;
    
  }
  substract (substraction) {
    this.number = this.number -= substraction;
    return this;
  }
  multiply (multiple) {
    this.number = this.number *= multiple;
    return this;
  }
  divide (division) {
    this.number = this.number /= division;
    return this;
  }
  square (power) {
    this.number = Math.pow(this.number,power) ;
    return this;
  }
  squareRoot () {
   this.number = Math.sqrt(this.number);
   return this
  }
}
const test = new Calculator(1233)
// console.log('foobar')

console.log(test.add(50).substract(321).multiply(1).divide(2).square(2).squareRoot());
// console.log(test.add(50));

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
