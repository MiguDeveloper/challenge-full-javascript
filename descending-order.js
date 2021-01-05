const descendingOrder = (number) => {
  const digitsString = number.toString();
  let digits = digitsString
    .split('')
    .map(convertNumber)
    .sort((a, b) => b - a)
    .join('');
  return digits * 1;
};

const convertNumber = (digit) => {
  return digit * 1;
};
const num = descendingOrder(123456789);
console.log(num);

const descendingOrder2 = (number) => {
  return parseInt(
    number
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
};

const num2 = descendingOrder2(123456789);
console.log(num2);

const makeNegative = (number) => (number <= 0 ? number : -number);
const makeNegative2 = (number) => -Math.abs(number);

console.log(makeNegative(0));
console.log(makeNegative2(0));
