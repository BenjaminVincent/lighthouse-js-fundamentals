const newLocal = function (a, b) {
  let lastSeen = -1;
  if (a.length === 0)
    return -1;
  else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b)
        lastSeen = i;
    }
    return lastSeen;
  }
};
const lastIndexOf = newLocal



//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
//console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);