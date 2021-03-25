// duplicateCount("aabbcde"), 2
// duplicateCount("Indivisibility"), 1

const duplicateCount = (text) => {
  const obj = {};
  let count = 0;

  [...text.toLowerCase()].forEach((item) => {
    obj[item] = (obj[item] | 0) + 1;
  });

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] > 1) {
        count++;
      }
    }
  }
  return count;
};

const duplicateCountClever = (text) => {
  return [...text.toLowerCase()].filter((item, idx, array) => {
    return array.indexOf(item) !== idx && array.lastIndexOf(item) === idx;
  }).length;
};

console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCountClever('Indivisibilities'));
