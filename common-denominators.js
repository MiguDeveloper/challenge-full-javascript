const convertFrac = (lst) => {
  const lstDeno = lst.map((item) => item[1]);
  [item1, item2, ...otros] = [...lstDeno];

  let mcm = euclides([item1, item2]);
  if (otros.length) {
    let result = euclides([mcm, otros[0]]);
    for (let i = 1; i < otros.length; i++) {
      result = euclides([result, otros[i]]);
    }
    mcm = result;
  }
  return lst
    .map((item) => {
      const q = mcm / item[1];
      return `(${item[0] * q},${mcm})`;
    })
    .join('');
};

const euclides = (arr) => {
  [num1, num2] = [...arr];
  let mcd;
  a = Math.max(num1, num2);
  b = Math.min(num1, num2);

  while (b) {
    mcd = b;
    b = a % b;
    a = mcd;
  }
  return Math.floor((num1 * num2) / mcd);
};

console.log(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);
console.log(
  convertFrac([
    [2, 4],
    [2, 6],
    [2, 8],
  ])
);
console.log(
  convertFrac([
    [1, 4],
    [1, 2],
  ])
);

/*
num1 =int(input())
num2 =int(input())

A = max(num1, num2)
B = min(num1, num2)

while B:
    mcd = B
    B = A % B
    A = mcd
mcm =  (num1 * num2) // mcd
*/
