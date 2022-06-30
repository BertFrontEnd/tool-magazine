import { toToggleBurger } from './core/modules/toggleBurger.js';
import { setActiveLink } from './core/modules/activeLink.js';
import { toToggleLocation } from './core/modules/toggleLocation.js';

const headerNavigationLinks = document.querySelectorAll('.links__item a');
const headerAuthorizationLinks = document.querySelectorAll(
  '.authorization__item a',
);
/* const toolsTabs = document.querySelectorAll('.header__tools .tools__item'); */
const burgerSwitcher = document.querySelector('.burger__switcher');

window.addEventListener('DOMContentLoaded', toToggleLocation);
window.addEventListener('load', setActiveLink);
burgerSwitcher.addEventListener('input', toToggleBurger);

for (let link of headerNavigationLinks) {
  link.addEventListener('click', () => {
    toToggleBurger();
    if (window.matchMedia('(max-width: 767px)').matches) {
      burgerSwitcher.checked = false;
    }
  });
}

for (let link of headerAuthorizationLinks) {
  link.addEventListener('click', () => {
    toToggleBurger();
    if (window.matchMedia('(max-width: 767px)').matches) {
      burgerSwitcher.checked = false;
    }
  });
}
