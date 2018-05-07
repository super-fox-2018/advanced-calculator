'use strict'
class Calculator {
    constructor(input) {
        this.num = input;
    }

    increament(add) {
        this.num += add;
        return this;
    }

    decreament(dec) {
        this.num -= dec
        return this;
    }

    multiple(times) {
        this.num *= times;
        return this;
    }

    divided(div) {
        this.num /= div;
        return this;
    }

    power(inputPow) {
        this.num = Math.pow(this.num, inputPow);
        return this;
    }

    sqrt(num) {
        this.num = Math.sqrt(this.num);
        return this
    }

    kelilingLingkaran() {
        this.num = Math.PI * this.num * 2;
        return this;
    }

    luasLingkaran() {
        this.num = Math.PI * (this.num / 2) * (this.num / 2);
        return this;
    }
}

var myCalculator = new Calculator(14)

console.log(myCalculator.power(2).sqrt().multiple(2));