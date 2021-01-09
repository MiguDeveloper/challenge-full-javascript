const breakCamelCase = (string) => {
  const minus = string.toLowerCase();
  const msg = [...string].map((item, idx) =>
    item !== minus.slice(idx, idx + 1) ? ' '.concat(item) : item
  );
  return msg.join('');
};

console.log(breakCamelCase('camelCase '));
