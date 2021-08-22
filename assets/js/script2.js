var done = document.querySelector(".done");
var score = document.querySelector(".score");
var timerElement = document.querySelector(".timer-count")
var startButton = document.querySelector(".start-button");



var timer;
var timerCount;
var isHighScore = false;

//Start Button
function startGame() {
    isHighScore = false;
    timerCount = 60;
    startButton.disabled = true;
    generateQuiz()
    startTimer()
}

//Click Event 
startButton.addEventListener("click", startGame);


function startTimer() { 
    var timerInterval = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if(timerCount === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
startTimer();

//Quiz
// Questions
var myQuestions = [
    {
        question: "How can you get the type of arguments passed to a function?",
        answers: {
            a: "using typeof operator",
            b: "using getType function",
            c: "all of the above",
            d: "none of the above",
        },
        correctAnswer: "a"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        answers: {
            a: "last()",
            b: "get()",
            c: "pop()",
            d: "none of the above",
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        answers: {
            a: "toString()",
            b: "toFixed()",
            c: "toLocateString()",
            d: "toPrecision()",
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following function of Array object returns a string representing the array and its elements?",
        answers: {
            a: "toSorce()",
            b: "sort()",
            c: "splice()",
            d: "toString()",
        },
        correctAnswer: "d"
    }
];
//Quiz
var quizCard = document.getElementById("quiz");
var resultsCard = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizCard, resultsCard, submitButton);

function generateQuiz(questions, quizCard, resultsCard, submitButton){

    //Show Questions Function
    function showQuestions(questions, quizCard){
        var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ": "
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join("") + '</div>'
            );
        }
        quizCard.innerHTML = output.join("");
    }
}
//Run Question Function
showQuestions(questions, quizCard);

// Results
