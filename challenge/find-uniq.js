const findUniq = (arr) => {
  const items = [...new Set(arr)];
  let cont0 = 0;
  let cont1 = 0;
  arr.forEach((element) => {
    if (element === items[0]) {
      cont0++;
    }
    if (element === items[1]) {
      cont1++;
    }
    if (cont0 > 2 || cont1 > 2) {
      return;
    }
  });

  return cont0 === 1 ? items[0] : items[1];
};

console.log(findUniq([3, 10, 3, 3, 3]));

const findUniqFast = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr.pop() : arr[0];
};

console.log(findUniqFast([3, 10, 3, 3, 3]));
