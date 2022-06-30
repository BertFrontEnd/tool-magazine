const toToggleBurger = () => {
  const htmlDocument = document.querySelector('html');
  const navMenu = document.querySelector('.info__navigation');

  if (window.matchMedia('(max-width: 767px)').matches) {
    if (
      htmlDocument.style.overflow === '' ||
      htmlDocument.style.overflow === 'auto'
    ) {
      htmlDocument.style.overflow = 'hidden';
    } else {
      htmlDocument.style.overflow = 'auto';
    }

    navMenu.classList.toggle('active-menu');
  }
};

export { toToggleBurger };
