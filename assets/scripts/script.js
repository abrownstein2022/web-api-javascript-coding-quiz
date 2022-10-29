var timerEl = document.querySelector("#timer-count");  //use # since this is based on ID not class
var startButton = document.querySelector(".start-button");  //this is . since based on class not ID
var showQuiz = document.querySelector("#quiz-container");
var showStart = document.querySelector("#start-container");
var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var rightWrongMsg = document.getElementById("right-wrong-msg");

// function updateTimer() {
//      timerInterval = setInterval(function () {
// //when timer reaches zero, clear interval function and display game over
//         if (timeLeft === 0) {
//                clearInterval(timerInterval);
//                gameOver();
//           } else {
//           timeLeft--;
//           timerDisplay.textContent = timeLeft + " seconds left";
//           }
//      }, 1000);
// }


//array to store the questions, answers and correct answer
const questions = [
 {
      ques:  "Commonly Used data types does not include:", 
      opt1:  "1. strings", 
      opt2:  "2. booleans",
      opt3:  "3. alerts",
      opt4:  "4. numbers",
      ans:   "3. alerts",
},
{
      ques:  "The condition in an if / else statement is enclosed with __________.",
      opt1:  "1. quotes", 
      opt2:  "2. curly brackets",
      opt3:  "3. parentheses",
      opt4:  "4. square brackets",
      ans:   "3. parentheses"
},
{
      ques:  "Arrays in JavaScript can be used to store ____________.",
      opt1:  "1. numbers and strings", 
      opt2:  "2. other arrays",
      opt3:  "3. booleans",
      opt4:  "4. all of the above",
      ans:   "4. all of the above"
},
{
      ques:  "String values must be enclosed within ____________ when being assigned to variables.",
      opt1:  "1. commas", 
      opt2:  "2. curly braces",
      opt3:  "3. quotes",
      opt4:  "4. parentheses",
      ans:   "3. quotes"
},
{
      ques:  "A very useful tool used during development and debugging for printing content to the debugger is ____________.",
      opt1:  "1. JavaScript", 
      opt2:  "2. terminal/bash",
      opt3:  "3. for loops",
      opt4:  "4. console log",
      ans:   "4. console log"
  }
];

var index = 0;  //use this var to count array elements so can go to next element until no more left
 // If user pressed Cancel, immediately end function
//  if (!userChoice) {
//   return;
// }

var qCount = questions.length;  //array length is how many items in the array
var timeLeft = qCount * 15;  //timer starts at 15 seconds per question so 5 questions * 15 secs = 75
var timerID; //need a way to capture timer process id at global level so we can kill it later 
function startQuiz(){  //use setInterval for timer and countDown is a function parameter of another function (callback function)
   timerID = setInterval(countDown,1000)  //1000 milliseconds = 1 second - so initial interval is by 1 secord
   showQuiz.classList.remove("hide");  //now show the quiz section
   showStart.classList.add("hide");  //now hide the start button section
   displayQuizData(); //connect to function displayQuizData belowq
  
}
//global function. The html code is static but js gets the dynamic data in the html.
function displayQuizData(){  
//ques and opt1-opt4 are selectors declared above and are objects on the html page
//ques.textContent is the ID on the html page and questions[index] is the array and .ques is the array element defined above
   ques.textContent = questions[index].ques; 
   opt1.textContent = questions[index].opt1;
   opt2.textContent = questions[index].opt2;  //opt1-4 are the options/choices on the html page
   opt3.textContent = questions[index].opt3; 
   opt4.textContent = questions[index].opt4;
}
function nextQuestion(){
      //capture answer before increment to next array element
      //textContent is the text on the button
      //"this."" represents current object which is the button clicked
      if(this.textContent === questions[index].ans){
           //alert("correct answer");   
            rightWrongMsg.textContent = "Correct!";
      }else{
          //  alert('wrong answer');
            rightWrongMsg.textContent = "Wrong!";
      }

      index++; //get next array element
      if(index < qCount){
      displayQuizData();
      }else{
       //stop the clock, hide the question and unhide the initials logic and hide the questions container
       //selectors are to put information on the page and to put user interaction
       //button click is user interaction.
      }

}

//now create function for countDown (function is light blue until it's created below and then turns yellow)
//use textContent to capture data in between element from html page 
function countDown(){  
  timerEl.textContent = timeLeft;
  timeLeft--;  //decrement timer by 1 second
}

//add event listener // Attaches event listener to button
//startQuiz below is object (a function) being passed.
//When user clicks on the Start Quiz button, startQuiz function above is run.
//The startQuiz function must be created above this line.
startButton.addEventListener("click",startQuiz);
opt1.addEventListener("click",nextQuestion);
opt2.addEventListener("click",nextQuestion); //callback is next question
opt3.addEventListener("click",nextQuestion);
opt4.addEventListener("click",nextQuestion);