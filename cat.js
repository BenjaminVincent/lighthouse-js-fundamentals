const concat = function (a1, a2) {
  let a3 = [];
  for (let i = 0; i < a1.length; i++) {
    a3.push(a1[i]);
  }
  for (let j = 0; j < a2.length; j++) {
    a3.push(a2[j]);
  }
  return a3;
}

console.log(concat([1, 2, 3], [4, 5, 6]));