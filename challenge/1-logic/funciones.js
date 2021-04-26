const toAccounting = (n) => {
  if (n == null) {
    return;
  }
  if (isNaN(n)) {
    return 'ingrese un numero';
  }
  return n < 0 ? `(${Math.abs(n)})` : n.toString();
};

console.log(toAccounting(undefined));
console.log(toAccounting(null));
console.log(toAccounting('dwdwd'));
console.log(toAccounting(0));
console.log(toAccounting(10));
console.log(toAccounting(-5));

const testItems = [
  { price: 15, quan: 2 },
  { price: 20, quan: 1 },
  { price: 5, quan: 4 },
];

const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

const calculateTotal = (
  items,
  { shipping = SHIPPING_DEFAULT, discount = 0 } = {}
) => {
  if (items == null || items.length == 0) {
    return 0;
  }
  let total = items.reduce((total, item) => total + item.price * item.quan, 0);

  const discountRate = 1 - discount;

  return total * discountRate * TAX_RATE + shipping;
};

console.log(calculateTotal());
console.log(calculateTotal(testItems));
console.log(calculateTotal(undefined, {}));
console.log(calculateTotal([], {}));
console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { shipping: 0 }));
console.log(calculateTotal(testItems, { discount: 0.75 }));
console.log(calculateTotal(testItems, { ship: 12 }));
