//let qz = document.getElementById("qz");
  //qz.addEventListener("submit". function() {
  //  alert ("Form submitted successfully")
  //})

function score(){
  var answer1 = document.questions.q1.value;
  var answer2 = document.questions.q2.value;
  var answer3 = document.questions.q3.value;
  var answer4 = document.questions.q4.value;
  var answer5 = document.questions.q5.value;
  var answer6 = document.questions.q6.value;
 
  var result  = document.getElementsById('result');
  var qz = document.getElementsById("qz");
  var myScore = 0;
  if (answer1 === "It is a scripting language used to create interactivity in web pages."){myScore +=10};
  if (answer2 === "Alert"){myScore +=10};
  if (answer3 === "False"){myScore +=10};
  if (answer4 === "Client"){myScore +=10};
  if (answer5 === "alert(“Javascript Quiz”);"){myScore +=10};
  if (answer6 === "Default"){myScore +=10};
qz.style.display = "none";
result.textContent = myScore;
  if (myScore==60) {
    empty.textContent= "CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: EXCELLENT."
  }
  else if (myScore==50) {
    empty.textContent= "CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: EXCELLENT."
  };
  else if (myScore==40) {
    empty.textContent = "CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: FAIR."
  };
  else if (myScore==30) {
    empty.textContent = "CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: FAIR."
  };
  else if (myScore<30) {
    empty.textContent = "YOU HAVED PERFORMED POORLY. PLEASE RETAKE THE QUIZ"
  }
  }
  