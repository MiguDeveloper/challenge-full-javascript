const sumDigPow = (a, b) => {
  const numbers = [];
  for (let i = a; i <= b; i++) {
    numbers.push(i);
  }
  return numbers.filter((number) => {
    let sum = 0;
    number
      .toString()
      .split('')
      .forEach((item, idx) => {
        sum += Math.pow(item, idx + 1);
      });

    return number === sum;
  });
};
console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));

const sumDigPowFast = (a, b) => {
  let resume = [];
  for (let i = a; i <= b; i++) {
    const sum = i
      .toString()
      .split('')
      .reduce((acc, curr, idx) => acc * 1 + curr ** (idx + 1), 0);
    if (sum === i) {
      resume.push(i);
    }
  }
  return resume;
};

console.log(sumDigPowFast(1, 10));
console.log(sumDigPowFast(1, 100));
console.log(sumDigPowFast(10, 100));
console.log(sumDigPowFast(90, 100));
console.log(sumDigPowFast(90, 150));
console.log(sumDigPowFast(50, 150));
console.log(sumDigPowFast(10, 150));
console.log(sumDigPowFast(987650, 987654));
