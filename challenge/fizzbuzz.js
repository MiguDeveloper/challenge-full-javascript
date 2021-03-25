const fizzbuzz = (item) => {
  const divisible = (dividendo, divisor) => dividendo % divisor === 0;

  if (typeof item !== 'number') {
    return 0;
  }
  if (item === 0) {
    return 0;
  }
  if (divisible(item, 15)) {
    return 'fizzbuzz';
  }
  if (divisible(item, 3)) {
    return 'fizz';
  }
  if (divisible(item, 5)) {
    return 'buzz';
  }
  return item;
};

const printNums = (num) => {
  for (let index = 0; index < num; index++) {
    console.log(`${index}: ${fizzbuzz(index)}`);
  }
};

module.exports = { fizzbuzz };
