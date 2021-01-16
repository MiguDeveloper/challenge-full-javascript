const mixedFraction = (s) => {
  let items = s.split('/');
  items = items.map((item) => item * 1);

  if (items[1] === 0) {
    return 'Must raise ZeroDivisionError';
  }

  if (!items[0] && items[1] !== 0) {
    return '0';
  }

  if (items[0] % items[1] === 0) {
    return `${items[0] / items[1]}`;
  }

  const signo = items[0] / items[1] < 0 ? '-' : '';

  const mcd = Math.abs(getMcd(items));

  if (mcd > 1) {
    items.forEach((item, idx, arr) => {
      arr[idx] = item / mcd;
    });
  }
  const q = Math.floor(Math.abs((items[0] * 1) / (items[1] * 1)));
  const numerador = Math.abs(items[0]) - Math.abs(items[1]) * q;

  return `${signo}${q || ''} ${numerador}/${Math.abs(items[1])}`
    .trim()
    .toString();
};

const getMcd = (items) => {
  [n, d] = [...items];
  let mcd;
  let a = Math.max(n, d);
  let b = Math.min(n, d);

  while (b) {
    mcd = b;
    b = a % b;
    a = mcd;
  }
  return mcd;
};
//console.log(getMcd(['-10', '7']));

console.log(mixedFraction('42/9'));
console.log(mixedFraction('6/3'));
console.log(mixedFraction('1/1'));
console.log(mixedFraction('11/11'));
console.log(mixedFraction('4/6'));
console.log(mixedFraction('0/18891'));
console.log(mixedFraction('-10/7'));
console.log(mixedFraction('-22/-7'));
console.log(mixedFraction('0/0'));
console.log(mixedFraction('3/0'));
