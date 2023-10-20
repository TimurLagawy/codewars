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
/*Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"*/
function noSpace(x) {
  let newX = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] == " ") {
    } else {
      newX += x[i];
    }
  }
  return newX;
}
/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/
function solution(str, ending) {
  let j = "";
  for (i = str.length - ending.length; i < str.length; i++) {
    j += str[i];
  }
  if (ending == j) {
    return true;
  } else {
    return false;
  }
}
/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/
function simpleMultiplication(number) {
  //return n * (n % 2 ? 9 : 8);
  if (number % 2 == 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"*/
//repeatStr = (n, s) => s.repeat(n)
function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}
/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0*/
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  else if (exam > 75 && projects >= 5) return 90;
  else if (exam > 50 && projects >= 2) return 75;
  else return 0;
}
/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One". function switchItUp(n){
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}*/
function switchItUp(n) {
  if (n == 1) {
    return "One";
  } else if (n == 2) {
    return "Two";
  } else if (n == 3) {
    return "Three";
  } else if (n == 4) {
    return "Four";
  } else if (n == 5) {
    return "Five";
  } else if (n == 6) {
    return "Six";
  } else if (n == 7) {
    return "Seven";
  } else if (n == 8) {
    return "Eight";
  } else if (n == 9) {
    return "Nine";
  } else {
    return "Zero";
  }
}
/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow. 
return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';*/
function updateLight(current) {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else if (current == "red") {
    return "green";
  }
}
/*You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle*/
function otherAngle(a, b) {
  return 180 - a - b;
}
/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}*/
function rentalCarCost(d) {
  if (d < 3) {
    return 40 * d;
  } else if (d < 7) {
    return 40 * d - 20;
  } else {
    return 40 * d - 50;
  }
}
/*Return the type of the sum of the two arguments*/
function typeOfSum(a, b) {
  return typeof (a + b);
}
/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump / mpg <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};
/*Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a 
 var ArrowFunc = function(arr) {
  return arr.map( x => String.fromCharCode(x) ).join(''); 
}*/
var ArrowFunc = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i]);
  }
  return str;
};
/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]*/
function mergeArrays(arr1, arr2) {
  const mergedArray = Array.from(new Set([...arr1, ...arr2])); // Merge the arrays and remove duplicates

  mergedArray.sort((a, b) => a - b); // Sort the merged array in ascending order

  return mergedArray;
}
/*For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.*/
function add(num1, num2) {
  let n1 = String(num1);
  let n2 = String(num2);

  if (n1.length < n2.length) {
    for (let i = 0; i < n2.length - n1.length; i++) {
      n1 = "0" + n1;
    }
  } else if (n2.length < n1.length) {
    for (let i = 0; i < n1.length - n2.length; i++) {
      n2 = "0" + n2;
    }
  } else {
  }

  let str = "";
  for (let i = 0; i < n1.length; i++) {
    str = str + (Number(n1[i]) + Number(n2[i]));
  }

  return parseInt(str);
}
/*Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
questions.forEach(x => x.usersAnswer = null);*/
function addAnswer() {
  for (let i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null;
  }
}
/*Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'. For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))*/

