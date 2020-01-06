let repeatNumbers = function(data) {
  // num and times will be data[i][0], data[i][1]
  // while times > 0 keep adding num to string
  let num;
  let times;
  let answer = "";
  for (let i = 0; i < data.length; i++) {
    num = data[i][0];
    times = data[i][1];
    while (times > 0) {
      answer += num;
      times --;
    }
    if (i < data.length -1 ) answer += ', ';
  } return answer;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));