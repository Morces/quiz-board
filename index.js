const btn = document.getElementById("submitBtn")

btn.addEventListener("click", (e)=> {
  e.preventDefault()
  score()
})
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

  var result = document.getElementById('result');

  if (answer1 == "It is a scripting language used to create interactivity in web pages.") {
    myScore += 10
  };
  if (answer2 == "Alert") {
    myScore += 10
  };
  if (answer3 == "False") {
    myScore += 10
  };
  if (answer4 == "Client") {
    myScore += 10
  };
  if (answer5 == "alert(“Javascript Quiz”);") {
    myScore += 10
  };
  if (answer6 == "Default") {
    myScore += 10
  };

  result.textContent = myScore;
  questions.style.display = 'none';

  if (myScore==60) {
    alert("Submitted Successfully. Click OK to view your score");
    result.textContent="CONGRATULATIONS!! YOU SCORED 100%. REMARKS: EXCELLENT.";
  } 
  else if (myScore==50) {
    alert("Submitted Successfully. Click OK to view your score");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/60*100 + "%" + ". REMARKS: EXCELLENT.";
  }
  else if (myScore==40) {
    alert("Submitted Successfully. Click OK to view your score");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/60*100 + "%" + ". REMARKS: FAIR.";
  }
  else if (myScore==30) {
    alert("Submitted Successfully. Click OK to view your score");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/60*100 + "%" + ". REMARKS: FAIR.";
  }
  else if (myScore<30) {
  alert("Submitted Successfully. Click OK to view your score");
  result.textContent="YOU HAVED PERFORMED POORLY. PLEASE RETAKE THE QUIZ";
  }
}