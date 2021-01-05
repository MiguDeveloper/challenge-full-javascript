const list = (names) => {
  const sizeNames = names.length;
  let mensaje = '';
  switch (sizeNames) {
    case 0:
      break;
    case 1:
      mensaje = names[0].name;
      break;
    case 2:
      mensaje = names[0].name + ' & ' + names[1].name;
      break;
    default:
      names.filter((name, idx) => {
        if (idx < names.length - 2) {
          mensaje += name.name + ', ';
        } else {
          idx === names.length - 2
            ? (mensaje += name.name)
            : (mensaje += ` & ${name.name}`);
        }
      });
      break;
  }
  return mensaje;
};

console.log(list([]));
console.log(list([{ name: 'Bart' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
  ])
);

const listFast = (names) => {
  return names.reduce((acc, cur, idx, array) => {
    if (idx === 0) {
      acc = cur.name;
    } else if (array.length === idx + 1) {
      acc += ` & ${cur.name}`;
    } else {
      acc += `, ${cur.name}`;
    }
    return acc;
  }, '');
};

console.log(listFast([]));
console.log(listFast([{ name: 'Bart' }]));
console.log(listFast([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(listFast([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(
  listFast([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
    { name: 'Julio' },
    { name: 'Mario' },
  ])
);
