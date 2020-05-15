import { mainContent, footer } from './popup.js';

const modalEl = document.querySelector('.modal');
modalEl.style.display = 'none';

const closeModalEl = document.querySelector('.modal__icon')
const commercialLink = document.querySelector('.warn__link');
const modalHeaderEl = document.querySelector('.modal__promo-text');
let modalFeedbackInput = document.querySelector('.modal__input_hidden');
modalFeedbackInput.style.display = 'none';
const orderCallBtn = document.querySelector('.prices__btn');


const listenerFuncCommercial = function (ev) {
    ev.preventDefault();
    modalHeaderEl.textContent = 'Обратная связь';
    modalFeedbackInput.style.display = 'block';
    mainContent.style.display = 'none';
    footer.style.display = 'none';
    modalEl.style.display = 'block';
}
commercialLink.addEventListener('click', listenerFuncCommercial);

closeModalEl.addEventListener('click', function (ev) {
    modalEl.style.display = 'none';
    mainContent.style.display = 'block';
    footer.style.display = 'block';
});
orderCallBtn.addEventListener('click', function (ev) {
    // ev.preventDefault();
    mainContent.style.display = 'none';
    footer.style.display = 'none';
    modalEl.style.display = 'block';
   console.log(modalEl);
});