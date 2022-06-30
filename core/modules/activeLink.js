const setActiveLink = () => {
  const toolsTabs = document.querySelectorAll('.header__tools .tools__item');

  for (let tab of toolsTabs) {
    tab.addEventListener('click', (e) => {
      toolsTabs.forEach((el) => el.classList.remove('active-link'));
      e.target.classList.add('active-link');
    });
  }
};

export { setActiveLink };
