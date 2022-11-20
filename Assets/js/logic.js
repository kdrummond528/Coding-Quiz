// list of questions, choices, and correct answers
var questions = [
    {
        title: 'Commonly used data types DO NOT include: ',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed with ___________ .',
        choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        answer: '3. parenthesis'
    },
    {
        title: 'Arrays in JavaScript can be used to store ____________ .',
        choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        title: 'String values must be enclosed within _________ when being assigned to variable.',
        choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        answer: '3. quotes'
    },
    {
        title: 'A very use debugging tool used during development and debugging for printing content to the debugger is:',
        choices: ['1. Javascript', '2. terminal / bash', '3. for loops', '4. console.log'],
        answer: '4. console.log'
    },
    {
        title: '',
        choices: [''],
        answer: ''
    }
];

// variables to keep track of quiz state 
// currentQuestion
// time 
// timer Id
var timer;
var currentQuestion = 0;
var scoreTotal = 100;
var timerCount = 60;
var choicesList;
var endScreen;

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startBtn = document.getElementById('start-btn');
// var feedBack = document.getElementById('feedback');

// hide end screen
var endScreen = document.getElementById("end-screen");
endScreen.style.display = "none";

// hide choices
var choicesList = document.getElementById("choices");
choicesList.style.display = "none";

// hide questions section
var questionsToAsk = document.getElementById("questions");
questionsToAsk.style.display = "none";


// function to start the quiz
function startQuiz() {

    console.log("Quiz started!");

    // hide start screen
    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";

    // un-hide questions section
    var questionsToAsk = document.getElementById("questions");
    questionsToAsk.style.display = "block";

    // un-hide choices
    var choicesList = document.getElementById("choices");
    choicesList.style.display = "block";

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

// function to show questions/choices
function getQuestion() {
    // get current question object from array
    var question=questions[currentQuestion]

    // update title with current question
    document.getElementById("question-title").textContent = question.title;

    // clear out any old question choices
    document.getElementById("answer1").textContent = question.choices[0];
    document.getElementById("answer2").textContent = question.choices[1];
    document.getElementById("answer3").textContent = question.choices[2];
    document.getElementById("answer4").textContent = question.choices[3];
}

document.getElementById("answer1").addEventListener("click",checkQuestion) 
document.getElementById("answer2").addEventListener("click",checkQuestion) 
document.getElementById("answer3").addEventListener("click",checkQuestion) 
document.getElementById("answer4").addEventListener("click",checkQuestion)

// function for clicking a question
function checkQuestion(event) {

    // if the clicked element is not a choice button, do nothing.
    var element = event.target;
    if (element.matches("button") === true) {
        var userChoice = element.getAttribute("data");
    }
    
    // if (something) {}

    // check if user is wrong
    if (userChoice === choices.answer ) {
     // show feedback
    var feedBack = document.getElementById("feedback");
    feedBack.style.display = "block";
    feedBack.innerHTML = 'Correct!'

    // penalize time by 10 seconds

    // display new time on page

    // give them feedback, letting them know it's wrong

    } 
    
    // else {
    //     // give them feedback letting them know it's right
    // }

    // flash right/wrong feedback on page for a short period of time

    // move to next question
    currentQuestion++
    getQuestion()

    // check if we've run out of questions, if so, end the quiz
    if (currentQuestion > 4 ) {
        quizEnd();
    }

}

// function to end the quiz
function quizEnd() {
    // stop timer
    if (timerCount === 0) {
        clearInterval(timer);
    }

    // show end screen
    var endScreen = document.getElementById("end-screen");
    endScreen.style.display = "block";
    
    // hide start screen
    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";

    // hide questions section
    var questionsToAsk = document.getElementById("questions");
    questionsToAsk.style.display = "none";

    // hide choices
    var choicesList = document.getElementById("choices");
    choicesList.style.display = "none"; 

    // show final score
    
}

// function for updating the time
function clockTick() {
    // update time
    
    // check if user ran out of time
    if (timerCount === 0) {
        clearInterval(timer);
    }
}

// function for saving the scores
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