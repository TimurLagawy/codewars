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
  /*
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
}*/
  let brackets = bracketsConfig.map((item) => item.join(""));

  while (true) {
    let first = str.length;

    for (let bracket of brackets) {
      str = str.replace(bracket, "");
    }

    if (str.length === first) {
      break; // No further reductions can be made
    }
  }

  return str.length === 0;
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

/**
 * Returns CSV representation of two-dimensional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
  return arr.join("\n");
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
  return arr.map((item) => item * item);
}

/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
  let sum = 0;
  return arr.map((item) => {
    sum += item;
    return sum;
  });
}
/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
  /* if (arr === '') {
    return [];
  }
  return Array.from(arr, (item, index) => (index + 1) * item); */
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}
/** ****************************************************codewars
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
  arr.reverse();

  return arr.slice(0, 3);
}
/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
  let mass = [];
  let num = 0;
  if (arr.length === 0) {
    num = 0;
  } else {
    mass = arr.filter((item) => typeof item === "number" && item > 0);
    mass.sort((a, b) => a - b);
    num = mass[mass.length - 1];
  }
  return num;
}
/**
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
  const massKey = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  arr.sort((a, b) => massKey.indexOf(a) - massKey.indexOf(b));
  return arr;
}
/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
  const res = arr.reduce((sum, current) => sum + current, 0);
  //  sum = arr.map(item => item);
  return res;
}
/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
  /* let res;
  res = arr.lastIndexOf('');
  if (arr === '') {
    res = 0;
  }

  return res;
} */

  return arr.filter((item) => !item).length;
}
/**
 * Returns a number of all occurrences of the specified item in an array
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurrences(arr, n) {
  const res = arr.filter((item) => item === n);
  return res.length;
}
/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
  return arr.join(",");
}
/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}
/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  const arr = [];
  arr.length = n;
  return Array.from({ length: n }, () => arr.fill(1));
  // return Array.from({ length: n }, ($, i)
  // => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
}
/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
  // Array.from({ length: end - start + 1}, (v, k) => k); выдаёт массив от 0 до end
  return Array.from({ length: end - start + 1 }, ($, index) => start + index);
  // $ или _ вариант объявления переменной
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
  /* arr.sort();
  const results = arr.filter((item) => item < 0);
  return results; */
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  return array.reduce((resultMap, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);

    const valuesArray = resultMap.get(key) || [];
    resultMap.set(key, [...valuesArray, value]);

    return resultMap;
  }, new Map());
}
/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  /* const str = String(arr);
  return str.split(','); */
  return arr.flatMap(childrenSelector);
}
/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  // return arr.indexOf(indexes);
  // return arr.find((item) => item.index === indexes);
  if (indexes.length === 0) {
    return arr;
  }

  const [currentIndex, ...restIndexes] = indexes;

  if (arr[currentIndex] === undefined) {
    return undefined;
  }
  return getElementByIndexes(arr[currentIndex], restIndexes);
}
/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  let mass = [];
  let arr1 = [];
  if (arr.length <= 1) {
    arr1 = arr;
  } else if (arr.length % 2 === 0) {
    mass = arr.splice(0, arr.length / 2);

    arr1 = arr.concat(mass);
  } else if (arr.length % 2 === 1) {
    mass = arr.splice(0, arr.length / 2);
    const elem = arr.splice(0, 1);

    arr1 = arr.concat(elem, mass);
  }
  return arr1;
}

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let res;
  if (num % 15 === 0) {
    res = "FizzBuzz";
  } else if (num % 3 === 0) {
    res = "Fizz";
  } else if (num % 5 === 0) {
    res = "Buzz";
  } else {
    res = num;
  }
  return res;
}