function colourAssociation(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let obj = {};
    obj[array[i][0]] = array[i][1];
    arr.push(obj);
  }
  return arr;
}
/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}
/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}
/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  let res = "Hello, ";
  res += firstName;
  res += " ";
  res += lastName;
  res += "!";
  return res;
}
/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const startIndex = value.indexOf("Hello, ") + "Hello, ".length;
  const endIndex = value.lastIndexOf("!");

  if (startIndex >= 0 && endIndex >= 0) {
    return value.substring(startIndex, endIndex);
  }
  return value.substring(startIndex, endIndex);
}
/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}
/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}
/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  let str = "";
  for (let i = 0; i < count; i += 1) {
    str += value;
  }
  return str;
}
/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  let res = "";
  for (let i = 0; i < str.indexOf(value); i += 1) {
    res += str[i];
  }
  let res1 = "";
  for (let j = str.indexOf(value) + value.length; j < str.length; j += 1) {
    res1 += str[j];
  }
  return res + res1;
}
/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  let res = "";
  for (let i = 1; i < str.length - 1; i += 1) {
    if (str[i] !== "<" && str[i] !== ">") {
      res += str[i];
    }
  }
  return res;
}
/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  let res = "";
  for (let i = 0; i < str.length; i += 1) {
    res += str[i].toUpperCase();
  }
  return res;
}
/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  const array = str.split(";");
  return array;
}
/*
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let str = "";
  const first = "┌";
  const last = "┐\n";
  str += first;
  for (let i = 1; i < width - 1; i += 1) {
    str += "─";
  }
  str += last;
  for (let i = 1; i < height - 1; i += 1) {
    str += "│";
    for (let j = 1; j < width - 1; j += 1) {
      str += " ";
    }
    str += "│\n";
  }
  str += "└";
  for (let i = 1; i < width - 1; i += 1) {
    str += "─";
  }
  str += "┘\n";
  return str;
}
/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' =>
 *   'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const remove = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let res = "";

  for (let j = 0; j < str.length; j += 1) {
    if (str[j] === " " || str[j] === "?" || str[j] === "!") {
      res += str[j];
    }
    for (let i = 0; i < original.length; i += 1) {
      if (str[j] === original[i]) {
        res += remove[i];
      }
    }
  }
  return res;
}
/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  let res;
  if (typeof value === "string" || value instanceof String) {
    res = true;
  } else {
    res = false;
  }
  return res;
}
/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  let res;
  const arr = [
    "A♣",
    "2♣",
    "3♣",
    "4♣",
    "5♣",
    "6♣",
    "7♣",
    "8♣",
    "9♣",
    "10♣",
    "J♣",
    "Q♣",
    "K♣",
    "A♦",
    "2♦",
    "3♦",
    "4♦",
    "5♦",
    "6♦",
    "7♦",
    "8♦",
    "9♦",
    "10♦",
    "J♦",
    "Q♦",
    "K♦",
    "A♥",
    "2♥",
    "3♥",
    "4♥",
    "5♥",
    "6♥",
    "7♥",
    "8♥",
    "9♥",
    "10♥",
    "J♥",
    "Q♥",
    "K♥",
    "A♠",
    "2♠",
    "3♠",
    "4♠",
    "5♠",
    "6♠",
    "7♠",
    "8♠",
    "9♠",
    "10♠",
    "J♠",
    "Q♠",
    "K♠",
  ];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      res = i;
    }
  }
  return res;
}
/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}
/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  const res = value1 / 2 + value2 / 2;
  return res;
}
/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}
/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);

  const cosTheta = dotProduct / (magnitude1 * magnitude2);

  // Use Math.acos to get the arccosine and find the angle in radians
  const angle = Math.acos(cosTheta);

  return angle;
}
/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  return value % 10;
}
/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return Number(value);
}
/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  let res = "1";
  for (let i = 0; i < pow; i += 1) {
    res += 0;
  }
  res = Number(res);
  return Math.round(num / res) * res;
}
/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  const res = Number(value);
  let res1;
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(res) || value instanceof Number) {
    res1 = res;
  } else {
    res1 = def;
  }
  return res1;
}
/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
  return arr.includes(value, 0) ? arr.indexOf(value) : -1;
}
/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
  if (len === 1) {
    return [1];
  }
  /* Array.from({ length: len }, (v, k) => k *2 + 1); */
  return Array.from({ length: len }, (_, index) => index * 2 + 1);
}
/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
  if (arr[0] === "") {
    return arr;
  }
  return arr.concat(arr);
}
/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
  const results = arr.filter((item) => item > 0);
  return results;
}
function toReadable(number) {
  let num = Math.floor(number / 100) + "";
  let hundr = "";

  if (num == 9) {
    hundr += "nine hundred";
  } else if (num == 8) {
    hundr += "eight hundred";
  } else if (num == 7) {
    hundr += "seven hundred";
  } else if (num == 6) {
    hundr += "six hundred";
  } else if (num == 5) {
    hundr += "five hundred";
  } else if (num == 4) {
    hundr += "four hundred";
  } else if (num == 3) {
    hundr += "three hundred";
  } else if (num == 2) {
    hundr += "two hundred";
  } else if (num == 1) {
    hundr += "one hundred";
  }
  let unit;
  if (number < 10) {
    unit = "";
  } else {
    unit = " ";
  }
  if (Math.floor(number % 10) == 9) {
    unit += "nine";
  } else if (Math.floor(number % 10) == 8) {
    unit += "eight";
  } else if (Math.floor(number % 10) == 7) {
    unit += "seven";
  } else if (Math.floor(number % 10) == 6) {
    unit += "six";
  } else if (Math.floor(number % 10) == 5) {
    unit += "five";
  } else if (Math.floor(number % 10) == 4) {
    unit += "four";
  } else if (Math.floor(number % 10) == 3) {
    unit += "three";
  } else if (Math.floor(number % 10) == 2) {
    unit += "two";
  } else if (Math.floor(number % 10) == 1) {
    unit += "one";
  } else if (unit == " " || unit == "") {
    unit = "";
  }
  let dozen;
  if (number < 100) {
    dozen = "";
  } else {
    dozen = " ";
  }

  if (Math.floor((number % 100) / 10) == 9) {
    dozen += "ninety" + unit;
  } else if (Math.floor((number % 100) / 10) == 8) {
    dozen += "eighty" + unit;
  } else if (Math.floor((number % 100) / 10) == 7) {
    dozen += "seventy" + unit;
  } else if (Math.floor((number % 100) / 10) == 6) {
    dozen += "sixty" + unit;
  } else if (Math.floor((number % 100) / 10) == 5) {
    dozen += "fifty" + unit;
  } else if (Math.floor((number % 100) / 10) == 4) {
    dozen += "forty" + unit;
  } else if (Math.floor((number % 100) / 10) == 3) {
    dozen += "thirty" + unit;
  } else if (Math.floor((number % 100) / 10) == 2) {
    dozen += "twenty" + unit;
  } else if (Math.floor((number % 100) / 10) == 1) {
    if (number % 100 == 19) {
      dozen += "nineteen";
    } else if (number % 100 == 18) {
      dozen += "eighteen";
    } else if (number % 100 == 17) {
      dozen += "seventeen";
    } else if (number % 100 == 16) {
      dozen += "sixteen";
    } else if (number % 100 == 15) {
      dozen += "fifteen";
    } else if (number % 100 == 14) {
      dozen += "fourteen";
    } else if (number % 100 == 13) {
      dozen += "thirteen";
    } else if (number % 100 == 12) {
      dozen += "twelve";
    } else if (number % 100 == 11) {
      dozen += "eleven";
    } else if (number % 100 == 10) {
      dozen += "ten";
    }
  } else if (dozen == " " || dozen == "") {
    dozen = "" + unit;
  }
  if (number == 0) {
    hundr = "zero";
  }
  return hundr + dozen;
}
function reverse(n) {
  if (n < 0) {
    n = n * -1;
  }
  let str = "" + n;
  let str1 = str.split("").reverse().join("");
  return Number(str1);
}

