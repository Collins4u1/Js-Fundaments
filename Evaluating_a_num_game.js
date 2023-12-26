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


//FRIEND CHECKER GAME
/*Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend
if the name selected is known in the case statements. you can add a default response that  you don't know the
person if it's an unknown name. out the result into the console.*/

//create arrays for friends name
let friendNames = ['Amaka','Henry','Uchenna','Ria','Kingsley'];

//prompt for a name
//let userOneInput = prompt('Please enter a name');
let userOneInput = 'Joe';


switch (userOneInput) {
  case friendNames[0]:
  case 'Henry':
  case 'Ria':
  case 'Uchenna':
  case 'Kingsley':      
  console.log('I know him; he is my friend, his name is' + ' ' + userOneInput);
    break;
  default:
    console.log('I do not know this person');
    break;
}





