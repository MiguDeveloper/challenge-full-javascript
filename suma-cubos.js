const findNb = (m) => {
  if (Number.isInteger(Math.sqrt(m * 4))) {
    const discriminante = Math.sqrt(1 - 4 * 1 * -Math.sqrt(m * 4));
    const x1 = (-1 + discriminante) / 2;
    const x2 = (-1 - discriminante) / 2;

    const sol = Number.isInteger(Math.max(x1, x2));
    return sol ? Math.max(x1, x2) : -1;
  }
  return -1;
};
console.log(findNb(9));

console.log(findNbFast(9));

function findNbL(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}

console.log(findNbL(10));
