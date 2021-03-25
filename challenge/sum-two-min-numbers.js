const sumTwoSmallestNumbers = (numbers) => {
  [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
};

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

/* Suma de positivos en un array */
const sumOfPositive = (numbers) => {
  return numbers
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0);
};

console.log(sumOfPositive([-1, -4, -7, -12]));
