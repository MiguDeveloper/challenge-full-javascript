const twoToOne = (s1, s2) => {
  return [...s1, ...s2]
    .sort()
    .filter((letter, i, array) => letter !== array[i - 1])
    .join('');
};

console.log(twoToOne('loopingisfunbutdangerous', 'lessdangerousthancoding'));

/* mas optimo */

const twoToOneFast = (s1, s2) => {
  return [...new Set(s1 + s2)].sort().join('');
};

console.log(
  twoToOneFast('loopingisfunbutdangerous', 'lessdangerousthancoding')
);
