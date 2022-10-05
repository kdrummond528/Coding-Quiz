var currentQuestion = 0;
var scoreTotal = 100;

var questionsEl = document.getElementById('questions');
var startBtn = document.getElementById('start-btn');

console.log(startBtn);

// function to start the quiz
function startQuiz() {

    console.log("start quiz");

    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";

    var questionsToAsk = document.getElementById("questions");
    questionsToAsk.style.display = "block";

    getQuestion(currentQuestion);
}
startBtn.addEventListener("click", startQuiz)

// function to show each question once the quiz has started
function getQuestion(currentQuestion) {

    console.log(questions[currentQuestion].title);

    document.getElementById("question-title").textContent = questions[currentQuestion].title;

    for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
        const element = questions[currentQuestion].choices[index];

    }

}

// function to get each question
function getQuestion() {
    questions.title[0]

    // list of questions, choices, and correct answers
    var questions = [
        {
            title: '1. Commonly used data types DO NOT include: ',
            choices: [
                'a. strings',
                'b. booleans',
                'c. alerts',
                'd. numbers'
            ],
            answer: 'c. alerts'
        },
        {
            title: '2. The condition in an if / else statement is enclosed with ___________ .',
            choices: [
                'a. quotes',
                'b. curly brackets',
                'c. parenthesis',
                'd. square brackets'
            ],
            answer: 'c. parenthesis'
        },
        {
            title: '3. Arrays in JavaScript can be used to store ____________ .',
            choices: [
                'a. numbers and strings',
                'b. other arrays',
                'c. booleans',
                'd. all of the above'
            ],
            answer: 'd. all of the above'
        }, {
            title: '1. String values must be enclosed within _________ when being assigned to variable.',
            choices: [
                'a. commas',
                'b. curly brackets',
                'c. quotes',
                'd. parenthesis'
            ],
            answer: 'c. quotes'
        }, {
            title: '2. A very use debugging tool used during development and debugging for printing content to the debugger is:',
            choices: [
                'a. Javascript',
                'b. terminal / bash',
                'c. for loops',
                'd. console.log'
            ],
            answer: 'd. console.log'
        }
    ]
}


// function for answer choices
// function questionClick(event) {
//     // if clicked answer choice is wrong
//     if () {

//     }
//     // if clicked answer choice is right
//     if () {

//     }
// }
