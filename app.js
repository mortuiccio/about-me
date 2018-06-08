'use strict';

alert('It is time for you to know about me!');

var userName = prompt('what is your name?');

console.log("the user is: ", userName);

var daughter = prompt('Is my daughters name Tabitha? Please answer all questions with Y for yes and N for no.').toLowerCase();

console.log('daughter', daughter);

if (daughter === 'y') {
  alert('you are correct');
} else {

  alert('nice try but incorrect');
}

var Taya = prompt('Is my dogs name Taya? Please answer all questions with Y for yes and N for no.').toLowerCase();

console.log('Taya', Taya);

if (Taya === 'y') {
  alert('you are correct');
} else {
  alert('nice try but incorrect');
}

var trevor = prompt('Is my cats name Trevor? Please answer all questions with Y for yes and N for no.').toLowerCase();

console.log('Trevor', trevor);

if (trevor === 'n') {
  alert('you are correct');
} else {

  alert('nice try but incorrect');
}

var ben = prompt('Is my friends name Ben? Please answer all questions with Y for yes and N for no.').toLowerCase();

console.log('Ben', ben);

if (ben === 'y') {
  alert('you are correct');
} else {

  alert('nice try but incorrect');
}
var wife = prompt('Is my wife dead? Please answer all questions with Y for yes and N for no.').toLowerCase();

console.log('wife', wife);

if (wife === 'y') {
  alert('you are correct');
} else {

  alert('nice try but incorrect');
}

function question6(){
  var chances = 4

  var answer = prompt('how many kids do you think I have?');
console.log(answer, chances)
  while (chances > 0) {
    if (answer === '1'){
      return alert('correct');
    
    }
    else if (answer< '1'){
      answer = prompt ('Incorrect you are to low')    
      chances --;
    }else { 
        answer = prompt ('Incorrect to high')
        chances--
    }
  }
}

question6()

function question7(){
    var chances = 6
  
    var answer = prompt('Guess what countries I have been too?').toLowerCase();
  console.log(answer, chances)
    while (chances > 0) {
      if (answer === 'iraq'|| answer === 'kuwait'){
        return alert('your awesome you got it');
      }else { 
          answer = prompt ('nice try but you are so wrong').toLowerCase();
          chances--;
      }
    }
  }

question7();