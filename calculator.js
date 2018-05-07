'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.num = angka||2;
  }
  add (tambah) {
    this.num += tambah;
    return this;
  }
  substract (kurang) {
    this.num -= kurang;
    return this;
  }
  multiply (kali) {
    this.num *= kali;
    return this;
  }
  divide (bagi) {
    this.num /= bagi;
    return this;
  }
  square (pangkat) {
    this.num = Math.pow(this.num,pangkat);
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
    return this;
  }
  pi (){
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
var cal = new Calculator();
console.log(cal.add(4).substract(2).multiply(7).divide(1).square(2).squareRoot().pi());

module.exports = Calculator
