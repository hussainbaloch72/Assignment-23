// Assignment 23
//Chapters 31-34
// Q1
// function getCurrentDateTime() {
//     const now = new Date();
//     const currentDateAndTime = now.toLocaleString();
//     console.log(currentDateAndTime);
//   }
  
//   getCurrentDateTime();

// Q2
// function getMonthInWords() {
//     const now = new Date();
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const currentMonth = monthNames[now.getMonth()];
//     alert(currentMonth);
//   }
  
//   getMonthInWords();

// Q3
// function getDayOfWeek() {
//     const now = new Date();
//     const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
//     const firstThreeLetters = dayOfWeek.slice(0, 3);
//     alert(firstThreeLetters);
//   }
  
//   getDayOfWeek();

// Q4
// function isFunDay() {
//     const now = new Date();
//     const dayOfWeek = now.getDay();
//     if (dayOfWeek === 0 || dayOfWeek === 6) {
//       alert("It's Fun day");
//     }
//   }
  
//   isFunDay();

// Q5
// function displayMonthMessage() {
//     const now = new Date();
//     const currentDate = now.getDate();
//     if (currentDate < 16) {
//       alert("First fifteen days of the month");
//     } else {
//       alert("Last days of the month");
//     }
//   }
  
//   displayMonthMessage();

// Q6
// const minutesSinceMidnight = (new Date()).getTime() / 1000 / 60;
// console.log(minutesSinceMidnight);

// Q7
// function isItBeforeNoon() {
//     const now = new Date();
//     const hours = now.getHours();
//     if (hours < 12) {
//       alert("It's AM");
//     } else {
//       alert("It's PM");
//     }
//   }
  
//   isItBeforeNoon();

// Q8
// const laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// Q9
// function daysSinceFirstRamadan() {
//     const firstRamadan = new Date(2015, 5, 18);
//     const now = new Date();
//     const timeDiff = Math.abs(now.getTime() - firstRamadan.getTime());
//     const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
//     alert(`The number of days since the first day of Ramadan is ${daysDiff}`);
//   }
  
//   daysSinceFirstRamadan();

// Q10
// const referenceDate = new Date(1970, 0, 1);
// const targetDate = new Date(2015, 0, 1);
// const timeDiff = Math.abs(targetDate.getTime() - referenceDate.getTime());
// const secondsElapsed = Math.floor(timeDiff / 1000);
// console.log(`The number of seconds that elapsed between the reference date and the beginning of 2015 is ${secondsElapsed}.`);

// Q11
// function displayDateAndTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     now.setHours(hours + 1);
//     console.log(now);
//   }
//   displayDateAndTime();

// Q12
// function showDateReseting100Years() {
//     const currentDate = new Date();
//     currentDate.setFullYear(currentDate.getFullYear() - 100);
//     alert(currentDate);
//   }  
//   showDateReseting100Years();

// Q13
// const value1 = prompt('Enter your age:');
// const value2 = parseInt(value1);

// const year = 2022 - value2;
// alert(`The birth year is ${year}`);

// Q14
// const customerName = 'John Doe';
// const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
// const numberOfUnits = 100;
// const chargesPerUnit = 10.52;
// const dueDate = new Date();
// dueDate.setDate(dueDate.getDate() + 10); 
// const latePaymentSurcharge = 1.5;
// const netAmountPayable = numberOfUnits * chargesPerUnit;
// const latePaymentSurchargeAmount = netAmountPayable * latePaymentSurcharge;
// const grossAmountPayable = netAmountPayable + latePaymentSurchargeAmount;
// const netAmountPayableFormatted = parseFloat(netAmountPayable.toFixed(2));
// const latePaymentSurchargeAmountFormatted = parseFloat(latePaymentSurchargeAmount.toFixed(2));
// const grossAmountPayableFormatted = parseFloat(grossAmountPayable.toFixed(2));
// console.log('K-Electric Bill');
// console.log(`Customer Name: ${customerName}`);
// console.log(`Current Month: ${currentMonth}`);
// console.log(`Number of Units: ${numberOfUnits}`);
// console.log(`Charges per unit: ${chargesPerUnit}`);
// console.log(`Net Amount Payable (within Due Date): ${netAmountPayableFormatted}`);
// console.log(`Late Payment Surcharge: ${latePaymentSurchargeAmountFormatted}`);
// console.log(`Gross Amount Payable (after Due Date): ${grossAmountPayableFormatted}`);
// console.log(`Due Date: ${dueDate.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}`);


// THE END

