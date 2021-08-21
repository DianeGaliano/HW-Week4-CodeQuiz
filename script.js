var answerChoice = document.querySelector(".answer-choice");
var done = document.querySelector(".done");
var score = document.querySelector(".high-score");
var startButton = document.querySelector(".start-button");





// Updates correct score and sets score count to clients storage
function setCorrect() {
    correct.textContent = correctCounter;
    localStorage.setItem("correctCount", correctCounter);
  }
// Updates wrong score and sets score count to clients storage
function setWrong() {
    wrong.textContent = wrongCounter;
    localStorage.setItem("wrongCount", wrongCounter);
  }

// Function to init 
//Correct
function gitCorrect() {
    var storedCorrect = localStorage.getItem("correctCount")
    if (storedCorrect === null) {
        correctCounter = 0;
    } else {
        correctCounter = storedCorrect;
    }
    correct.textContent = correctCounter;
}

//Wrong
function gitWrong() {
    var storedWrong = localStorage.getItem("wrongCount")
    if (storedWrong === null) {
        wrongCounter = 0;
    } else {
        wrongCounter = storedWrong;
    }
    wrong.textContent = wrongCounter;