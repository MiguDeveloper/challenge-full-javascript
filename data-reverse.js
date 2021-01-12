const dataReverseFast = (data) => {
  const array = [];
  const byte = Math.floor(data.length / 8);
  for (let i = 0; i < byte; i++) {
    array.push(data.slice(i * 8, 8 * (i + 1)));
  }
  rpta = array.reverse().flat();
  return rpta;
};

const dataReverse = (data) => {
  const array = [],
    arrayRev = [];
  const byte = Math.floor(data.length / 8);
  for (let i = 0; i < byte; i++) {
    array.push(data.slice(i * 8, 8 * (i + 1)));
  }

  for (let i = array.length - 1; i >= 0; i--) {
    arrayRev.push(array[i]);
  }
  return arrayRev.reduce((acc, cur) => acc.concat(cur), []);
};

const dataReverseBest = (data) => {
  const arr = [];
  for (let i = 0; i <= data.length; i += 8) {
    arr.unshift(...data.slice(i, i + 8));
  }
  return arr;
};

const a = '11111111000000000000111110101010';
console.log(dataReverseBest(a.split('')));
