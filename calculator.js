'use strict'

class Calculator {
  constructor (num=1) { // dikasih nilai default 1, jadi misal lupa isi yg di calculator yg dibawah lngsung isi 1
    this.num=num
    
  }
  add (num) {
    this.num += num
    return this
  }
  substract (num) {
    this.num -= num
    return this
  }
  multiply (num) {
    this.num *= num
    return this
  }
  divide (num) {
    this.num /= num
    return this
  }
  square () { // ini nggak pkai parameter karena sudah pasti pangkat 2
    this.num *=this.num 
    return this
  }
  pangkat (num) { // kalau ini yang pangkatnya bisa dirubah mau pangkat 3, 4 dst makanya pakai Math.pow()
    this.num = Math.pow(this.num, num)
    return this
  }
  squareRoot () {
    this.num=Math.sqrt(this.num)
    return this
  }
  luasLingkaran(){
    this.pi = 3,14;
    this.num= this.pi*(Math.pow(this.num,2)) //
    return this
  }
  kelilingLingkaran(){
    this.pi = 3,14
    this.num= 2*this.pi*this.num
    return this
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
var resultCalculator = new Calculator(0) // hasil dimulai dari 0
console.log(resultCalculator.add(2).square(2).pangkat(3).num) // kasih .num dibelakang untuk liat hasil akhir, klu nggak ada .num yang kluar nanti object
