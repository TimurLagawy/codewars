/*task: Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.*/
function capitalizeWord(word) {
  let a = word.charAt(0).toUpperCase();

  let Word = [a, word.substr(1)].join("");

  return Word;
}
/*The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.*/
/*function century(year) {
  if(year > 0 && year < 101){
    return 1;
  } else if(year > 100 && year < 201){
    return 2;
  } else if(year > 200 && year < 301){
    return 3;
  } else if(year > 300 && year < 401){
    return 4;
  } else if(year > 400 && year < 501){
    return 5;
  } else if(year > 500 && year < 601){
    return 6;
  } else if(year > 600 && year < 701){
    return 7;
  } else if(year > 700 && year < 801){
    return 8;
  } else if(year > 800 && year < 901){
    return 9;
  } else if(year > 900 && year < 1001){
    return 10;
  } else if(year > 1000 && year < 1101){
    return 11;
  } else if(year > 1100 && year < 1201){
    return 12;
  } else if(year > 1200 && year < 1301){
    return 13;
  } else if(year > 1300 && year < 1401){
    return 14;
  } else if(year > 1400 && year < 1501){
    return 15;
  } else if(year > 1500 && year < 1601){
    return 16;
  } else if(year > 1600 && year < 1701){
    return 17;
  }  else if(year > 1700 && year < 1801){
    return 18;
  }else if(year > 1800 && year < 1901){
    return 19;
  } else if(year > 1900 && year < 2001){
    return 20;
  }
}*/ /*function century(year) {
  if(year > 0 && year < 101){
    return 1;
  } 
  let intStr = String(year);
  if(year.lenght == 3){
    if(year.substr(1,2) == "00"){
    return Number(year.charAt(0));
    } else {
      return Number(year.charAt(0)) + 1;
    } }
  else if(year.lenght == 4){
    if(year.substr(2,3) == "00"){
    return Number(year.substr(0,1).join(""));
    } else {
      return Number(year.substr(0,1).joim("")) + 1;
    }}
   */
function century(year) {
  if (year % 100 === 0) {
    // Если год делится на 100 без остатка, вернуть год/100
    return year / 100;
  } else {
    // В противном случае, вернуть округленное вверх значение года/100
    return Math.ceil(year / 100);
  }
}
/*We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?*/
function numberToString(num) {
  let a = String(num);
  return a;
  // Return a string of the number here!
}