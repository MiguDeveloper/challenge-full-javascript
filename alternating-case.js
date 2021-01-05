/*
 * Generar caracteres alternados, e.g.: Hello World => hELLO wORLD, HeLLo WoRLD => hEllO wOrld
 */

const toAltenatingCase = (chart) => {
  return chart.split('').map(convertChart).join('');
};

const convertChart = (letter) => {
  return letter.toUpperCase() === letter
    ? letter.toLowerCase()
    : letter.toUpperCase();
};

console.log(toAltenatingCase('Sri'));
