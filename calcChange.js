let calculateChange = function(total, cash) {
  // Your code here
  let result = cash - total;
  //console.log(result);
  console.log(result % 1000);

  return result;
};

console.log(calculateChange(1787, 2000));
//console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));