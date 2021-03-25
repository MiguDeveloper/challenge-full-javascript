const alphabetPosition = (text) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return [...text.toLowerCase()]
    .filter((item) => abc.includes(item))
    .map((word) => abc.indexOf(word) + 1)
    .join(' ');
};

console.log(alphabetPosition('abc'));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
