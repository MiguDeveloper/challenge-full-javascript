// count("aa"), { a: 2 }
// count("aabb"), { a: 2, b: 2 }
const count = (string) => {
  const obj = {};

  [...string].forEach((char) => {
    obj[char] = (obj[char] | 0) + 1;
  });

  return obj;
};

console.log(count(''));
