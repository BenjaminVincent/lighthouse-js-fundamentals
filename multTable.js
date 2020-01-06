const multiplicationTable = function(maxValue) {
  let table = new Array(maxValue).fill(1).map(()=>new Array(maxValue).fill(1));;
  table[0][0] = 1;


  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      // intialize left/top boarders
     if (i === 0) {
        table[0][j] = j+1;
      } else if (j === 0) {
        table[i][0] = i+1;
      } else {
        table[i][j] = table[0][j] * table[i][0];
      }
    }
  } return table;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));