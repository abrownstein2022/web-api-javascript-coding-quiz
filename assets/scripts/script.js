const myQuestions = [
 {
    question: "Commonly Used data types DO not include:",
    answers: { 
      a:  "1. strings", 
      b:  "2. booleans",
      c:  "3. alerts",
      d:  "4. numbers" 
    },
    correctAnswer: "c"
},
{
    question: "The condition in an if / else statement is enclosed with __________.",
    answers: { 
      a:  "1. quotes", 
      b:  "2. curly brackets",
      c:  "3. parentheses",
      d:  "4. square brackets" 
     },
     correctAnswer: "c"
 },
{
    question: "Arrays in JavaScript can be used to store ____________.",
    answers: { 
            a:  "1. numbers and strings", 
            b:  "2. other arrays",
            c:  "3. booleans",
            d:  "4. all of the above" 
      },
      correctAnswer: "d"
},
{
    question: "String values must be enclosed within ____________ when being assigned to variables.",
    answers: { 
            a:  "1. commas", 
            b:  "2. curly braces",
            c:  "3. quotes",
            d:  "4. parentheses" 
      },
      correctAnswer: "c"
 },
 {
     question: "A very useful tool used during development and debugging for printing content to the debugger is ____________.",
     answers: { 
            a:  "1. JavaScript", 
            b:  "2. terminal/bash",
            c:  "3. for loops",
            d:  "4. console log" 
      },
      correctAnswer: "d"
  },
];

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