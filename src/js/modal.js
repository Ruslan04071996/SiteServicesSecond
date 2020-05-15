const modalEl = document.querySelector('.modal');
modalEl.style.display = 'none';

const commercialLink = document.querySelector('.warn__link');
const modalHeaderEl = document.querySelector('.modal__promo-text');
const modalFeedbackInput = document.querySelector('.modal__input_hidden');

commercialLink.addEventListener('click', function (ev) {
    ev.preventDefault();
    modalHeaderEl.textContent = 'Обратная связь';
    modalFeedbackInput.style.display = 'block';
})