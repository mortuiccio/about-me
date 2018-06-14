'use strict';
var points = 0 
alert('It is time for you to know about me!');

var userName = prompt('what is your name?');

console.log("the user is: ", userName);
function question1(){


  var daughter = prompt('Is my daughters name Tabitha? Please answer all questions with Y for yes and N for no.').toLowerCase();

  console.log('daughter', daughter);

  if (daughter === 'y') {
    points++;
    alert('you are correct and you have '+ points + ' points');
  } else {

    alert('nice try but incorrect and you did not get a point, you have '+ points + ' points');
  }
}
question1();

function question2(){


  var Taya = prompt('Is my dogs name Taya? Please answer all questions with Y for yes and N for no.').toLowerCase();

  console.log('Taya', Taya);

  if (Taya === 'y') {
    points++; 
    alert('you are correct and you have '+ points + ' points');
  } else {
    alert('nice try but incorrect');
  }
}
question2();

function question3(){

  var trevor = prompt('Is my cats name Trevor? Please answer all questions with Y for yes and N for no.').toLowerCase();

  console.log('Trevor', trevor);

  if (trevor === 'n') {
    points++;
    alert('you are correct and you have '+ points + ' points');
  } else {

    alert('nice try but incorrect');
  }
}
question3();

function question4(){

  var ben = prompt('Is my friends name Ben? Please answer all questions with Y for yes and N for no.').toLowerCase();

  console.log('Ben', ben);

  if (ben === 'y') {
    points++;
    alert('you are correct and you have '+ points + ' points');
  } else {

    alert('nice try but incorrect');
  }
}
question4();

function question5(){

  var wife = prompt('Is my wife dead? Please answer all questions with Y for yes and N for no.').toLowerCase();

  console.log('wife', wife);

  if (wife === 'y') {
    points++;
    alert('you are correct and you have '+ points + ' points');
  } else {

    alert('nice try but incorrect');
  }
}
question5();

function question6(){
  var chances = 4;

  var answer = prompt('how many kids do you think I have?');
  console.log(answer, chances);
  while (chances > 0) {
    if (answer === '1'){
      points++;
      return alert('correct and you have '+ points + ' points');
    
    }
    else if (answer< '1'){
      answer = prompt ('Incorrect you are to low')    
      chances --;
    }else { 
      answer = prompt ('Incorrect to high')
      chances--;
    }
  }
}

question6();

function question7(){
  var chances = 6
  
  var answer = prompt('Guess what countries I have been too?').toLowerCase();
  console.log(answer, chances)
  while (chances > 0) {
    if (answer === 'iraq'|| answer === 'kuwait'){
      points++;
      return alert('your awesome you got it and you have '+ points + ' points');
    }else { 
      answer = prompt ('nice try but you are so wrong').toLowerCase();
      chances--;
    }
  }
}

question7();

alert('good job you have a total of'+ points + ' points');