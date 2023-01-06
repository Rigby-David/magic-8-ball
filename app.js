/* Imports */

/* Get DOM Elements */
const questionInput = document.getElementById('question-input');
const questionButton = document.getElementById('question-button');
const answerOutput = document.getElementById('answer-output');
const askAgainButton = document.getElementById('ask-again-button');

console.log('askAgainButton', askAgainButton);
/* State */
let answers = ['Yes', 'No', 'Maybe', 'Try again', 'Decidedly so', 'Hahaha'];
let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
/* Events */
questionButton.addEventListener('click', () => {
    answerOutput.textContent = randomAnswer;
    questionInput.value = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
