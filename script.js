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
} /*Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.*/
const stringToNumber = function (str) {
  return Number(str);
}; /*Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
/*to_binary(5)  /* should return 101 */
/*to_binary(11) /* should return 1011 */
function toBinary(n) {
  let binary = "";
  while (n > 0) {
    const remainder = n % 2;
    binary = remainder + binary;
    n = Math.floor(n / 2);
  }

  return Number(binary);
} /*Create a function that takes an integer as an argument and returns for even numbers or for odd numbers 
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}*/
function evenOrOdd(number) {
  if (number % 2 === 1) {
    return "Odd";
  } else if (number % 2 === 0) {
    return "Even";
  } else if (number % 2 === -1) {
    return "Odd";
  }
}
/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/
function fakeBin(x) {
  let xStr = x.toString();
  let result = "";

  for (let i = 0; i < xStr.length; i++) {
    if (parseInt(xStr[i]) < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;
}
/*Determine the area of the largest square that can fit inside a circle with radius r.*/
function areaLargestSquare(r) {
  let s = r * r * 2;
  return s; //code here
}
/*Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.*/
function digits(n) {
  return n.toString().length;
}
/*Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34*/
function opposite(number) {
  return number * -1;
}
/*Perimeter sequence
The first three stages of a sequence are shown.

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?*/
function perimeterSequence(a, n) {
  return 4 * a * n;
}
/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/
function removeChar(str) {
  let newStr = "";
  for (let i = 1; i < str.length - 1; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
}
