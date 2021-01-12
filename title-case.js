const titleCase = (title, minorWords) => {
  if (title.length === 0) {
    return '';
  }
  const arrMinorWords = minorWords ? minorWords.toLowerCase().split(' ') : '';

  const arrWords = title
    .toLowerCase()
    .split(' ')
    .map((word, idx) => {
      if (minorWords === undefined || minorWords.length === 0) {
        return word[0].toUpperCase().concat(word.slice(1));
      }
      return arrMinorWords.includes(word)
        ? idx === 0
          ? word[0].toUpperCase().concat(word.slice(1))
          : word
        : word[0].toUpperCase().concat(word.slice(1));
    });

  return arrWords.join(' ');
};

const titleCaseFast = (title, minorWords) => {
  const arrMinorWords =
    typeof minorWords !== 'undefined'
      ? minorWords.toLowerCase().split(' ')
      : [];

  return title
    .toLowerCase()
    .split(' ')
    .map((word, idx) => {
      if (word !== '' && (arrMinorWords.indexOf(word) === -1 || idx === 0)) {
        word = word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(' ');
};

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCaseFast('a clash of KINGS', 'a an the of'));
console.log(titleCase('a bc', 'BC'));
console.log(titleCaseFast('a bc', 'BC'));
console.log(titleCase(''));
console.log(titleCase(''));
