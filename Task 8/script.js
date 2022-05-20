/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const Calculator = function(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.sum = function() {
    console.log(`a ir b sumos rzultatas: ${this.a + this.b}`);
}
Calculator.prototype.subtraction = function() {
    console.log(`a ir b atimties rezultatas: ${this.a - this.b}`);
}
Calculator.prototype.multiplication = function() {
    console.log(`a ir b daugybos rezultatas: ${this.a * this.b}`);
}
Calculator.prototype.division = function() {
    console.log(`a ir b dalybos rezultatas: ${this.a / this.b}`)
}
const value = new Calculator (10, 5);

value.sum();
value.subtraction();
value.multiplication();
value.division();