const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
function decode(expr) {
  let res = "";

  for (let i = 0; i < expr.length / 10; i++) {
    let letter = "";
    letter += expr[i * 10];
    letter += expr[i * 10 + 1];
    letter += expr[i * 10 + 2];
    letter += expr[i * 10 + 3];
    letter += expr[i * 10 + 4];
    letter += expr[i * 10 + 5];
    letter += expr[i * 10 + 6];
    letter += expr[i * 10 + 7];
    letter += expr[i * 10 + 8];
    letter += expr[i * 10 + 9];
    if (letter === "**********") {
      res += " ";
    } else {
      let key = "";
      let a = "";
      for (let j = 0; j < 5; j++) {
        if (letter[j * 2] === "0" && letter[j * 2 + 1] === "0") {
          key += "";
        } else if (letter[j * 2] === "1" && letter[j * 2 + 1] === "0") {
          key += ".";
        } else if (letter[j * 2] === "1" && letter[j * 2 + 1] === "1") {
          key += "-";
        }
      }
      res += MORSE_TABLE[key];
    }
  }
  return res;
}
/* Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }) "Did not count the correct number of strings. Check counting inside nested objects.");
   */
function strCount(obj) {
  let count = 0;
  let val = Object.values(obj);

  for (let i = 0; i < val.length; i++) {
    if (typeof val[i] === "number") {
      count += 1;
    } else {
    }
  }
  return count;
}

// countBits = n => n.toString(2).split('0').join('').length;
let countBits = function (n) {
  let binaryString = n.toString(2); // Convert to binary string
  let count = 0;

  for (let i = 0; i < binaryString.length; i++) {
    // Check the least significant bit using bitwise AND
    if (binaryString[i] == 1) {
      count += 1;
    }
  }
};
/* Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to an elaborate email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it? */
let whatTimeIsIt = function (angle) {
  let allMin = angle * 2;
  let min = Math.floor(allMin % 60);
  let hours = Math.floor(allMin / 60);
  let time = "";
  if (hours == 0) {
    hours += 12;
  } else if (hours < 10) {
    time += 0;
  }
  if (min < 10) {
    time += hours + ":0" + min;
  } else {
    time += hours + ":" + min;
  }
  return time;
};

/* Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  /* false 
is_prime(2)  /* true  
is_prime(-1)  false */
/* function isPrime(num) {
  res = true;
  if (num < 2) {
    res = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        res = false;
      }
    }
  }
  return res;
} */
function isPrime(num) {
  res = true;
  if (num < 2) {
    res = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        res = false;
      }
    }
  }
  return res;
}
/* Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length. */

function bingo(ticket, win) {
  let miniWins = 0;

  for (let i = 0; i < ticket.length; i++) {
    let elem = ticket[i];

    // разделил массив билета на подмассивы и сравнил значение каждой буквы с числом, если ==, то +победа
    for (let j = 0; j < elem[0].length; j++) {
      if (elem[0].charCodeAt(j) === elem[1]) {
        miniWins += 1;
        break; // Break once a mini win is found in the current subarray
      }
    }
  }
  // Compare the total mini wins to the win threshold
  return miniWins >= win ? "Winner!" : "Loser!";
}

/* Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe" */

/*function modifyString(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let wordArray = arr[i].split("");

    for (let j = 0; j < wordArray.length; j++) {
      if (j % 2 === 0) {
        wordArray[j] = wordArray[j].toUpperCase();
      } else {
        wordArray[j] = wordArray[j].toLowerCase();
      }
    }
    arr[i] = wordArray.join("");
  }
  return arr.join(" ");
}*/
function toWeirdCase(str) {
  let res = "";
  if (str.includes(" ")) {
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
      let wordArray = arr[i].split("");

      for (let j = 0; j < wordArray.length; j++) {
        if (j % 2 === 0) {
          wordArray[j] = wordArray[j].toUpperCase();
        } else {
          wordArray[j] = wordArray[j].toLowerCase();
        }
      }
      arr[i] = wordArray.join("");
    }
    res = arr.join(" ");
  } else {
    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        res += str[j].toUpperCase();
      } else {
        res += str[j].toLowerCase();
      }
    }
  }
  return res;
}

/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
/* function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
} */

function likes(names) {
  let str = " likes this";
  let res = "";

  if (names.length === 0) {
    res = "no one";
  } else if (names.length === 1) {
    res = names[0];
  } else if (names.length === 2) {
    res = names[0] + " and " + names[1];
    str = " like this";
  } else if (names.length === 3) {
    res = names[0] + ", " + names[1] + " and " + names[2];
    str = " like this";
  } else if (names.length > 3) {
    res = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others";
    str = " like this";
  }

  return res + str;
}

