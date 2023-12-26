let gameArr = ['Rock','Paper','Scissors'];
let human = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let message = 'player ' + gameArr[human] + '  vs computer ' + gameArr[computer] + ' ';

message

if (human === computer) {
  message += 'The result is a tie';
} else if (human > computer) {
  if (computer == 0 && human == 2) {
    message += 'Computer wins';
  } else {
    message += 'Player wins';
  }
} else {
  if (computer == 2 && human == 0) {
    message += 'player wins';
  } else {
    message += 'computer wins';
  }
}

console.log(message);











