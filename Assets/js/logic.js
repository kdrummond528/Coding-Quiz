// variables to keep track of quiz state 
// currentQuestion
// time 
// timer Id

var currentQuestion = 0;
var scoreTotal = 100;

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

    // show starting time

    getQuestion(currentQuestion);
}
startBtn.addEventListener("click", startQuiz)

// function to get/show each question
function getQuestion(currentQuestion) {
    // get current question object from array
    console.log(questions[currentQuestion].title);
    // update title with current question
    document.getElementById("question-title").textContent = questions[currentQuestion].title;
    // clear out any old question choices

    // loop over choices
    // create new button for each choice
    // display on the page
    for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
        const element = questions[currentQuestion].choices[index];
    }

}



// function for clicking a question
function questionClick(event) {
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

    // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
}

// function to end the quiz
function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section
}

// function for updating the time
function clockTick() {
    // update time
    
    // check if user ran out of time
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