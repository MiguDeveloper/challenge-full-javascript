const expandedForm = (num) => {
  return [...num.toString()]
    .map((digito, i, arr) => digito * Math.pow(10, arr.length - i - 1))
    .filter((expresion) => expresion > 0)
    .join(' + ');
};
console.log(expandedForm(92093403034573));

const expandedFormFast = (n) => {
  return n
    .toString()
    .split('')
    .reverse()
    .map((digito, idx) => digito * Math.pow(10, idx))
    .filter((item) => item > 0)
    .reverse()
    .join(' + ');
};

console.log(expandedFormFast(92093403034573));
