// variables to keep track of quiz state 
// currentQuestion
// time 
// timer Id
var timer;
var currentQuestion = 0;
var scoreTotal = 100;
var timerCount = 60;

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startBtn = document.getElementById('start-btn');

console.log(startBtn);

// function to start the quiz
function startQuiz() {

    console.log("start quiz");

    // hide start screen
    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";

    // un-hide questions section
    var questionsToAsk = document.getElementById("questions");
    questionsToAsk.style.display = "block";

    // start timer
 timer=setInterval(function(){
var timerEl=document.querySelector(".timer-count")
timerEl.textContent=timerCount
timerCount--
},1000)
    // show starting time

    getQuestion(currentQuestion);
}
startBtn.addEventListener("click", startQuiz)

// function to get/show each question
function getQuestion() {
    // get current question object from array
    var question=questions[currentQuestion]
    console.log(question.title);
    // update title with current question
    document.getElementById("question-title").textContent = question.title;
    // clear out any old question choices
    document.getElementById("answer1").textContent = question.choices[0];
    document.getElementById("answer2").textContent = question.choices[1];
    document.getElementById("answer3").textContent = question.choices[2];
    document.getElementById("answer4").textContent = question.choices[3];
    // loop over choices
    // create new button for each choice
    // // display on the page
    // for (let index = 0; index < question.choices.length; index++) {
    //     const answer = question.choices[index];
    //     document.getElementById("question-title").textContent = question.title;
    // }
}


// function for clicking a question
function checkQuestion(event) {
    
    // if the clicked element is not a choice button, do nothing.
    if (something) {

    }

    if (something) {
        // check if user guessed wrong
        //penalize time 10 seconds

        // display new time on page

        // give them feedback, letting them know it's wrong
    } else {
        // give them feedback letting them know it's right
    }

    // flash right/wrong feedback on page for a short period of time

    // move to next question
    currentQuestion++
    getQuestion()
    // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
}

document.getElementById("answer1").addEventListener("click",checkQuestion) 
document.getElementById("answer2").addEventListener("click",checkQuestion) 
document.getElementById("answer3").addEventListener("click",checkQuestion) 
document.getElementById("answer4").addEventListener("click",checkQuestion)

// function to end the quiz
function quizEnd() {
    // stop timer
    if (timerCount === 0) {
        clearInterval(timer);
    }
    // show end screen

    // show final score

    // hide questions section
}

// function for updating the time
function clockTick() {
    // update time
    
    // check if user ran out of time
    if (timerCount === 0) {
        clearInterval(timer);
    }
}

function saveHighscore() {
    // get value of input box - for initials

    // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

// click events
// user clicks button to submit initials

// user clicks button to start quiz
 
// user clicks on element containing choices