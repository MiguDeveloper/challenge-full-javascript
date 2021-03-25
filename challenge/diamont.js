const diamont = (n) => {
  let asteriscos = '',
    filaAsteriscos = '',
    topAsteriscos = [];

  if (n <= 0 || n % 2 === 0) {
    return null;
  } else {
    if (n === 1) {
      return '*\n';
    }
    let cantEspacios = (n - 1) / 2;
    for (let i = 1; i <= n; i += 2) {
      asteriscos = '*'.repeat(i).concat('\n');
      filaAsteriscos = ' '.repeat(cantEspacios).concat(asteriscos);
      topAsteriscos.push(filaAsteriscos);
      --cantEspacios;
    }
  }

  let cadena2 = [...topAsteriscos].reverse();
  cadena2.shift();
  const unionDiamont = [...topAsteriscos, ...cadena2].join('');
  return unionDiamont;
};

console.log(diamont(1));

function diamond2(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = '';
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len);
    str += '\n';
  }
  return str;
}

console.log(diamond2(1));
