const detectPangram = (sentence) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const letters = [...new Set(sentence.toLowerCase())];
  let cont = 0;
  letters.forEach((letter) => {
    if (abc.split('').includes(letter)) {
      cont++;
    }
  });
  return cont === 26 ? true : false;
};

console.log(detectPangram('AbCdEfGhIjKlM zYxWvUtSrQpOn'));

const detectPangramFast = (sentence) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  return abc
    .split('')
    .every((letter) => sentence.toLowerCase().indexof(letter) !== -1);
};
console.log(detectPangram('AbCdEfGhIjKlM zYxWvUtSrQpOn'));
