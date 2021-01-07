const alphabetPosition = (text) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return [...text.toLowerCase()]
    .map((word) => {
      const idx = abc.findIndex((item) => item === word);
      if (idx >= 0) {
        return idx + 1;
      }
    })
    .join('');
};

console.log(alphabetPosition('abc'));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
