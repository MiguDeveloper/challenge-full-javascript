const gap = (g, m, n) => {
  if (g < 2 || m < 2 || n < m || m === n) {
    return null;
  }
  let lastPrime = 0,
    result = [];
  let a = 0,
    b = 0;

  for (let i = m; i <= n; i++) {
    if (getDivisors(i).length === 0) {
      if (lastPrime && i - lastPrime === g) {
        a = lastPrime;
        b = i;
        result.push(a, b);
        break;
      } else {
        lastPrime = i;
      }
    }
  }
  return a === 0 ? null : result;
};

const getDivisors = (n) => {
  const divisores = [];
  let i = 2;
  while (i < n) {
    if (divisores.length > 0) {
      break;
    }
    if (n % i === 0) {
      n /= i;
      if (!divisores.includes(i)) {
        divisores.push(i);
      }
    } else {
      i++;
    }
  }
  return divisores;
};

function gap2(g, m, n) {
  var lastPrime = 0;
  var isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };

  for (var i = m; i <= n; i++)
    if (isPrime(i)) {
      if (lastPrime && i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }

  return null;
}

console.log(gap(2, 100, 110));
console.log(gap(4, 100, 110));
console.log(gap(6, 100, 110));
console.log(gap(8, 300, 400));
console.log(gap(10, 300, 400));
/*
console.log(gap2(12, 1000000, 1100000));
console.log(gap2(19, 1000000, 1100000));
console.log(gap2(120, 1000000, 1100000));
console.log(gap2(300, 1000000, 1100000));
console.log(gap2(770, 1000000, 1100000));
console.log(gap2(3, 3, 4));*/
