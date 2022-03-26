import './filter.js';
import './filter-popup.js';
import './accordion.js';
import './login.js';

const burgerClosed = document.querySelector('.burger-closed');
const burgerOpen = document.querySelector('.burger-open');
const burgerTop = document.querySelector('.burger-closed__top-line');
const burgerBottom = document.querySelector('.burger-closed__bottom-line');
const burgerMiddle = document.querySelector('.burger-closed__middle-line');
const navigationItem = document.querySelectorAll('.page-header__navigation-item');
const navItemArray = Array.from(navigationItem);
const burgerMenuItems = Array.from(document.querySelectorAll('.burger-open__list-item-wrapper'));
const logoTablet = document.querySelector('.page-header__tablet');
const centerContainer = document.querySelector('.center-container');
const logo = document.querySelector('.page-header__logo');
const loginBlock = document.querySelector('.page-header__login-block');
const burgerButton = document.querySelector('.burger-closed').querySelector('button');

// BURGER MENU

logoTablet.classList.add('page-header__tablet-disappear');
burgerClosed.classList.add('burger-closed--change-display');
burgerOpen.classList.add('burger-open--appear');
// pageHeader.classList.remove('page-header--background-color');
navItemArray.forEach((item) => {
  item.classList.add('page-header__navigation-item--disappear');
});

burgerOpen.classList.add('burger-open__action');

burgerButton.addEventListener('click', () => {
  burgerClosed.classList.toggle('burger-closed--change-color');
  loginBlock.classList.toggle('page-header__login-block--change-bag');
  logo.classList.toggle('page-header__logo--change-color');
  burgerOpen.classList.toggle('burger-open__action');
  burgerTop.classList.toggle('burger-closed__top-line--transform');
  burgerBottom.classList.toggle('burger-closed__bottom-line--transform');
  burgerMiddle.classList.toggle('burger-closed__middle-line--transform');
  burgerClosed.classList.toggle('burger-closed--background-color');

  burgerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      centerContainer.classList.remove('center-container--fixed');
      burgerOpen.classList.add('burger-open__action');
      burgerTop.classList.remove('burger-closed__top-line--transform');
      burgerBottom.classList.remove('burger-closed__bottom-line--transform');
      burgerMiddle.classList.remove('visually-hidden');
      burgerClosed.classList.remove('burger-closed--background-color');
    });
  });
});


