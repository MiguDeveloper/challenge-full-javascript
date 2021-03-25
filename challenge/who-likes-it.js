const likes = (names) => {
  const sizeLikes = names.length;
  const [uno, dos, tres, ...otros] = names;
  let mensaje = '';
  switch (sizeLikes) {
    case 0:
      mensaje = `no one likes this`;
      break;
    case 1:
      mensaje = `${uno} likes this`;
      break;
    case 2:
      mensaje = `${uno} and ${dos} like this`;
      break;
    case 3:
      mensaje = `${uno}, ${dos} and ${tres} like this`;
      break;
    default:
      mensaje = `${uno}, ${dos} and ${otros.length + 1} others like this`;
      break;
  }
  return mensaje;
};
console.log(likes([]));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Mark', 'Max']));

const likesFast = (names) => {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(names.length, 4)];
};

console.log(likesFast([]));
console.log(likesFast(['Alex', 'Jacob', 'Mark', 'Max', 'Mark', 'Max']));
