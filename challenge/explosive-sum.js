const sum = (num) => {
  const numeros = [1, 2];
  let isPrimo = 1;

  for (let i = 3; numeros.length <= num; i++) {
    isPrimo = 1;
    for (let j = 2; j <= i - 1; j++) {
      if (i % j === 0) {
        isPrimo = 0;
        break;
      }
    }
    if (isPrimo) {
      numeros.push(i);
    }
  }

  return numeros[num - 1];
};

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(10));