//Chapters 35-38
// Q1
// function getCurrentDateTime() {
//     const now = new Date();
//     const currentDateAndTime = now.toLocaleString();
//     console.log(currentDateAndTime);
//   }
  
//   getCurrentDateTime();
// // Q2
// function greetUser(firstName, lastName) {
//     const fullName = firstName + ' ' + lastName;
//     const now = new Date();
//     const hours = now.getHours();
//     let greeting;
  
//     if (hours < 12) {
//       greeting = 'Good Morning';
//     } else if (hours < 17) {
//       greeting = 'Good Afternoon';
//     } else {
//       greeting = 'Good Evening';
//     }
  
//     console.log(`Hello ${fullName}, ${greeting}!`);
//   }
  
//   greetUser('John', 'Doe');

// // Q3
// function addTwoNumbers(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
//   }
  
//   const value1 = prompt('Enter first number:');
//   const value2 = prompt('Enter second number:');
  
//   const total = addTwoNumbers(parseInt(value1), parseInt(value2));
//   console.log(`The sum of ${value1} and ${value2} is ${total}`);

// // Q4 Calculator
// function calculate(num1, num2, operator) {
//     let result;
    
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         result = 'Invalid operator';
//     }
    
//     return result;
//   }
  
//   const num1 = parseFloat(prompt('Enter first number:'));
//   const num2 = parseFloat(prompt('Enter second number:'));
//   const operator = prompt('Enter operator (+, -, *, /):');
  
//   const sum = calculate(num1, num2, operator);
//   console.log(`The result of ${num1} ${operator} ${num2} is ${sum}`);

// // Q5

// function square(num) {
//     const squared = num * num;
//     return squared;
//   }
  
//   const number = parseInt(prompt('Enter a number:'));
//   const squared = square(number);
//   console.log(`The square of ${number} is ${squared}`);
// // Q6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
  
//   const numbe = parseInt(prompt('Enter a number:'));
//   const result = factorial(numbe);
//   console.log(`The factorial of ${numbe} is ${result}`);

// // Q7
// function counting(start, end) {
//     for (let i = start; i <= end; i++) {
//       console.log(i);
//     }
//   }
  
//   const start = parseInt(prompt('Enter the start number:'));
//   const end = parseInt(prompt('Enter the end number:'));
  
//   counting(start, end);

// // Q8

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
  
//     const baseSquared = calculateSquare(base);
//     const perpendicularSquared = calculateSquare(perpendicular);
//     const hypotenuseSquared = baseSquared + perpendicularSquared;
//     const hypotenuse = Math.sqrt(hypotenuseSquared);
  
//     return hypotenuse;
//   }
  
//   const base = parseFloat(prompt('Enter the base length:'));
//   const perpendicular = parseFloat(prompt('Enter the perpendicular length:'));
  
//   const resul = calculateHypotenuse(base, perpendicular);
//   console.log(`The hypotenuse of a right angle triangle with base ${base} and perpendicular ${perpendicular} is ${resul}`);

// // Q9
// // i
// function calculateArea(width, height) {
//     return width * height;
//   }
  
//   const area = calculateArea(3, 5);
//   console.log(`The area of the rectangle is ${area}`);
// // ii
// function calculateArea(width, height) {
//     return width * height;
//   }
  
//   const rectWidth = 3;
//   const rectHeight = 5;
  
//   const are = calculateArea(rectWidth, rectHeight);
//   console.log(`The area of the rectangle is ${are}`);

// // Q10
// function isPalindrome(string) {
//     const lowercaseString = string.toLowerCase();
//     const reversedString = lowercaseString.split('').reverse().join('');
//     return lowercaseString === reversedString;
//   }
  
//   const inputString = prompt('Enter a string:');
//   if (isPalindrome(inputString)) {
//     console.log(`The string '${inputString}' is a palindrome.`);
//   } else {
//     console.log(`The string '${inputString}' is not a palindrome.`);
//   }

// // Q11
// function capitalizeFirstLetters(string) {
//     return string
//      .split(' ')
//      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//      .join(' ');
//   }
  
//   const inputStrin = 'the quick brown fox';
//   const outputString = capitalizeFirstLetters(inputStrin);
//   console.log(outputString);

// Q12
// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longestWord = words[0];
  
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
  
//     return longestWord;
//   }
  
//   const inputString = 'Web Development Tutorial';
//   const longestWord = findLongestWord(inputString);
//   console.log(`The longest word in the string '${inputString}' is '${longestWord}'.`);

