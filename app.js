/* Imports */

/* Get DOM Elements */
const questionInput = document.getElementById('question-input');
const questionButton = document.getElementById('question-button');
const answerOutput = document.getElementById('answer-output');
const askAgainButton = document.getElementById('ask-again-button');

/* State */
let answers = ['Yes', 'No', 'Maybe', 'Try again', 'Decidedly so', 'Hahaha'];
/* Events */
questionButton.addEventListener('click', () => {
    let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerOutput.textContent = randomAnswer;
    questionInput.value = '';
});

askAgainButton.addEventListener('click', () => {
    answerOutput.textContent = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
