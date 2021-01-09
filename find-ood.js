const findOdd = (iterable) => {
  const items = [...new Set(iterable)];
  let cont = [];
  for (let i = 0; i < items.length; i++) {
    cont[i] = iterable.filter((item) => items[i] === item).length;
  }
  const elemento = cont.find((item, idx) => item % 2 !== 0);
  const idx = cont.findIndex((item) => item === elemento);
  return items[idx];
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

const findOddObj = (arr) => {
  let obj = {};
  arr.forEach((element) => {
    obj[element] ? obj[element]++ : (obj[element] = 1);
  });

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (element % 2 !== 0) {
        return key;
      }
    }
  }
};

console.log(
  findOddObj([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
);
console.log(findOddObj([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOddObj([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOddObj([10]));
console.log(findOddObj([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOddObj([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
