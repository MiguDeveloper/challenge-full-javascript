const xbonacci = (signature, n) => {
  const size = signature.length;
  if (size >= n) {
    return signature.slice(0, n);
  } else {
    signature.push(signature.reduce((acc, cur) => acc + cur, 0));
    for (let i = 0; i < n - size - 1; i++) {
      const newSize = signature.length;
      let sum = 0;
      for (let j = newSize - size; j <= newSize - 1; j++) {
        sum += signature[j];
      }
      signature.push(sum);
    }
  }

  return signature;
};

const xbonacciFast = (arr, n) => {
  const size = arr.length;
  for (let i = size; i < n; i++) {
    arr[i] = arr.slice(i - size).reduce((acc, cur) => acc + cur);
  }

  return arr.slice(0, n);
};

function Xbonacci(x, n) {
  let v = x.reduce((a, e) => a + e, 0);
  const ix = x.slice().concat(v),
    q = x.length;
  while (ix.length < n) {
    console.log(v);
    v += v - (ix[ix.length - q - 1] || 0);
    console.log(v);
    ix.push(v);
  }
  return ix.slice(0, n);
}

console.log(Xbonacci([0, 1], 10));

console.log(xbonacci([0, 1], 10));
//console.log(xbonacci([1, 1], 10));
//console.log(xbonacci([0, 0, 0, 0, 1], 10));
console.log(xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20));
/*console.log(xbonacci([17, 15, 18], 6));
console.log(xbonacci([10, 18, 0, 12, 11, 15], 6));
console.log(xbonacci([15, 15, 5, 20, 13, 14, 18, 6], 2));
console.log(
  xbonacci(
    [8, 9, 19, 9, 4, 20, 1, 18, 6, 6, 4, 2, 6, 0, 20, 17, 3, 10, 7, 5],
    1
  )
);
console.log(
  xbonacci(
    [8, 10, 19, 16, 20, 20, 20, 11, 16, 18, 9, 0, 11, 10, 11, 1, 10, 10, 1, 20],
    7
  )
);
*/

//console.log(xbonacciFast([0, 1], 10));
//console.log(xbonacciFast([1, 1], 10));
//console.log(xbonacciFast([0, 0, 0, 0, 1], 10));
console.log(xbonacciFast([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20));
