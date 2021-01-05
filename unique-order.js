const uniqueOrder = (items) => {
  return [...items].reduce(acumulador, []);
};

const acumulador = (acc, cur) =>
  acc[acc.length - 1] !== cur ? (acc = [...acc, cur]) : acc;

console.log(uniqueOrder('AAAABBBCCDAABBB'));
console.log(uniqueOrder('ABBCcAD'));
console.log(uniqueOrder([1, 2, 2, 3, 3]));

const uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
