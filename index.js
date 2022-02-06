// function thisButton() {
//   var myScore = 0;
//   var answer1 = document.quizes.q1.value;
//   var answer2 = document.quizes.q2.value;
//   var answer3 = document.quizes.q3.value;
//   var answer4 = document.quizes.q4.value;
//   var answer5 = document.quizes.q5.value;
//   var answer6 = document.quizes.q6.value;

//   var result = document.getElementById("result");
//   // conditions for when the answer is correct 
//   if (answer1 = "It is a scripting language used to create interactivity in web pages.") {myScore++};
//   if (answer2 = "Alert"){myScore++};
//   if (answer3 = "False"){myScore++};
//   if (answer4 = "Client"){myScore++};
//   if (answer5 = "alert(“Javascript Quiz”);"){myScore++};
//   if (answer6 = "Default"){myScore++};

//   // responses to the set conditions
//   if (myScore=6){
//   alert("Click OK to see score")
//   result.textContent= "YOUR SCORE IS: 100%. EXCELLENT!!"
//   }
//   else if (myScore=5){
//   alert("Click OK to see score")
//   result.textContent= "YOUR SCORE IS: " + myScore/6*100 + "%" + ". EXCELLENT!!"
//   }
//   else if (myScore=4){
//   alert("Click OK to see score")
//   result.textContent= "YOUR SCORE IS: " + myScore/6*100 + "%" + ". FAIRLY PASSED."
//   }
//   else if (myScore=3){
//   alert("Click OK to see score")
//   result.textContent= "YOUR SCORE IS: " + myScore/6*100 + "%" + ". FAIRLY PASSED."
//   }
//   else (myScore<3){
//   alert("Click OK to see score")
//   result.textContent= "YOUR SCORE IS: " + myScore/6*100 + "%" + ". YOU HAVE PERFORMED POORLY, PLEASE RETAKE QUIZ."
//   }
// }
function score() {
var myScore = 0;
//stores the quiz answers
var answer1 = document.questions.q1.value;
var answer2 = document.questions.q2.value;
var answer3 = document.questions.q3.value;
var answer4 = document.questions.q4.value;
var answer5 = document.questions.q5.value;
var answer6 = document.questions.q6.value;
//these are the correct answers for the quiz
var result  = document.getElementsById('result');

if (answer1=="It is a scripting language used to create interactivity in web pages."){myScore+=10};
if (answer2=="Alert"){myScore+=10};
if (answer3=="False"){myScore+=10};
if (answer4=="Client"){myScore+=10};
if (answer5=="alert(“Javascript Quiz”);"){myScore+=10};
if (answer6=="Default"){myScore+=10};
  
  
   result.textContent = myScore;
  if (myScore==60) {
    alert("Submitted Successfully");
    result.textContent="CONGRATULATIONS!! YOU SCORED 100%. REMARKS: EXCELLENT.";
  } 
  else if (myScore==50) {
    alert("Submitted Successfully");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: EXCELLENT.";
  }
  else if (myScore==40) {
    alert("Submitted Successfully");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: FAIR.";
  }
  else if (myScore==30) {
    alert("Submitted Successfully");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: FAIR.";
  }
  else if (myScore<30) {
  alert("Submitted Successfully");
  result.textContent="YOU HAVED PERFORMED POORLY. PLEASE RETAKE THE QUIZ";
  }
  }