// Q13
// function countLetterOccurrences(string, letter) {
//     let count = 0;
  
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const inputString = 'JSResourceS.com';
//   const letter = 'o';
//   const occurrences = countLetterOccurrences(inputString, letter);
//   console.log(`The number of occurrences of the letter '${letter}' in the string '${inputString}' is ${occurrences}.`);

// Q14 The Geometrizer
// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference}`);
//   }
  
//   const radius = 5;
//   calcCircumference(radius);

//   function calcArea(radius) {
//     const area = Math.PI * radius * radius;
//     console.log(`The area is ${area}`);
//   }
  
//   const radiu = 5;
//   calcArea(radiu);

// THE END

//Chapters 38-42
// Q1
// function power(a, b) {
//     return Math.pow(a, b);
//   }
  
//   const result = power(2, 3);
//   console.log(`The value of 2 raised to the power of 3 is ${result}`);

// Q2
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
  
//   const userInput = prompt('Enter a year:');
//   const year = parseInt(userInput);
  
//   if (isLeapYear(year)) {
//     alert(`${year} is a leap year.`);
//   } else {
//     alert(`${year} is not a leap year.`);
//   }

// Q3
// function areaOfTriangle(a, b, c) {
//     const s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   }
  
//   const a = 3;
//   const b = 5;
//   const c = 7;
  
//   const area = areaOfTriangle(a, b, c);
//   console.log(`The area of the triangle with sides a=${a}, b=${b}, and c=${c} is ${area}`);

// Q4
// function getAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
//   }
//   function getPercentage(total, sum) {
//     return (sum / total) * 100;
//   }
//   function mainFunction() {
//     const marks1 = 80;
//     const marks2 = 85;
//     const marks3 = 90;
  
//     const average = getAverage(marks1, marks2, marks3);
//     const total = marks1 + marks2 + marks3;
//     const percentage = getPercentage(total, average);
  
//     console.log(`The average is ${average} and the percentage is ${percentage}%`);
//   }
  
//   mainFunction();

// Q5
// function indexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const inputString = 'Web Development Tutorial';
//   const character = 'D';
//   const index = indexOf(inputString, character);
  
//   console.log(`The index of the character '${character}' in '${inputString}' is ${index}`);

// Q6
// function removeVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let newStr = '';
  
//     for (let i = 0; i < str.length; i++) {
//       if (!vowels.includes(str[i])) {
//         newStr += str[i];
//       }
//     }
  
//     return newStr;
//   }
  
//   const inputString = 'The quick brown fox jumps over the lazy dog';
//   const outputString = removeVowels(inputString);
//   console.log(`The string with all vowels removed is ${outputString}`);

// Q7
// function countVowelSuccessions(str) {
//     let count = 0;
  
//     for (let i = 0; i < str.length - 1; i++) {
//       switch (`${str[i]}${str[i + 1]}`) {
//         case 'aa':
//         case 'ee':
//         case 'ii':
//         case 'oo':
//         case 'uu':
//           count++;
//           break;
//       }
//     }
  
//     return count;
//   }
  
//   const inputString = 'Web Development Tutorial';
//   const occurrences = countVowelSuccessions(inputString);
//   console.log(`The number of occurrences of two vowels in succession in the string '${inputString}' is ${occurrences}.`);

// Q8
// function convertToMeters(distance) {
//     const distanceInMeters = distance * 1000;
//     alert(`The distance in meters is ${distanceInMeters}`);
//   }
//   function convertToFeet(distance) {
//     const distanceInFeet = distance * 0.001 * 3280.84;
//     alert(`The distance in feet is ${distanceInFeet}`);
//   }
//   function convertToInches(distance) {
//     const distanceInInches = distance * 0.001 * 39370;
//     alert(`The distance in inches is ${distanceInInches}`);
//   }
//   function convertToCentimeters(distance) {
//     const distanceInCentimeters = distance * 100;
//     alert(`The distance in centimeters is ${distanceInCentimeters}`);
//   }
//   const distance = prompt('Enter the distance between two cities (in km):');
//   convertToMeters(distance);
//   convertToFeet(distance);
//   convertToInches(distance);
//   convertToCentimeters(distance);

// Q9
// function calculateOvertimePay(hoursWorked) {
//     const overtimeRate = 12;
//     let overtimeHours = Math.max(hoursWorked - 20, 0);
//     const overtimePay = overtimeHours * overtimeRate;
  
//     return overtimePay;
//   }
  
