const properFractions = (n) => {
  const arr = [];
  if (n === 1) {
    return 0;
  }
  for (let i = 1; i < n; i++) {
    const mcd = gcd(i, n);
    if (mcd === 1) {
      arr.push(i);
    }
  }

  return arr.length;
};

const getMcd = (arr) => {
  [num1, num2] = [...arr];

  let mcd = 1,
    a = Math.max(num1, num2),
    b = Math.min(num1, num2);

  while (b) {
    mcd = b;
    b = a % b;
    a = mcd;
  }
  return mcd;
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

function properFractions2(n) {
  if (n == 1) return 0;
  var facts = getDivisors(n);

  var r = n;
  for (var f of facts) {
    r -= Math.floor(r / f);
  }

  return r;
}

function getDivisors(a) {
  var arr = [];
  var p = 2;
  while (a > 1 && p <= a) {
    if (a % p == 0) {
      a /= p;
      if (!arr.includes(p)) {
        arr.push(p);
      }
    } else {
      p++;
    }
  }
  return arr;
}

function properFractions3(n) {
  if (n === 1) return 0;
  let a = n,
    i = 2,
    primeFactors = [];

  while (a > 1) {
    if (a % i === 0) {
      a = a / i;
      if (primeFactors.indexOf(i) === -1) primeFactors.push(i);
    } else i++;
  }

  return Math.round(
    primeFactors
      .map((a) => 1 - 1 / a)
      .reduce((a, v) => {
        return a * v;
      }, 1) * n
  );
}

const obtenerDivisores = (a) => {
  let divisores = [],
    i = 2;
  while (a > 1) {
    if (a % i === 0) {
      a /= i;
      if (!divisores.includes(i)) {
        divisores.push(i);
      }
    } else {
      i++;
    }
  }

  return divisores;
};

console.log(obtenerDivisores(123456789));

console.log(properFractions3(1));
console.log(properFractions3(2));
console.log(properFractions3(5));
console.log(properFractions3(15));
console.log(properFractions3(25));
console.log(properFractions3(6637344));
console.log(properFractions3(9999999));
console.log(properFractions3(500000003));
console.log(properFractions3(1532420));
console.log(properFractions3(123456789));
