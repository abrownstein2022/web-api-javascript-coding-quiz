
//toggle to display or hide html elements - pass element id
//so can use this function for all elements
function displayHideElement(elementName) {
  var x = document.getElementById(elementName);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/array to store the questions, answers and correct answer
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
