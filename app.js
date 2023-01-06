/* Imports */

/* Get DOM Elements */
const questionInput = document.getElementById('question-input');
const questionButton = document.getElementById('question-button');
const answerOutput = document.getElementById('answer-output');

/* State */
const answers = ['Yes', 'No', 'Maybe', 'Try again', 'Decidedly so', 'Hahaha'];
/* Events */
questionButton.addEventListener('click', () => {
    answerOutput.textContent = answers[0];
    questionInput.value = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
