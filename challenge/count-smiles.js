const countSmileys = (arr) => {
  const smiles = [
    ':)',
    ':D',
    ':-D',
    ':-)',
    ':~D',
    ':~)',
    ';)',
    ';D',
    ';-D',
    ';-)',
    ';~D',
    ';~)',
  ];

  let acc = 0;
  arr.forEach((item) => {
    if (smiles.includes(item)) {
      acc++;
    }
  });
  return acc;
};

console.log(countSmileys([]));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

const countSmileysFast = (arr) => {
  const smiles = [
    ':)',
    ':D',
    ':-D',
    ':-)',
    ':~D',
    ':~)',
    ';)',
    ';D',
    ';-D',
    ';-)',
    ';~D',
    ';~)',
  ];

  return arr.filter((item) => smiles.includes(item)).length;
};

console.log(countSmileysFast([]));
console.log(countSmileysFast([':D', ':~)', ';~D', ':)']));
console.log(countSmileysFast([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileysFast([';]', ':[', ';*', ':$', ';-D']));
