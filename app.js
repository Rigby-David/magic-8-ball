/* Imports */

/* Get DOM Elements */
const questionInput = document.getElementById('question-input');
const questionButton = document.getElementById('question-button');
const answerOutput = document.getElementById('answer-output');

/* State */
let answers = ['Yes', 'No', 'Maybe', 'Try again', 'Decidedly so', 'Hahaha'];
/* Events */
let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
questionButton.addEventListener('click', () => {
    answerOutput.textContent = randomAnswer;
    questionInput.value = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
