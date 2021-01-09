const revrot = (str, sz) => {
  if (str.length < sz || str === '' || sz <= 0) {
    return '';
  } else {
    let chunks = [];
    for (let i = 0; i < str.length; i += sz) {
      const item = [...str].slice(i, i + sz).join('');
      if (item.length === sz) {
        chunks.push(item);
      }
    }

    const resume = [...chunks]
      .map((item) => {
        const sumCubos = [...item].reduce((acc, cur) => acc * 1 + cur ** 3, 0);
        if (sumCubos % 2 === 0) {
          return [...item].reverse().join('');
        }
        return item.slice(1, sz).concat([...item][0]);
      })
      .join('');
    return resume;
  }
};

console.log(revrot('123456987653', 6));
