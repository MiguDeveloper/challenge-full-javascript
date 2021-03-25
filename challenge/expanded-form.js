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

const expandedFormPart2 = (num) => {
  const arr = num.toString().split('.');
  let entero = arr[0];
  if (Number.parseInt(arr[0]) > 0) {
    entero = entero
      .split('')
      .reverse()
      .map((digito, idx) => digito * Math.pow(10, idx))
      .filter((item) => item > 0)
      .reverse()
      .join(' + ')
      .concat(' + ');
  } else {
    entero = '';
  }

  let decimals = arr[1];
  const formatDecimals = decimals
    .split('')
    .map((digito, idx) => digito.concat('/').concat(Math.pow(10, idx + 1)))
    .filter((item) => item[0] !== '0')
    .join(' + ');

  return entero.concat(formatDecimals);
};

function expandedForm(num) {
  var [int, dec] = ('' + num).split('.');

  return int
    .split('')
    .map((x, y, a) => x + '0'.repeat(a.length - y - 1))
    .concat(dec.split('').map((x, y, a) => `${x}/1${'0'.repeat(y + 1)}`))
    .filter((x) => !x.startsWith('0'))
    .join(' + ');
}

console.log(expandedFormPart2(1.24));
console.log(expandedFormPart2(4.28));
console.log(expandedFormPart2(7.304));
console.log(expandedFormPart2(0.04));
console.log(expandedFormPart2(88.353824));
