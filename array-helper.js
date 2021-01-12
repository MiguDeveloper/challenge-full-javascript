// generar nuevas funciones para los arrays, cuadrados, cubos, suma, par, impar
/*
Array.prototype.square = () => this.map((item) => item ** 2);
Array.prototype.cube = () => this.map((item) => item ** 3);
Array.prototype.sum = () => this.reduce((acc, cur) => acc + cur);
Array.prototype.average = () => this.sum() / this.length;
Array.prototype.even = () => this.filter((item) => item % 2 === 0);
Array.prototype.odd = () => this.filter((item) => item % 2 !== 0);

console.log([1, 2, 3, 4, 5].square());
*/

Array.prototype.square = function () {
  return this.map((item) => item ** 2);
};

Array.prototype.cube = function () {
  return this.map((item) => item ** 3);
};

Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur);
};

Array.prototype.average = function () {
  if (this.length == 0) return NaN;
  return this.sum() / this.length;
};

Array.prototype.even = function () {
  return this.filter((item) => item % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((item) => item % 2 === 1);
};

console.log([1, 2, 3, 4, 5].square());
console.log([1, 2, 3, 4, 5].cube());
console.log([1, 2, 3, 4, 5].sum());
console.log([1, 2, 3, 4, 5].even());
console.log([1, 2, 3, 4, 5].odd());
