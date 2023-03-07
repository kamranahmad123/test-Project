class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

    add =() => this.a + this.b

    subtract =() => this.a - this.b

    multiply=() => this.a * this.b

    devide=() => this.a / this.b
}
module.exports = Calculator;
