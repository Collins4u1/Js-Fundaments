'use strict'
//Ask the user to enter a number and check wether it's greater than, equal to, oe less than a 
// dynamic number value in your code. output the result to the user

const randNum = Math.floor(Math.random() * 6);
//randNum
//let userInput = prompt('Please enter a number');
let userInput = '5'
userInput =  Number(userInput);

if (userInput > randNum) {
  console.log('your guess is high');
} else if ( userInput < randNum) {
  console.log('your guess is too low');
}else if (userInput === randNum) {
  console.log('Nice guess!!')
}else {
  console.log('Invalid entry, Try again with a number');
}