/* DESCRIPTION:
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3" */
function rgb(r, g, b) {
  let res = "";
  if (r < 0) {
    r = 0;
    res = res + 0 + r.toString(16);
  } else if (0 <= r && r <= 15) {
    res = res + 0 + r.toString(16);
  } else if (r > 255) {
    r = 255;
    res += r.toString(16);
  } else {
    res += r.toString(16);
  }
  if (g < 0) {
    g = 0;
    res = res + 0 + g.toString(16);
  } else if (0 <= g && g <= 15) {
    res = res + 0 + g.toString(16);
  } else if (g > 255) {
    g = 255;
    res += g.toString(16);
  } else {
    res += g.toString(16);
  }
  if (b < 0) {
    b = 0;
    res = res + 0 + b.toString(16);
  } else if (0 <= b && b <= 15) {
    res = res + 0 + b.toString(16);
  } else if (b > 255) {
    b = 255;
    res += b.toString(16);
  } else {
    res += b.toString(16);
  }
  return res.toUpperCase();
}

/* function getCard() {
  function generateUniqueRandomNumbers(min, max, count, exclude) {
    let result = [];

    while (result.length < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!result.includes(randomNum) && !exclude.includes(randomNum)) {
        result.push(randomNum);
      }
    }

    return result;
  }

  let mass = [];

  // B column (1 to 15)
  const bNumbers = generateUniqueRandomNumbers(1, 15, 5, []);
  mass.push(...bNumbers.map(num => 'B' + num));

  // I column (16 to 30)
  const iNumbers = generateUniqueRandomNumbers(16, 30, 5, bNumbers);
  mass.push(...iNumbers.map(num => 'I' + num));

  // N column (31 to 45)
  const nNumbers = generateUniqueRandomNumbers(31, 45, 4, [...bNumbers, ...iNumbers]);
  mass.push(...nNumbers.map(num => 'N' + num));

  // G column (46 to 60)
  const gNumbers = generateUniqueRandomNumbers(46, 60, 5, [...bNumbers, ...iNumbers, ...nNumbers]);
  mass.push(...gNumbers.map(num => 'G' + num));

  // O column (61 to 75)
  const oNumbers = generateUniqueRandomNumbers(61, 75, 5, [...bNumbers, ...iNumbers, ...nNumbers, ...gNumbers]);
  mass.push(...oNumbers.map(num => 'O' + num));

  return mass;
} */ /*function getCard() {
  let range = {
    'B': [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15],
    'I': [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    'N': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    'G': [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    'O': [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
  };
  return [
    'B', 'B', 'B', 'B', 'B',
    'I', 'I', 'I', 'I', 'I',
    'N', 'N',      'N', 'N',
    'G', 'G', 'G', 'G', 'G',
    'O', 'O', 'O', 'O', 'O'
  ]
  .map(c => c + range[c].splice(Math.random() * range[c].length | 0, 1));
} */
function getCard() {
  let mass = [];
  for (let i = 0; i < 5; i++) {
    mass.push("B" + (Math.floor(Math.random() * 15) + 1));
  }
  for (let i = 0; i < 5; i++) {
    mass.push("I" + (Math.floor(Math.random() * 15) + 16));
  }
  for (let i = 0; i < 4; i++) {
    mass.push("N" + (Math.floor(Math.random() * 15) + 31));
  }
  for (let i = 0; i < 5; i++) {
    mass.push("G" + (Math.floor(Math.random() * 15) + 46));
  }
  for (let i = 0; i < 5; i++) {
    mass.push("O" + (Math.floor(Math.random() * 15) + 61));
  }
  return mass;
}
/* A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1 */
/* const dataReverse = data => {

	const result = [];

	while(data.length){
		result.push(...data.splice(-8))
	}

	return result;
} */
let n = 1;
function dataReverse(data) {
  let mass = [];
  let n = 1;
  for (let i = data.length / 8; i > 0; i--) {
    mass.push(data.slice([data.length - 8 * n], [data.length - 8 * n + 8]));
    n++;
  }
  let str = mass.join("").split("");
  let mass1 = [];
  for (let j = 0; j < str.length; j++) {
    if (str[j] == "0" || str[j] == "1") {
      mass1.push(Number(str[j]));
    }
  }
  return mass1;
}
/* Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill'] */
/* function killer(obj, arr) {
for (const key in obj){
  let same = 0;
  for(let i = 0;i<arr.length;i++){
    if(obj[key].includes(arr[i])){
      same++
    }
     if(same === arr.length){
       return key
     }
  }
}
} */
function killer(suspectInfo, dead) {
  for (const [suspect, seen] of Object.entries(suspectInfo)) {
    if (dead.every((deads) => seen.includes(deads))) {
      return suspect;
    }
  }
}
/* vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
 */ /* function vowelOne(s){
  return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
} */
function vowelOne(s) {
  let vov = "aeiou";
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (vov.includes(s[i].toLowerCase())) {
      res += 1;
    } else {
      res += 0;
    }
  }
  return res;
}
/* You must create a function, , that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.spread

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar") */

