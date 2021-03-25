const getOrder = (input) => {
  const platos = [
    'Burger',
    'Fries',
    'Chicken',
    'Pizza',
    'Sandwich',
    'Onionrings',
    'Milkshake',
    'Coke',
  ];

  let acumulador = [];
  const pedidos = [];

  [...input].forEach((letter) => {
    acumulador.push(letter);
    const cadena = acumulador
      .map((item, i) => (i === 0 ? item.toUpperCase() : item))
      .join('');

    if (platos.includes(cadena)) {
      pedidos.push(cadena);
      acumulador = [];
    }
  });

  const result = [];
  platos.forEach((plato) => {
    result.push(...pedidos.filter((pedido) => pedido === plato));
  });
  return result.join(' ');
};

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
);
