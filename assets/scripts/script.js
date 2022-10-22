// var timerEl = document.getElementById('timer-count');
// var questionEl = document.getElementById('question');
// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");


var timerEl = document.querySelector("#timer-count");  //use # since this is based on ID not class
var startButton = document.querySelector(".start-button");  //this is . since based on class not ID
var showQuiz = document.querySelector("#quiz-container");
var showStart = document.querySelector("#start-container");

function updateTimer() {
     timerInterval = setInterval(function () {
//when timer reaches zero, clear interval function and display game over
        if (timeLeft === 0) {
               clearInterval(timerInterval);
               gameOver();
          } else {
          timeLeft--;
          timerDisplay.textContent = timeLeft + " seconds left";
          }
     }, 1000);
}


//array to store the questions, answers and correct answer
const myQuestions = [
 {
    question: "Commonly Used data types DO not include:",
    answers: { 
      option1:  "1. strings", 
      option2:  "2. booleans",
      option3:  "3. alerts",
      option4:  "4. numbers" 
    },
    correctAnswer: "option3"
},
{
    question: "The condition in an if / else statement is enclosed with __________.",
    answers: { 
      option1:  "1. quotes", 
      option2:  "2. curly brackets",
      option3:  "3. parentheses",
      option4:  "4. square brackets" 
     },
     correctAnswer: "option3"
 },
{
    question: "Arrays in JavaScript can be used to store ____________.",
    answers: { 
      option1:  "1. numbers and strings", 
      option2:  "2. other arrays",
      option3:  "3. booleans",
      option4:  "4. all of the above" 
      },
      correctAnswer: "option4"
},
{
    question: "String values must be enclosed within ____________ when being assigned to variables.",
    answers: { 
      option1:  "1. commas", 
      option2:  "2. curly braces",
      option3:  "3. quotes",
      option4:  "4. parentheses" 
      },
      correctAnswer: "option3"
 },
 {
     question: "A very useful tool used during development and debugging for printing content to the debugger is ____________.",
     options: { 
      option1:  "1. JavaScript", 
      option2:  "2. terminal/bash",
      option3:  "3. for loops",
      option4:  "4. console log" 
      },
      correctAnswer: "option4"
  }
];

var numberOfQuestions = myQuestions.length;
var timeLeft = numberOfQuestions * 15;  //timer starts at 15 seconds per question so 5 questions * 15 secs = 75
var timerID; //need a way to capture timer process id at global level so we can kill it later 
function start(){  //use setInterval for timer and countDown is a function parameter of another function (callback function)
   timerID = setInterval(countDown,1000)  //1000 milliseconds = 1 second 
   showQuiz.classList.remove("hide");  //now show the quiz section
   showStart.classList.add("hide");  //now hide the start button section
}
//now create function for countDown (function is light blue until it's created below and then turns yellow)
function countDown(){  //use textContent to capture data in between element from html page 
  timerEl.textContent = timeLeft;
  timeLeft--;  //decrement timer by 1 second
}

//add event listener
startButton.addEventListener("click",start)  //start is object being passed - when user clicks on start button, start function is run and must be created above it