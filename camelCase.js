let camelCase = function(input) {
  // loop thru string (charAt) check if while space
  // remove whitespace and captialize the following letter
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) != " ") {
      if (input.charAt(i - 1) === " ") {
        answer.push(input.charAt(i).toUpperCase());
      } else {
        answer.push(input.charAt(i));
      }
    }
  } return answer.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
