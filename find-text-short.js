const findShort = (s) => {
  return s
    .split(' ')
    .map((word) => word.length)
    .sort((a, b) => a - b)[0];
};

console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);

const findShortFast = (s) => {
  return Math.min(...s.split(' ').map((word) => word.length));
};

console.log(
  findShortFast(
    'turns out random test cases are easier than writing out basic ones'
  )
);