function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j]);
    }
  }
  return arr;
}

function check(str, bracketsConfig) {
  let str1 = str.split("");
  let res1 = str1.filter((item) => item == "[");
  let res2 = str1.filter((item) => item == "]");
  let res3 = str1.filter((item) => item == "(");
  let res4 = str1.filter((item) => item == ")");
  let res5 = str1.filter((item) => item == "{");
  let res6 = str1.filter((item) => item == "}");
  if (
    res1.length == res2.length &&
    res3.length == res4.length &&
    res5.length == res6.length
  ) {
    return true;
  } else {
    return false;
  }
}
class GuessingGame {
  constructor() {
    this.minRange = 0;
    this.maxRange = 0;
    this.guessValue = 0;
  }

  setRange(min, max) {
    this.minRange = min;
    this.maxRange = max;
  }

  guess() {
    this.guessValue = Math.round((this.minRange + this.maxRange) / 2);
    return this.guessValue;
  }

  lower() {
    this.maxRange = this.guessValue;
  }

  greater() {
    this.minRange = this.guessValue;
  }
}
/**
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccoon' ] => [ 'cat', 'dog', 'raccoon' ]
 */
function getArrayOfStrings(arr) {
  const results = arr.filter((item) => typeof item === "string");
  return results;
}
/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
  /* let results = arr.filter((item) => item !== false);
  results = arr.filter((item) => item !== null);
  results = arr.filter((item) => item !== undefined);
  results = arr.filter((item) => item !== '');
  results = arr.filter((item) => item !== 0);
  results = arr.filter((item) => !Number.isNaN(item));
  return results; ошибка - нужно вызывать 1 раз фильтр или в разные массивы писать новый массив */
  // return arr.filter(item => Boolean(item));
  const results = arr.filter((item) => item !== false && item !== null);
  const res1 = results.filter((item) => item !== 0 && item !== undefined);
  const res2 = res1.filter((item) => item !== "" && !Number.isNaN(item));
  return res2;
}
/** ****************************codewars
 * Returns the array of uppercase strings from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
 *    => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
  return arr.map((item) => item.toUpperCase());
}
/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
  return arr.map((item) => item.length);
}
/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 'x', 0  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
  return arr.splice(index, 0, item); // удалит 0 элем, вставит с index элемент item
}
/**
 * Returns the n first items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2 => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
  return arr.slice(0, n); // копия массива с 0 индекса без элемента n
}
/**
 * Returns the n last items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */ // return arr.slice(-n); вернёт удалённые с конца массива элементы (т.к. индекс отрицательный)
function getTail(arr, n) {
  return arr.slice(-n);
  // return arr.splice(0, arr.length - n);
}