function spread(func, args) {
  return func(...args);
}
/* DESCRIPTION:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74 */
function minSum(arr) {
  let res = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length / 2; i++) {
    res += arr[i] * arr[arr.length - 1 - i];
  }
  return res;
}
/* DESCRIPTION:
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'

const sentence = list =>
  list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(item => Object.values(item)[0])
    .join(' '); 
    
    function sentence(List) {
   return List
     .sort((a, b) => Object.keys(a) - Object.keys(b))
     .map((item) => Object.values(item))
     .join(' ') */
function sentence(List) {
  let res = [];
  for (let i = -999; i < 999; i++) {
    for (let j = 0; j < List.length; j++) {
      for (let key in List[j]) {
        if (key == i) {
          res.push(List[j][key]);
        }
      }
    }
  }
  return res.join(" ");
}

/* DESCRIPTION:
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2. */
function isPowerOfTwo(n) {
  let res = false;
  if (n < 1) {
    res = false;
  } else if (n == 1) {
    res = true;
  } else {
    for (let i = 0; n > 1; i++) {
      if (n % 2 == 0) {
        n = n / 2;
        res = true;
      } else {
        res = false;
        break;
      }
    }
  }
  return res;
}

/* Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

Enjoy. 
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
} */
function sortMyString(S) {
  let str = "";
  let str1 = "";
  for (let i = 0; i < S.length; i++) {
    if (i % 2 == 0) {
      str += S[i];
    } else {
      str1 += S[i];
    }
  }
  return str + " " + str1;
}

function nicknameGenerator(name) {
  let nick = "";
  let err = "bcdfghjklmnpqrstvwxyz";
  if (name.length < 5) {
    nick = "Error: Name too short";
  } else {
    for (i = 0; i < 4; i++) {
      nick += name[i];
      if (i == 2 && err.includes(name[i])) {
        break;
      }
    }
  }
  return nick;
}

/* DESCRIPTION:
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified */

function nicknameGenerator(name) {
  let nick = "";
  let err = "bcdfghjklmnpqrstvwxyz";
  if (name.length < 4) {
    nick = "Error: Name too short";
  } else {
    for (i = 0; i < 4; i++) {
      nick += name[i];
      if (i == 2 && err.includes(name[i])) {
        break;
      }
    }
  }
  return nick;
}

/* DESCRIPTION:
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
} */
function maxTriSum(numbers) {
  let mass1 = numbers.sort((a, b) => b - a);
  let count = 0;
  let res = 0;
  for (let i = 0; i < mass1.length; i++) {
    if (mass1[i] !== mass1[i + 1]) {
      count++;
      res += mass1[i];
      if (count == 3) {
        break;
      }
    }
  }
  console.log(res);
  return res;
}
/* DESCRIPTION:
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2 */
function getDecimal(n) {
  return Math.abs(n % 1);
}
/* Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.

*/
const findMissing = (arr1, arr2) => {
  mass1 = arr1.sort();
  mass2 = arr2.sort();
  for (let i = 0; i < mass1.length; i++) {
    if (mass1[i] != mass2[i]) return mass1[i];
  }
};

/* Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1. 

function nbDig(n, d) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let square = i ** 2;
    let digits = square.toString().split('');

    count += digits.filter(item => item === d.toString()).length;
  }

  return count;
} 

function nbDig(n, d) {
    let totalOfDigit = 0;
  
    for(let i = 0; i <= n; i++) {
      totalOfDigit += (i*i).toString().split('').filter(n => n == d).length;
    }
      
    return totalOfDigit;
} */
function nbDig(n, d) {
  let res = "";
  for (let i = 0; i <= n; i++) {
    res += i ** 2;
  }
  let res1 = res.split("");
  let filt = res1.filter((item) => item == d.toString()).length;
  return filt;
}

/* Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.

function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let property in obj) {
            if (property in result) {
                result[property] += obj[property];
            } else {
                result[property] = obj[property];
            }
        }
    }
    return result;
} */
function combine(...objects) {
  return objects.reduce((result, obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = (result[key] || 0) + obj[key];
      }
    }
    return result;
  }, {});
}

/* I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge': 8
                } 
                
function whoseBicycle(a, b, c) {
  [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));
  let n = Math.max(a, b, c);
  return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
} */
function whoseBicycle(obj1, obj2, obj3) {
  let res1 = 0;
  let res2 = 0;
  let res3 = 0;
  for (let key in obj1) {
    res1 += obj1[key];
  }
  for (let key in obj2) {
    res2 += obj2[key];
  }
  for (let key in obj3) {
    res3 += obj3[key];
  }
  if (res1 > res2 && res1 > res3) {
    return "I need to buy a bicycle for my first son.";
  } else if (res2 > res1 && res2 > res3) {
    return "I need to buy a bicycle for my second son.";
  } else {
    return "I need to buy a bicycle for my third son.";
  }
}

/* Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

  function strCount(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}
*/
function strCount(obj) {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      count++;
    } else if (Array.isArray(obj[key])) {
      // Use recursion for arrays
      count += strCount(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      // Use recursion for nested objects
      count += strCount(obj[key]);
    }
  }

  return count;
}

/* In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

Examples
// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be too large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers */

function convert(input, sourceAlphabet, targetAlphabet) {
  // Convert input from source to decimal
  const decimalValue = input
    .split("")
    .reverse()
    .reduce((acc, char, index) => {
      const sourceIndex = sourceAlphabet.indexOf(char);
      return acc + sourceIndex * Math.pow(sourceAlphabet.length, index);
    }, 0);

  // Convert decimal to target alphabet
  let result = "";
  let quotient = decimalValue;

  do {
    const remainder = quotient % targetAlphabet.length;
    result = targetAlphabet[remainder] + result;
    quotient = Math.floor(quotient / targetAlphabet.length);
  } while (quotient > 0);

  return result;
}

