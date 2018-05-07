'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number=1
  }

  add (num) {
    this.number=this.number+num
    return this
  }

  substract (num) {
    this.number=this.number-num
    return this
  }

  multiply (num) {
    this.number=this.number*num
    return this
  }

  divide (num) {
    this.number=this.number/num
    return this
  }

  square (num) {
    let power=1
    for(let a=0; a<num; a++) {
      power=power*this.number
    }
    this.number=power
    return this
  }

  squareRoot () {
    this.number=Math.sqrt(this.number)
    return this
  }

}
let result=new Calculator()
console.log(result.add(3).substract(2).square(4).squareRoot(2))
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
