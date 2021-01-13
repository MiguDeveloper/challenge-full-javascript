// Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string')
// Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');

const kebabize = (str) => {
  const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  );

  const copyStr = [...str].filter((word) => letras.includes(word)).join('');

  const strMinus = copyStr.toLowerCase().split('');

  const kebabStr = strMinus
    .map((word, idx) =>
      word !== copyStr[idx] && idx !== 0 ? '-'.concat(word) : word
    )
    .join('');

  return kebabStr;
};

console.log(kebabize('camelsHaveThreeHumps'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('-Rpyqq'));
