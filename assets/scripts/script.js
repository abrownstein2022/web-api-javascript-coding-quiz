//add El to end of vars below so don't get confused if they are variables
//or selectors
var timerEl = document.querySelector("#timer-count");  //use # since this is based on ID not class
var startButtonEl = document.querySelector(".start-button");  //this is . since based on class not ID
var submitScoresEl = document.querySelector("#submit-scores"); //this is ID not class so need #
var clearScoresEl = document.querySelector("#clear-scores");
var goBackEl = document.querySelector("#go-back");
var showQuizEl = document.querySelector("#quiz-container");
var showStartEl = document.querySelector("#start-container");
var showInitialsEl = document.querySelector("#initials-container");
var showHighScoresEl = document.querySelector("#disp-high-scores");
var quesEl = document.getElementById("ques");
var opt1El = document.getElementById("opt1");
var opt2El = document.getElementById("opt2");
var opt3El = document.getElementById("opt3");
var opt4El = document.getElementById("opt4");
var rightWrongMsgEl = document.getElementById("right-wrong-msg");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var scoresArray = [];  //declare array to hold scores

//need global array for scores - high school array
//put current score and initials in high score array
//save high score array into local storage
//then repopulate values from that array for high scores


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
   showQuizEl.classList.remove("hide");  //now show the quiz section
   showStartEl.classList.add("hide");  //now hide the start button section
   showHighScoresEl.classList.add("hide");   
   showInitialsEl.classList.add("hide");  
   displayQuizData(); //connect to function displayQuizData belowq
  
}
//global function. The html code is static but js gets the dynamic data in the html.
function displayQuizData(){  
//ques and opt1-opt4 are selectors declared above and are objects on the html page
//ques.textContent is the ID on the html page and questions[index] is the array and .ques is the array element defined above
   quesEl.textContent = questions[index].ques; 
   opt1El.textContent = questions[index].opt1;
   opt2El.textContent = questions[index].opt2;  //opt1-4 are the options/choices on the html page
   opt3El.textContent = questions[index].opt3; 
   opt4El.textContent = questions[index].opt4;
}
function nextQuestion(){
      //capture answer before increment to next array element
      //textContent is the text on the button
      //"this."" represents current object which is the button clicked
      if(this.textContent === questions[index].ans){
           //alert("correct answer");   
            rightWrongMsgEl.textContent = "Correct!";
      }else{
          //  alert('wrong answer');
            rightWrongMsgEl.textContent = "Wrong!";
            timeLeft = timeLeft - 10;
      }

      index++; //get next array element
      if(index < qCount){
      displayQuizData();
      }else{
       //Stop the clock, hide the question and unhide the initials logic and hide the questions container.
       //Selectors are to put information on the page and to put user interaction. Button click is user interaction.
       clearInterval(timerID);  //stops the clock
       showQuizEl.classList.add("hide");  //now show the quiz section
       showInitialsEl.classList.remove("hide"); 
       //need to set to selector timerEL not the varriable timeLeft or the score will be one second off
       //need to use textcontent to get value of the selector.  Only use .val for text input boxes.
       finalScoreEl.textContent = timerEl.textContent + '.';  
      
      }

}


//now create function for countDown (function is light blue until it's created below and then turns yellow)
//use textContent to capture data in between element from html page 
function countDown(){  
  timerEl.textContent = timeLeft;
  timeLeft--;  //decrement timer by 1 second
}

function showScores(){
      console.log("in showscores");
      // showInitialsEl.classList.add("hide");  //hide initials list just used to enter data
      // showHighScoresEl.classList.remove("hide"); 
      let data = JSON.parse(localStorage.getItem('scores'));
      console.log(data.finalScore); 
      console.log(data.initials); 
      //https://www.geeksforgeeks.org/ways-iterating-array-javascript/   
      //https://attacomsian.com/blog/javascript-iterate-over-local-storage-keys  
      //use console.table(results)
      // for (let i = 0; i < data.length; i++) {

      //       console.table(data.finalScore);
      // }

      for (const key in localStorage) {
            console.log(`${key}: ${localStorage.getItem(key)}`)
          }
}

function saveScores(){
     //timerEl.textContent must be used to get the selector value since it will not be 1 second off
      finalScoreEl.textContent = timeLeft;  //to put on page
      var finalScore = timerEl.textContent.trim();  //set up for local storage
      var initials = initialsEl.value.trim();  //initialsEl is the selector
      //this is an object to group the values together and then push into array
      //timeleft is the score
  //    var scores = {finalScore, initials}; 
      //push puts new elements into an array - at bottom of array
      //scores is the key name
  //    scoresArray.push(scores);
      //first param below references the local storage value
      //'scores' below references the array in local storage
  //    localStorage.setItem('scores',JSON.stringify(scoresArray));  
      //don't need push above 
      //create scores object from submission ??(see class activity #24)
      //https://www.geeksforgeeks.org/ways-iterating-array-javascript/
      scoresArray = {finalScore, initials};
      // set new submission to local storage 
      localStorage.setItem("scores", JSON.stringify(scoresArray));  
      showHighScoresEl.classList.remove("hide");   
      showInitialsEl.classList.add("hide");  //hide initials list just used to enter data
      showScores();
}





//this starts at the very beginning for user to press Start Quiz button
function showStart(){ 
      showStartEl.classList.remove("hide");
      showHighScoresEl.classList.add("hide");   
      showInitialsEl.classList.add("hide");
      showQuizEl.classList.add("hide");   

}

function clearScores(){
      localStorage.clear();      
      showStart();
}

//add event listener // Attaches event listener to button
//startQuiz below is object (a function) being passed.
//When user clicks on the Start Quiz button, startQuiz function above is run.
//The startQuiz function must be created above this line.
startButtonEl.addEventListener("click",startQuiz);
opt1El.addEventListener("click",nextQuestion);
opt2El.addEventListener("click",nextQuestion); //callback is next question
opt3El.addEventListener("click",nextQuestion);
opt4El.addEventListener("click",nextQuestion);
submitScoresEl.addEventListener("click",saveScores);
clearScoresEl.addEventListener("click",clearScores);
goBackEl.addEventListener("click",showStart);
showHighScoresEl.addEventListener("click",showScores);
