//Dealing with If and If Else Statments
//Else If Statements
//Conditional Tenary Operators
//Switch statements

/*IF AND IF ELSE STATMENTS */
let hobby = 'dancing';

if (hobby == 'coding'){
  console.log('I love coding');
}else {
  console.log('can you teach me that?')
}

/*ELSE IF STATEMENTS */

let age = 2;
let cost = 0;
let message;

if (age < 3) {
  cost = 0;
  message = 'You have a free pass';
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = 'Your fare is $5';
} else if ( age >= 12 && age < 65) {
  cost = 10;
  message = 'Your fare is $10';
}else  {
  cost = 7;
  message = 'Your fare is $7'
}


console.log('your total cost '+cost);
console.log(message);



/*EXERCISE*/

let userInput = '50'
console.log(typeof userInput) 

let inputNum = Number(userInput);
inputNum

console.log(typeof inputNum)

let conMsg;

if (inputNum >= 21) {
  conMsg = 'Entry and alcohol purchase allowed';
} else if (inputNum >= 19 && inputNum <= 20) {
  conMsg = 'Entry allowed; alcohol denied';
} else {
  conMsg = 'Deny Entry'
}

console.log(conMsg);


/* CONDITIONAL TERNARY OPERATOR */

// operand1 ? operand2 : operand3;
// if operand1 is true, then execute operand2 else executeb operand3
//example
let access = age < 18 ? 'denied' : 'allowed';


let id = true;
let idMessage = id ? 'your identity is verified' : 'you wont be allowed to go in'

console.log(idMessage)
