const squareSum = (numbers) => {
  return numbers
    .map((number) => Math.pow(number, 2))
    .reduce((acc, cur) => acc + cur, 0);
};

console.log(squareSum([1, 2, 2]));
