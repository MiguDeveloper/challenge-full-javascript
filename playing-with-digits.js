// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
const digPow = (n, p) => {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, cur) => {
      acc = acc * 1 + cur ** p;
      p++;
      return acc;
    }, 0);

  const rpta = sum / n;
  return Number.isInteger(rpta) ? rpta : -1;
};

const digPowReducido = (n, p) => {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, cur) => acc * 1 + cur ** (p + i), 0);

  const rpta = sum / n;
  return Number.isInteger(rpta) ? rpta : -1;
};

console.log(digPow(46288, 3));
