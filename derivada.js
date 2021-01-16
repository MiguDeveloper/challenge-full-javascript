const derivada = (equation, point) => {
  const monomios = [...equation];
  monomios.forEach((item, idx, array) => {
    if (item === '^') {
      array[idx - 1] = `${array[idx + 1]}*${array[idx - 1]}`;
      array[idx] = '**';
    }
  });

  console.log(monomios);
};

function differentiate(equation, point) {
  const standardize = (equation) => {
    return equation
      .replace(/(?<=^|\+|-)(?=x)/g, '1')
      .replace(/(?<=\d+)$/, 'x^0')
      .replace(/x(?=\+|-|$)/, 'x^1')
      .split(/\+|(?=-)/)
      .map((term) => term.split(/x\^/));
  };
  const derivative = ([coeff, exp]) => [coeff * exp, exp - 1];
  const evaluate = (sum, [coeff, exp]) => sum + coeff * point ** exp;
  console.log(standardize(equation));
  console.log(standardize(equation).map(derivative));
  return standardize(equation).map(derivative).reduce(evaluate, 0);
}

//differentiate('1000x^2+300x+200', 531);
console.log(differentiate('1000x^2+300x+200', 531));
