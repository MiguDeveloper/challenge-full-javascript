const stockList = (listOfArt, listOfCat) => {
  let obj = {};
  let resume = [];
  if (listOfArt.length === 0) {
    return '';
  }
  listOfCat.forEach((element) => {
    obj[element] = 0;
  });
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      obj[key] = listOfArt
        .filter((item) => item[0] === key.toString())
        .map((codigoConCant) => {
          const arrCodCant = codigoConCant.split(' ');
          return arrCodCant[1];
        })
        .reduce((acc, cur) => acc * 1 + cur * 1, 0);
      resume.push(`(${key} : ${obj[key]})`);
    }
  }

  return resume.join(' - ');
};

console.log(
  stockList(
    ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
    ['A', 'B']
  )
);

b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
c = ['A', 'B', 'C', 'W'];

console.log(stockList(b, c));
console.log(stockList([], c));

const stockListFast = (listOfArt, listOfCat) => {
  let obj = {};
  if (!listOfArt.length) return '';
  listOfArt.forEach((item) => {
    const key = item[0];
    obj[key] = (obj[key] | 0) + +item.split(' ')[1];
  });

  return listOfCat
    .map((item) => {
      const valor = obj[item] | 0;
      return `(${item} : ${valor})`;
    })
    .join(' - ');
};

console.log(stockListFast(b, c));
// clever but muchas vueltas :)
const stockListReduce = (listOfArt, listOfCat) => {
  return listOfCat
    .map((cat) => {
      const cant = listOfArt.reduce(
        (acc, cur) => acc + (cur.charAt() === cat ? +cur.split(' ')[1] : 0),
        0
      );
      return `(${cat} : ${cant})`;
    })
    .join(' - ');
};
console.log(stockListReduce(b, c));