/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  const arr = [];
  arr.length = n;
  const mass = Array.from({ length: n }, () => arr.fill(0));
  return mass.map((e, i) => e.map((el, ind) => (i !== ind ? el : 1)));
  // return Array.from({ length: n }, ($, i)
  // => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let res = "";
  if (isStartIncluded === true) {
    res += "[";
  } else {
    res += "(";
  }
  if (a < b) {
    res += a;
    res += ", ";
    res += b;
  } else {
    res += b;
    res += ", ";
    res += a;
  }
  if (isEndIncluded === true) {
    res += "]";
  } else {
    res += ")";
  }
  return res;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const str = String(num);
  let res = 0;
  let res1 = 0;
  for (let i = 0; i < str.length; i += 1) {
    res += Number(str[i]);
  }
  if (res < 10) {
    res1 = res;
  } else {
    const str1 = String(res);
    for (let i = 0; i < str1.length; i += 1) {
      res1 += Number(str1[i]);
    }
  }
  return res1;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(p) {
  let res;
  if (p[0][0] === "X" && p[0][1] === "X" && p[0][2] === "X") {
    res = "X";
  } else if (p[1][0] === "X" && p[1][1] === "X" && p[1][2] === "X") {
    res = "X";
  } else if (p[2][0] === "X" && p[2][1] === "X" && p[2][2] === "X") {
    res = "X";
  } else if (p[0][0] === "X" && p[1][0] === "X" && p[2][0] === "X") {
    res = "X";
  } else if (p[0][1] === "X" && p[1][1] === "X" && p[2][1] === "X") {
    res = "X";
  } else if (p[0][2] === "X" && p[1][2] === "X" && p[2][2] === "X") {
    res = "X";
  } else if (p[0][0] === "X" && p[1][1] === "X" && p[2][2] === "X") {
    res = "X";
  } else if (p[2][0] === "X" && p[1][1] === "X" && p[0][2] === "X") {
    res = "X";
  } else if (p[0][0] === "0" && p[0][1] === "0" && p[0][2] === "0") {
    res = "0";
  } else if (p[1][0] === "0" && p[1][1] === "0" && p[1][2] === "0") {
    res = "0";
  } else if (p[2][0] === "0" && p[2][1] === "0" && p[2][2] === "0") {
    res = "0";
  } else if (p[0][0] === "0" && p[1][0] === "0" && p[2][0] === "0") {
    res = "0";
  } else if (p[0][1] === "0" && p[1][1] === "0" && p[2][1] === "0") {
    res = "0";
  } else if (p[0][2] === "0" && p[1][2] === "0" && p[2][2] === "0") {
    res = "0";
  } else if (p[0][0] === "0" && p[1][1] === "0" && p[2][2] === "0") {
    res = "0";
  } else if (p[2][0] === "0" && p[1][1] === "0" && p[0][2] === "0") {
    res = "0";
  }
  return res;
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const parts = pathes.map((path) => path.split("/"));

  let resStr = "";
  for (let i = 0; i < parts[0].length; i += 1) {
    const part = parts[0][i];
    if (parts.every((pathParts) => pathParts[i] === part)) {
      resStr += part;
      if (i < parts[0].length - 1) {
        resStr += "/";
      }
    } else {
      break;
    }
  }
  return resStr;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(c, p) {
  const line1 = Math.sqrt((c.center.x - p.x) ** 2 + (c.center.y - p.y) ** 2);
  return c.radius > line1;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const arr = str.split("");
  let simbol;
  for (let i = 0; i < str.length; i += 1) {
    if (arr.filter((item) => item === str[i]).length === 1) {
      simbol = str[i];
      break;
    } else {
      simbol = null;
    }
  }
  return simbol;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */

function getMatrixProduct(m1, m2) {
  const res = [];

  for (let i = 0; i < m1.length; i += 1) {
    res[i] = [];

    for (let j = 0; j < m2[0].length; j += 1) {
      res[i][j] = 0;

      for (let k = 0; k < m1[0].length; k += 1) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return res;
}

/* In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];

function factory(x){
    return array => array.map( a => a*x );
} */
function factory(x) {
  return function arr(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      myArray[i] = myArray[i] * x;
    }
    return myArray;
  };
}

/* I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.

As usual, a few examples might be way better than thousands of words from me:

0 grains need 0 cells
1 grain needs 1 cell
2 grains need 2 cells
3 grains need 2 cells
4 grains need 3 cells
and etc.
Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!

function squaresNeeded(grains){
  if(grains <= 2){ return grains;}
  if(grains > 2) {
    let i = 0;
      while(2**i <= grains){
        i++;
      }
    return i;
  }  
}

function squaresNeeded(grains) {
    if (grains == 1) return 1;

    var count = 0;

    !(grains % 2) ? "" : grains -= 1;

    for (var i = grains; i >= 1; i = i / 2) {
        count = count + 1;
    }

    return count;
}
*/

function squaresNeeded(n) {
  let num = 1;
  if (n == 0) {
    num = 0;
  } else if (n == 1) {
    num = 1;
  }
  while (n >= 2) {
    n = n / 2;
    num++;
  }

  return num;
}
/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  let res = "";
  if (minutes < 10) {
    res += "0";
    res += minutes;
    res += ":";
  } else {
    res += minutes;
    res += ":";
  }
  if (seconds < 10) {
    res += "0";
    res += seconds;
  } else {
    res += seconds;
  }
  return res;
}

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }
  return res;
}

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  const alpha = ' 1234567890abcdefghijklmnopqrstuvwxyz';
  let res = '';
  for (let i = 0; i < alpha.length; i += 1) {
    for (let l = 0; l < str.length; l += 1) {
      if (str[l] === alpha[i]) {
        res += str[l];
      }
    }
  }
  return res;
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    for (let l = 0; l < vowels.length; l += 1) {
      if (str[i] === vowels[l]) {
        res += 1;
      }
    }
  }
  return res;
}