//   const hoursWorked = 45;
//   const overtimePay = calculateOvertimePay(hoursWorked);
//   console.log(`The overtime pay for ${hoursWorked} hours worked is Rs. ${overtimePay}`);

// Q10
// function countCurrencyNotes(amount) {
//     const tenNotes = Math.floor(amount / 10);
//     const fiftyNotes = Math.floor(amount / 10 / 5);
//     const hundredNotes = Math.floor(amount / 10 / 5 / 2);
  
//     console.log(`The total number of currency notes will be: 
//       10's = ${tenNotes}
//       50's = ${fiftyNotes}
//       100's = ${hundredNotes}`);
//   }
  
//   const amount = parseInt(prompt('Enter the amount to be withdrawn (in hundreds):')) * 100;
//   countCurrencyNotes(amount);

// THE END

// PDF Questions Chapter 31-40

// Chapter 31 - 34 (Date & Time)

// Q1
// const dObj = new Date(2024, 4, 3);
// console.log(dObj);

// Q2
// const currentDate = new Date();
// const dStr = currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString();
// console.log(dStr);

// Q3
// const d = new Date(2022, 5, 18);
// const day = d.getDay();
// console.log(`Day of the week is ${day}`);

// Q4
// const currentDate = new Date();
// const day = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// console.log(`Current date is ${day}/${month + 1}/${year}, ${hours}:${minutes}:${seconds}`);

// Q5
// const currentDate = new Date();
// const day = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// console.log(`Current date is ${day}/${month + 1}/${year}, ${hours}:${minutes}:${seconds}`);


// Q6
// var later = new Date(2020, 11, 0)

// Q7
// const myDate = new Date(1992, 1, 2); // 

// console.log(`Date: ${myDate.toDateString()}`);

// Q8
// const referenceDate = new Date();
// const timeDiff = Math.abs(referenceDate - new Date(1970, 0, 1));
// alert(`The number of milliseconds that elapsed between the reference date and the beginning of 1980 is ${timeDiff}`);

// Q9
// const myDate = new Date();
// myDate.setFullYear(2022); 
// console.log(`Updated date: ${myDate}`);

// Q10
// function changeMonth(date) {
//     const newDate = new Date(date);
//     newDate.setMonth(0);
//     return newDate;
//   }
  
//   const date = new Date(2022, 5, 18);
//   const newDate = changeMonth(date);
//   console.log(`New date is ${newDate}`);

// Q11
// function setDayOfWeek(date, targetDay) {
//     const currentDay = date.getDay(); 
//     const distance = targetDay - currentDay;
//     date.setDate(date.getDate() + distance);
//     return date;
// }

// const myDate = new Date();
// const targetDayOfWeek = 3; 
// const updatedDate = setDayOfWeek(myDate, targetDayOfWeek);

// console.log(`Updated date: ${updatedDate}`);


// Q12
// function changeMinutes(time, newMinutes) {
//     const [hours, minutes] = time.split(':');
//     const newTime = `${hours}:${newMinutes}`;
//     return newTime;
//   }
  
//   const time = '14:30';
//   const newMinutes = parseInt(prompt('Enter new minutes'));
//   const newTime = changeMinutes(time, newMinutes);
//   console.log(`New time is ${newTime}`);
  

// Q13
// function addHoursToDate(date, hours) {
//     date.setHours(date.getHours() + hours);
//     return date;
// }
// const currentDate = new Date(); // Get the current date and time
// const newDate = addHoursToDate(currentDate, 2);
// console.log(`New date after adding 2 hours: ${newDate}`);


// Q14
// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - birthYear;
//     return age;
//   }
  
//   const birthYear = 1990;
//   const age = calculateAge(birthYear);
//   console.log(`The age is ${age}`);
  


// Chapter 35 - 37 (Functions)

// Q1
// function displayAlert() {
    
// }



// Q2
// function askName() {
//     const userName = prompt('Enter name');
//   }
  
//   askName();
//   console.log(`Hello ${userName}`);

// Q3
// function firstFunction() {
//     console.log('Hello from function 1');
//   }
  
//   function secondFunction() {
//     console.log('Hello from function 2');
//   }
  
//   function mainFunction() {
//     firstFunction();
//     secondFunction();
//   }
  
//   mainFunction();

// Q4
// function displayName() {
//     const userName = prompt('Enter name');
//     alert(`Hello ${userName}`);
//   }
  
//   displayName();

// Q5
// function concat(a, b, c) {
// }

