let talkingCalendar = function(date) {

  let months = [
    "empty",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  let suffix = [
    "empty",
    "st",
    "nd",
    "rd",
    "th",
  ]

  let year = "";
  let month = "";
  let day = "";
  let i = 0;

  // Handles year
  while(date.charAt(i) != "/") {
    year += date.charAt(i);
    i++;
  } i++;
  // Handles month
  while(date.charAt(i) != "/") {
    month += date.charAt(i);
    i++;
  } i++;

  while(i < date.length) {
    day += date.charAt(i);
    i++;
  } 
  
  day = Number(day);

  // add suffix
  if (day % 10 ===  1 && day != 11) day += suffix[1];
  else if (day % 10 === 2 && day != 12) day += suffix[2];
  else if (day % 10 === 3 && day != 13) day += suffix[3];
  else day += suffix[4];
   
  month = months[Number(month)];

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));




console.log(talkingCalendar("1987/08/1"));
console.log(talkingCalendar("1987/08/2"));
console.log(talkingCalendar("1987/08/3"));
console.log(talkingCalendar("1987/08/4"));
console.log(talkingCalendar("1987/08/5"));
console.log(talkingCalendar("1987/08/6"));
console.log(talkingCalendar("1987/08/7"));
console.log(talkingCalendar("1987/08/8"));
console.log(talkingCalendar("1987/08/9"));
console.log(talkingCalendar("1987/08/10"));
console.log(talkingCalendar("1987/08/11"));
console.log(talkingCalendar("1987/08/12"));
console.log(talkingCalendar("1987/08/13"));
console.log(talkingCalendar("1987/08/14"));
console.log(talkingCalendar("1987/08/15"));
console.log(talkingCalendar("1987/08/16"));
console.log(talkingCalendar("1987/08/17"));
console.log(talkingCalendar("1987/08/18"));
console.log(talkingCalendar("1987/08/19"));
console.log(talkingCalendar("1987/08/20"));
console.log(talkingCalendar("1987/08/21"));
console.log(talkingCalendar("1987/08/22"));
console.log(talkingCalendar("1987/08/23"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/08/25"));
console.log(talkingCalendar("1987/08/26"));
console.log(talkingCalendar("1987/08/27"));
console.log(talkingCalendar("1987/08/28"));
console.log(talkingCalendar("1987/08/29"));
console.log(talkingCalendar("1987/08/30"));
console.log(talkingCalendar("1987/08/31"));



