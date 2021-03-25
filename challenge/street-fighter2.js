const streetFighterSelection = (fighters, position, moves) => {
  let x = position[0],
    y = position[1],
    arr = [];
  moves.forEach((move) => {
    let tempX = x;
    let tempY = y;

    switch (move) {
      case 'up':
        tempY--;
        tempY < 0 ? (y = 0) : y--;
        break;
      case 'down':
        tempY++;
        tempY > 1 ? (y = 1) : y++;
        break;
      case 'left':
        tempX--;
        tempX < 0 ? (x = fighters[0].length - 1) : x--;
        break;
      case 'right':
        tempX++;
        tempX > fighters[0].length - 1 ? (x = 0) : x++;
        break;
      default:
        break;
    }
    arr.push(fighters[y][x]);
  });
  return arr;
};

const streetFighterSelectionFast = (fighters, position, moves) => {
  let x = position[0],
    y = position[1],
    arr = [];
  moves.forEach((move) => {
    switch (move) {
      case 'up':
        y = 0;
        break;
      case 'down':
        y = 1;
        break;
      case 'left':
        x <= 0 ? (x = fighters[0].length - 1) : x--;
        break;
      case 'right':
        x >= fighters[0].length - 1 ? (x = 0) : x++;
        break;
      default:
        break;
    }
    arr.push(fighters[y][x]);
  });
  return arr;
};

fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

moves = ['up', 'left', 'right', 'left', 'left'];
moves2 = ['up'];

console.log(streetFighterSelection(fighters, [0, 0], moves));
console.log(streetFighterSelectionFast(fighters, [0, 0], moves));
console.log(streetFighterSelection(fighters, [0, 0], moves2));
console.log(streetFighterSelectionFast(fighters, [0, 0], moves2));
