const multiplicationTable = (size) => {
  const arrI = [];
  for (let i = 1; i <= size; i++) {
    const arrJ = [];
    for (let j = 1; j <= size; j++) {
      if (i === 1) {
        arrJ.push(j);
      } else {
        arrJ.push(i * j);
      }
    }
    arrI.push(arrJ);
  }

  return arrI;
};

const multiplicationTableDimensional = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
};

console.log(multiplicationTable(3));
console.log(multiplicationTableDimensional(3));
