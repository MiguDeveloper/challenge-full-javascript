// convertir a mayuscula
const uppercase = 'Dado este texto, conviertalo en mayuscula';
const phrase =
  'Dado este texto, convierta la primera letra de cada palabra a mayuscula';

console.log(uppercase.toUpperCase());

const words = phrase.split(' ');
const wordsCapitalize = words.map((word) =>
  word[0].toUpperCase().concat(word.slice(1))
);

const phraseCapitalize = wordsCapitalize.join(' ');
console.log(phraseCapitalize);
