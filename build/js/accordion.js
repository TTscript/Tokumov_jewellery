//ACCORDION
const askedQuestion = Array.from(document.querySelectorAll('.asked-questions__block'));

askedQuestion.forEach((item) => item.querySelector('p').classList.add('asked-questions__block--disappear'));

askedQuestion.forEach((item) => item.addEventListener('click', () => {
  item.querySelector('p').classList.toggle('asked-questions__block--appear');
  item.classList.toggle('asked-questions__block--rotate-arrow');
}));

askedQuestion.forEach((item) => item.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    item.querySelector('p').classList.toggle('asked-questions__block--appear');
    item.classList.toggle('asked-questions__block--rotate-arrow');
  }
}));
