var readlineSync = require("readline-sync");

score = 0;
var userName = readlineSync.question("what's your name?");
console.log(" welcome " +  userName + " let's play IPL quiz");

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("right!!");
    score = score + 1;
  } else {
    console.log("wrong!!");
  }
  console.log("current score",score);
  console.log("____________________________________")
}
var questions = [{
  question: "1. In which year indian premier league started?",
  answer: "2008"
}, {
  question: "2. which team has won the most indian premier league titles?",
  answer: "mumbai"
}, {
  question: "3. which team has made the most indian premier league final?",
  answer: "chennai"
}, {
  question: "4. which team won the first indian premier league title?",
  answer: "deccan charger"
},{
  question: "5. How many teams participate in indian premier league?",
  answer: "10"
}];
for(var i=0; i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
  
  


