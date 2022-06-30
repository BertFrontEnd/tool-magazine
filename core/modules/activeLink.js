const setActiveLink = () => {
  const toolsTabs = document.querySelectorAll('.header__tools .tools__item');

  for (let tab of toolsTabs) {
    toolsTabs.forEach((el) => el.classList.remove('active-link'));
    tab.addEventListener('click', (e) => {
      e.target.classList.add('active-link');
    });
  }
};

export { setActiveLink };
