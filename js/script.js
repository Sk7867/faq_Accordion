console.log('Hi');
const questions = document.querySelectorAll('.query');

questions.forEach((question) => {
  question.addEventListener('click', (event) => {
    question.classList.toggle('active');
  });
});
