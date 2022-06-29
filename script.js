const callElement = document.querySelector('.call-button');
const closeElement = document.querySelector('.element__close');

callElement.addEventListener('click', () => {
  document.querySelector('.pop-up').classList.remove('inactive');
});

closeElement.addEventListener('click', () => {
  document.querySelector('.pop-up').classList.add('inactive');
});
