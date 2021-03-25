const invoice = (peopleInLine) => {
  let wallet = [0, 0];
  return peopleInLine.reduce((acc, cur, idx) => {
    if (idx === 0) {
      if (cur === 25) {
        acc += cur;
        wallet[0] = 1;
      } else {
        return 'NO';
      }
    } else {
      if (cur === 25) {
        acc += 25;
        wallet[0] += 1;
      } else {
        if (cur === 50) {
          if (wallet[0] >= 1) {
            wallet[0] -= 1;
            wallet[1] += 1;
            acc += 25;
            //console.log(wallet[0], wallet[1]);
          } else {
            return 'NO';
          }
        } else {
          //console.log(acc, cur);
          if (acc >= cur - 25) {
            if (wallet[1] >= 1) {
              wallet[1] -= 1;
              if (wallet[0] >= 1) {
                wallet[0] -= 1;
              } else {
                return 'NO';
              }
            } else {
              if (wallet[0] >= 3) {
                wallet[0] -= 3;
              } else {
                return 'NO';
              }
            }
            acc += 25;
          } else {
            return 'NO';
          }
        }
      }
    }
    return acc;
  }, 0) > 0
    ? 'YES'
    : 'NO';
};

console.log(invoice([25, 25, 50, 25, 25, 100, 50]));

function tickets(peopleInLine) {
  var bills = [0, 0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++;
        break;
      case 50:
        bills[0]--;
        bills[1]++;
        break;
      case 100:
        bills[1] ? bills[1]-- : (bills[0] -= 2);
        bills[0]--;
        break;
    }

    if (bills[0] < 0) {
      return 'NO';
    }
  }

  return 'YES';
}

console.log(tickets([25, 25, 50, 25, 25, 100, 50]));

/* Mejorado */
const taquilla = (peopleInLine) => {
  let [b25, b50] = [0, 0];
  peopleInLine.forEach((pay) => {
    switch (pay) {
      case 25:
        b25++;
        break;
      case 50:
        b25--;
        b50++;
        break;
      case 100:
        b50 ? b50-- : b25 - 2;
        b25--;
        break;
    }
    if (b25 < 0) {
      return 'NO';
    }
  });
  return 'YES';
};

console.log(taquilla([25, 25, 50, 25, 25, 100, 50]));
