const comp = (array1, array2) => {
  if (
    typeof array1 === 'undefined' ||
    typeof array2 === 'undefined' ||
    array1 === null ||
    array2 === null
  ) {
    return false;
  } else if (
    (array1.length === 0 && array2.length > 0) ||
    (array1.length > 0 && array2.length === 0) ||
    (array1.length > 0 && array2 === null)
  ) {
    return false;
  } else {
    if (array1.length === 0 && array2.length === 0) {
      return true;
    }
    return array2.every((item) => array1.includes(item ** 0.5));
  }
};

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const c = [88];
const d = [7745];

a1 = [2, 2, 3];
a2 = [4, 9, 9];
console.log(comp(a1, a2));

/*Test.assertEquals(comp(a1, a2), false)
a1 = [2, 2, 3]
a2 = [4, 4, 9]
Test.assertEquals(comp(a1, a2), true)
a1 = [4, 4]
a2 = [1, 31]
Test.assertEquals(comp(a1, a2), false)
a1 = [3, 4]
a2 = [0, 25]
Test.assertEquals(comp(a1, a2), false)
a1 = null
a2 = []
Test.assertEquals(comp(a1, a2), false)*/
