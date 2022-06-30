const toToggleLocation = (e) => {
  const dropdownItems = document.querySelectorAll('.dropdown__item');

  const location = [
    {
      city: 'Москва',
      phone: '8 495 721-25-25',
      value: '84957212525',
      time: '10:00 — 19:00',
    },
    {
      city: 'Минск',
      phone: '8 029 788-95-13',
      value: '80297889513',
      time: '9:00 — 18:00',
    },
  ];

  let timeDom = document.querySelector('.contact__time');
  let cityDom = document.querySelector('.contact__location');
  let phoneDom = document.querySelector('.contact__phone a');

  for (let item of dropdownItems) {
    item.addEventListener('click', () => {
      for (let el in location) {
        if (location[el].city == item.textContent) {
          timeDom.textContent = location[el].time;
          cityDom.textContent = location[el].city;
          phoneDom.textContent = location[el].phone;
          phoneDom.href = location[el].value;
        }
      }
    });
  }
};

export { toToggleLocation };