// Q6
// function concatenateAndAssign(str1, str2) {
//     const concatenatedString = str1 + str2;
//     return concatenatedString;
// }
// const word1 = "Hello";
// const word2 = "World";
// const combinedWords = concatenateAndAssign(word1, word2);
// console.log(`The concatenated string is: ${combinedWords}`);

// Q7
// function multiplyAndAssign(a, b, c) {
//     const product = a * b * c;
//     return product;
// }

// const num1 = 5;
// const num2 = 3;
// const num3 = 2;

// // Call the function and store the result in an undeclared variable
// const result = multiplyAndAssign(num1, num2, num3);

// console.log(`The product of ${num1}, ${num2}, and ${num3} is: ${result}`);


// Q8
// function calculateAverage(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     return total / array.length;
// }

// const numbers = [1, 2, 3, 4, 5];
// const average = calculateAverage(numbers);
// console.log(`The average of the given numbers is: ${average}`);


// Q9
// function addNumbersUsingPlusOperator(a, b) {
//     return a + b;
// }

// const num1 = 5;
// const num2 = 3;
// const sum = addNumbersUsingPlusOperator(num1, num2);
// console.log(`The sum of ${num1} and ${num2} is: ${sum}`);


// Q10
// function getAverage(arr) {
//     return arr.reduce((a, b) => a + b, 0) / arr.length;
//   }
  
//   const numbers = [1, 2, 5, 7, 10];
//   const average = getAverage(numbers);
//   console.log(`The average is ${average}`);


// Q11
// function getSquare(num) {
//     return num * num;
//   }
  
//   const value1 = 5;
//   const square = getSquare(value1);
//   console.log(`The square of ${value1} is ${square}`);


// Q12
// function letterCounts(word) {
//     const counts = {};
//     for (const letter of word) {
//       if (counts[letter]) {
//         counts[letter]++;
//       } else {
//         counts[letter] = 1;
//       }
//     }
//     return counts;
//   }
  
//   const inputWord = 'hello';
//   const letterCountsResult = letterCounts(inputWord);
//   console.log(letterCountsResult);


// Q13
// function setYearInDateObject(dateObj, year) {
//     dateObj.setFullYear(year);
//   }
  
//   const date = new Date(1970, 0, 1);
//   setYearInDateObject(date, 2022);
//   console.log(date);


// Q14
// function calculateAge(dateOfBirth) {
//     const now = new Date();
//     const birthDate = new Date(dateOfBirth);
//     const age = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 365.25));
//     return age;
//   }
  
//   const dateOfBirth = new Date(1990, 5, 18);
//   const age = calculateAge(dateOfBirth);
//   console.log(`The age is ${age}`);


// Q15
// function isWordInArray(word, arr) {
//     return arr.includes(word);
//   }
  
//   const inputArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//   const inputWord = 'raza';
//   const isWordInArrayResult = isWordInArray(inputWord, inputArray);
//   console.log(`The word '${inputWord}' is in the array: ${isWordInArrayResult}`);


// Q16
// function repeatChar(letter) {
//     return letter.repeat(10);
//   }
  
//   const inputLetter = 'a';
//   const repeatedLetter = repeatChar(inputLetter);
//   console.log(repeatedLetter);
  
// Q17
// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   const inputArray = ['a', 'b', 'c', 'd', 'e'];
//   const reversedArray = reverseArray(inputArray);
//   console.log(reversedArray);

// Chapter 38 (Local vs. Global Variables)

// Q1
// function displayNumber() {
//     let localVariable = 'Hello, World!';
//     console.log(localVariable);
//   }
  
//   displayNumber();


// Q2
// let globalVariable = 'Hello, World!';

// function accessGlobalVariable() {
//   console.log(globalVariable);
// }

// accessGlobalVariable();



// Chapter 39, 40 (Switch Statements)

// Q1
// const myValue = 2;

// switch (myValue) {
//   case 1:
//     console.log('The value is 1');
//     break;
//   case 2:
//     console.log('The value is 2');
//     break;
//   case 3:
//     console.log('The value is 3');
//     break;
//   default:
//     console.log('The value is not 1, 2, or 3');
// }

// Q2
// const cityName = 'Miami';

// switch (cityName.toUpperCase()) {
//   case 'NEW YORK':
//     alert('Welcome to New York!');
//     break;
//   case 'LOS ANGEles':
//     alert('Welcome to Los Angeles!');
//     break;
//   case 'CHICAGO':
//     alert('Welcome to Chicago!');
//     break;
//   default:
//     alert('Unknown city!');
// }

//               THE END
