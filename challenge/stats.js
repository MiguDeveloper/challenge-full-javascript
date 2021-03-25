const stat = (strg) => {
  if (!strg) {
    return '';
  }
  const tiempos = strg
    .split(', ')
    .map((item) =>
      item
        .split('|')
        .map((t, i) => t * (i === 0 ? 3600 : i === 1 ? 60 : 1))
        .reduce((acc, cur) => acc + cur, 0)
    )
    .sort((a, b) => a - b);

  const sum = tiempos.reduce((acc, cur) => acc * 1 + cur * 1, 0);
  const cant = tiempos.length;

  const calcRange = tiempos[tiempos.length - 1] - tiempos[0];
  let resulRange = getTime(calcRange);
  resulRange = resulRange.split(':').join('|');

  const calcAverage = sum / cant;
  let resulAverage = getTime(calcAverage);
  resulAverage = resulAverage.split(':').join('|');

  const parOrImpar = cant % 2;

  const calcMedian = parOrImpar
    ? tiempos[(cant - 1) / 2]
    : (tiempos[cant / 2 - 1] + tiempos[cant / 2]) / 2;
  let resulMedian = getTime(calcMedian);
  resulMedian = resulMedian.split(':').join('|');

  const resul = `Range: ${resulRange} Average: ${resulAverage} Median: ${resulMedian}`;
  return resul;
};

const getTime = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};

console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17'));
console.log(
  stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
);
